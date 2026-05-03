// ==================== KONFIGURASI API ====================
const CLOUD_NAME = "ddbqhpuoz";
const UPLOAD_PRESET = "ml_default";
const IMGBB_API_KEY = "fc04ecb5446e5645ce99bcdab7ba7b86";

// ==================== UTILITY FUNCTIONS ====================
function setStatus(el, msg, type) {
    if (!el) return;
    el.classList.remove('success', 'error');
    if (type) el.classList.add(type);
    el.textContent = msg || '';
}

function copyUrl(inputId) {
    const input = document.getElementById(inputId);
    if (!input || !input.value) return;

    input.focus();
    input.select();
    input.setSelectionRange(0, 99999);

    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(input.value).then(() => showCopyFeedback(input)).catch(() => legacyCopy(input));
    } else {
        legacyCopy(input);
    }
}

function legacyCopy(input) {
    try {
        const ok = document.execCommand("copy");
        if (ok) showCopyFeedback(input);
        else alert("Tekan lama pada URL lalu pilih Salin.");
    } catch (e) { alert("Tekan lama pada URL lalu pilih Salin."); }
}

function showCopyFeedback(input) {
    const old = input.value;
    input.value = "✔ Copied!";
    setTimeout(() => { input.value = old; }, 900);
}

function setLoading(btn, statusEl, loading) {
    if (!btn) return;
    btn.disabled = loading;
    if (loading) {
        btn.classList.add("shimmer");
        if (statusEl) setStatus(statusEl, "Uploading...", null);
    } else {
        btn.classList.remove("shimmer");
    }
}

function updateFileName(inputId, nameDisplayId) {
    const input = document.getElementById(inputId);
    const display = document.getElementById(nameDisplayId);
    if (!input || !display) return;
    
    input.addEventListener('change', () => {
        const file = input.files?.[0];
        if (file) {
            display.textContent = file.name;
        } else {
            display.textContent = 'Tidak ada file yang dipilih';
        }
    });
}

function bindPreview(inputId, mediaId, emptyId) {
    const input = document.getElementById(inputId);
    const media = document.getElementById(mediaId);
    const empty = document.getElementById(emptyId);
    if (!input || !media || !empty) return;

    input.addEventListener('change', () => {
        const file = input.files && input.files[0];
        if (!file) {
            media.style.display = 'none';
            empty.style.display = 'block';
            if (media.tagName === 'IMG') media.src = '';
            else media.removeAttribute('src');
            return;
        }
        const url = URL.createObjectURL(file);
        if (media.tagName === 'IMG') {
            media.src = url;
        } else {
            media.src = url;
            if (media.load) media.load();
        }
        media.style.display = 'block';
        empty.style.display = 'none';
    });
}

async function uploadToImgBB(file) {
    const formData = new FormData();
    formData.append("image", file);

    const response = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
        method: "POST",
        body: formData
    });

    const data = await response.json();
    if (!data.success) {
        throw new Error(data.error?.message || "Upload ke ImgBB gagal");
    }
    
    let url = data.data.url;
    if (url.includes('i.ibb.co') && !url.includes('i.ibb.co.com')) {
        url = url.replace('i.ibb.co', 'i.ibb.co.com');
    }
    
    return url;
}

async function uploadCloudinary(file, endpoint) {
    const form = new FormData();
    form.append('file', file);
    form.append('upload_preset', UPLOAD_PRESET);

    const res = await fetch(endpoint, { method: 'POST', body: form });
    const json = await res.json();
    if (!res.ok || !json?.secure_url) throw new Error(json?.error?.message || 'Upload gagal.');
    return json.secure_url;
}

