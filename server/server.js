const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const multer = require('multer');
const FormData = require('form-data');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..')));

// Rate limiting untuk keamanan
const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 menit
    max: 30, // maksimal 30 request per menit
    message: { error: 'Terlalu banyak request, coba lagi nanti.' },
    skipSuccessfulRequests: true
});
app.use('/api/', limiter);

// Konfigurasi upload
const storage = multer.memoryStorage();
const upload = multer({ 
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit
});

// API Keys (simpan di environment variable untuk production)
const IMGBB_API_KEY = process.env.IMGBB_API_KEY || 'fc04ecb5446e5645ce99bcdab7ba7b86';
const CLOUD_NAME = 'ddbqhpuoz';
const UPLOAD_PRESET = 'ml_default';

// ==================== API ENDPOINTS ====================

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Upload Image ke ImgBB
app.post('/api/upload/img', upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }
        
        const formData = new FormData();
        formData.append('image', req.file.buffer.toString('base64'));
        
        const response = await axios.post(
            `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
            formData,
            { headers: { ...formData.getHeaders() }, timeout: 30000 }
        );
        
        if (response.data.success) {
            let url = response.data.data.url;
            // Fix i.ibb.co URL issue
            if (url.includes('i.ibb.co') && !url.includes('i.ibb.co.com')) {
                url = url.replace('i.ibb.co', 'i.ibb.co.com');
            }
            res.json({ success: true, url: url });
        } else {
            res.status(500).json({ error: 'Upload failed' });
        }
    } catch (err) {
        console.error('Upload error:', err);
        res.status(500).json({ error: err.message });
    }
});

// Upload Video/Audio ke Cloudinary
app.post('/api/upload/media', upload.single('file'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }
        
        const formData = new FormData();
        formData.append('file', req.file.buffer.toString('base64'));
        formData.append('upload_preset', UPLOAD_PRESET);
        
        const response = await axios.post(
            `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/auto/upload`,
            formData,
            { headers: { ...formData.getHeaders() }, timeout: 60000 }
        );
        
        if (response.data.secure_url) {
            res.json({ success: true, url: response.data.secure_url });
        } else {
            res.status(500).json({ error: 'Upload failed' });
        }
    } catch (err) {
        console.error('Upload error:', err);
        res.status(500).json({ error: err.message });
    }
});

// Proxy untuk mockup API
app.post('/api/mockup/generate', async (req, res) => {
    try {
        const { endpoint, baseUrl, params } = req.body;
        const apiBaseUrl = baseUrl || 'https://api.zenzxz.my.id';
        let targetUrl = `${apiBaseUrl}${endpoint}`;
        
        if (params && Object.keys(params).length) {
            const searchParams = new URLSearchParams();
            Object.entries(params).forEach(([k, v]) => searchParams.append(k, v));
            targetUrl += `?${searchParams.toString()}`;
        }
        
        const response = await axios.get(targetUrl, {
            responseType: 'arraybuffer',
            timeout: 30000,
            headers: { 'User-Agent': 'QuickFake/2.0' }
        });
        
        const contentType = response.headers['content-type'] || 'image/png';
        res.setHeader('Content-Type', contentType);
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.send(Buffer.from(response.data));
        
    } catch (err) {
        console.error('Mockup proxy error:', err);
        res.status(500).json({ error: err.message });
    }
});

// Proxy untuk SSWeb
app.post('/api/ssweb', async (req, res) => {
    try {
        const { url, device, fullPage, scale } = req.body;
        
        const fullPageValue = fullPage === 'true' || fullPage === 'penuh' ? 'true' : 'false';
        const scaleValue = scale || '1';
        
        const endpoints = [
            `https://api.zenzxz.my.id/tools/ssweb?url=${encodeURIComponent(url)}&device=${device}&full_page=${fullPageValue}&scale=${scaleValue}`,
            `https://api.siputzx.my.id/tools/ssweb?url=${encodeURIComponent(url)}&device=${device}&full_page=${fullPageValue}&scale=${scaleValue}`
        ];
        
        let lastError = null;
        
        for (const endpoint of endpoints) {
            try {
                const response = await axios.get(endpoint, {
                    responseType: 'arraybuffer',
                    timeout: 25000,
                    headers: { 'User-Agent': 'QuickFake/2.0' }
                });
                
                const contentType = response.headers['content-type'];
                if (contentType && (contentType.startsWith('image/') || contentType === 'application/octet-stream')) {
                    res.setHeader('Content-Type', contentType || 'image/png');
                    return res.send(Buffer.from(response.data));
                }
            } catch (err) {
                lastError = err;
                console.log(`Endpoint failed: ${endpoint}`);
            }
        }
        
        throw lastError || new Error('All endpoints failed');
        
    } catch (err) {
        console.error('SSWeb error:', err);
        res.status(500).json({ error: err.message });
    }
});

// Proxy untuk berita
app.get('/api/berita/:source', async (req, res) => {
    try {
        const { source } = req.params;
        const sources = {
            cnbc: 'https://api.siputzx.my.id/api/berita/cnbcindonesia',
            liputan6: 'https://api.siputzx.my.id/api/berita/liputan6',
            tribun: 'https://api.siputzx.my.id/api/berita/tribunnews',
            sindonews: 'https://api.siputzx.my.id/api/berita/sindonews',
            kompas: 'https://api.siputzx.my.id/api/berita/kompas',
            merdeka: 'https://api.siputzx.my.id/api/berita/merdeka',
            cnn: 'https://api.siputzx.my.id/api/berita/cnn',
            antara: 'https://api.siputzx.my.id/api/berita/antara'
        };
        
        const apiUrl = sources[source];
        if (!apiUrl) {
            return res.status(400).json({ error: 'Invalid source' });
        }
        
        const response = await axios.get(apiUrl, { timeout: 15000 });
        res.json(response.data);
        
    } catch (err) {
        console.error('Berita proxy error:', err);
        res.status(500).json({ error: err.message });
    }
});

// Proxy untuk gempa
app.get('/api/gempa', async (req, res) => {
    try {
        const response = await axios.get('https://api.siputzx.my.id/api/info/bmkg', { timeout: 15000 });
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Proxy untuk cuaca
app.get('/api/cuaca', async (req, res) => {
    try {
        const { q } = req.query;
        if (!q) {
            return res.status(400).json({ error: 'City name required' });
        }
        const response = await axios.get(`https://api.siputzx.my.id/api/info/cuaca?q=${encodeURIComponent(q)}`, { timeout: 15000 });
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Proxy untuk jadwal TV
app.get('/api/jadwaltv', async (req, res) => {
    try {
        const { channel } = req.query;
        if (!channel) {
            return res.status(400).json({ error: 'Channel required' });
        }
        const response = await axios.get(`https://api.siputzx.my.id/api/info/jadwaltv?channel=${channel}`, { timeout: 15000 });
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Serve index.html for all other routes (SPA support)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 QuickFake PRO Server running on http://localhost:${PORT}`);
    console.log(`📱 Mobile optimized | 🔒 Rate limited | ⚡ Production ready`);
});