async function uploadImg() {
    const fileInput = document.getElementById('imgFile');
    const btn = document.getElementById('imgUploadBtn');
    const status = document.getElementById('imgStatus');
    const out = document.getElementById('imgUrl');
    const file = fileInput?.files?.[0];
    
    if (!file) {
        if (status) setStatus(status, 'Pilih file gambar dulu.', 'error');
        return;
    }

    if (out) out.value = '';
    setLoading(btn, status, true);

    try {
        const url = await uploadToImgBB(file);
        if (out) out.value = url;
        if (status) setStatus(status, '✅ Upload sukses ke ImgBB!', 'success');
        if (window.showToast) window.showToast('Upload gambar berhasil!', 'success');
    } catch (err) {
        if (status) setStatus(status, '❌ ' + (err.message || 'Terjadi error saat upload.'), 'error');
        if (window.showToast) window.showToast(err.message, 'error');
    } finally {
        setLoading(btn, status, false);
    }
}

async function uploadVid() {
    const fileInput = document.getElementById('vidFile');
    const btn = document.getElementById('vidUploadBtn');
    const status = document.getElementById('vidStatus');
    const out = document.getElementById('vidUrl');
    const file = fileInput?.files?.[0];
    
    if (!file) {
        if (status) setStatus(status, 'Pilih file video dulu.', 'error');
        return;
    }

    if (out) out.value = '';
    setLoading(btn, status, true);

    try {
        const endpoint = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/video/upload`;
        const url = await uploadCloudinary(file, endpoint);
        if (out) out.value = url;
        if (status) setStatus(status, '✅ Upload sukses ke Cloudinary!', 'success');
        if (window.showToast) window.showToast('Upload video berhasil!', 'success');
    } catch (err) {
        if (status) setStatus(status, '❌ ' + (err.message || 'Terjadi error saat upload.'), 'error');
        if (window.showToast) window.showToast(err.message, 'error');
    } finally {
        setLoading(btn, status, false);
    }
}

async function uploadAud() {
    const fileInput = document.getElementById('audFile');
    const btn = document.getElementById('audUploadBtn');
    const status = document.getElementById('audStatus');
    const out = document.getElementById('audUrl');
    const file = fileInput?.files?.[0];
    
    if (!file) {
        if (status) setStatus(status, 'Pilih file audio dulu.', 'error');
        return;
    }

    if (out) out.value = '';
    setLoading(btn, status, true);

    try {
        const endpoint = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/video/upload`;
        const url = await uploadCloudinary(file, endpoint);
        if (out) out.value = url;
        if (status) setStatus(status, '✅ Upload sukses ke Cloudinary!', 'success');
        if (window.showToast) window.showToast('Upload audio berhasil!', 'success');
    } catch (err) {
        if (status) setStatus(status, '❌ ' + (err.message || 'Terjadi error saat upload.'), 'error');
        if (window.showToast) window.showToast(err.message, 'error');
    } finally {
        setLoading(btn, status, false);
    }
}

function initUploaderTabs() {
    const tabs = document.querySelectorAll('.uploader-tab-btn');
    const sections = {
        img: document.getElementById('uploaderImg'),
        vid: document.getElementById('uploaderVid'),
        aud: document.getElementById('uploaderAud')
    };
    
    tabs.forEach(btn => {
        btn.addEventListener('click', () => {
            tabs.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const target = btn.dataset.uploader;
            Object.keys(sections).forEach(key => {
                if (sections[key]) sections[key].style.display = 'none';
            });
            if (sections[target]) sections[target].style.display = 'block';
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    bindPreview('imgFile', 'imgPreview', 'imgPreviewEmpty');
    bindPreview('vidFile', 'vidPreview', 'vidPreviewEmpty');
    bindPreview('audFile', 'audPreview', 'audPreviewEmpty');
    initUploaderTabs();
    
    updateFileName('imgFile', 'imgFileName');
    updateFileName('vidFile', 'vidFileName');
    updateFileName('audFile', 'audFileName');
});

window.uploadImg = uploadImg;
window.uploadVid = uploadVid;
window.uploadAud = uploadAud;
window.copyUrl = copyUrl;