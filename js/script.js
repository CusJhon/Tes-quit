// ========== QUICKFAKE MAIN SCRIPT ==========
// Mempertahankan semua fungsionalitas original + perbaikan Quote highlight

// Global Variables
let currentUser = null;
let gateCompleted = false;
let progressValue = 0;
let favoriteFormats = JSON.parse(localStorage.getItem('favoriteFormats') || '[]');

// ========== HELPER FUNCTIONS ==========
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast-notification toast-${type} show`;
    toast.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
        <span>${message}</span>
        <div class="toast-progress"></div>
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function showLoading(show, message = 'Memproses...') {
    const loader = document.getElementById('globalLoader');
    if (loader) {
        if (show) {
            loader.classList.remove('hidden');
            const msgElement = loader.querySelector('.loader-message');
            if (msgElement) msgElement.textContent = message;
        } else {
            loader.classList.add('hidden');
        }
    }
}

function updateProgress(percent, elementId) {
    const fillElement = document.getElementById(elementId);
    if (fillElement) {
        fillElement.style.width = `${percent}%`;
    }
    const percentElement = document.getElementById(elementId.replace('Fill', 'Percent'));
    if (percentElement) {
        percentElement.textContent = percent;
    }
}

// ========== QUOTE/REMINDER CARD HIGHLIGHT FUNCTION ==========
function processHighlightText(text) {
    if (!text) return '';
    
    // Regex untuk mencari teks dalam [kurung siku]
    const highlightRegex = /\[(.*?)\]/g;
    
    let processedText = text.replace(highlightRegex, function(match, content) {
        return `<span class="highlight-text">${escapeHtml(content)}</span>`;
    });
    
    // Ganti newline dengan <br>
    processedText = processedText.replace(/\n/g, '<br>');
    
    return processedText;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ========== MOCKUP FORMATS DATA ==========
const mockupFormatsV1 = [
    { id: 'brat_text', name: 'Brat Text', category: 'text', icon: 'fas fa-font', params: [{ name: 'text', label: 'Teks', type: 'text', placeholder: 'Masukkan teks brat...', required: true }] },
    { id: 'fake_call', name: 'Fake Call', category: 'social', icon: 'fas fa-phone-alt', params: [
        { name: 'caller_name', label: 'Nama Penelepon', type: 'text', placeholder: 'Ibu', required: true },
        { name: 'caller_avatar', label: 'URL Avatar', type: 'url', placeholder: 'https://...', required: true },
        { name: 'duration', label: 'Durasi', type: 'text', placeholder: '19:31 atau 2:45', required: true }
    ]},
    { id: 'fake_channel', name: 'Fake Channel', category: 'social', icon: 'fab fa-youtube', params: [
        { name: 'channel_name', label: 'Nama Channel', type: 'text', required: true },
        { name: 'subscriber_count', label: 'Jumlah Subscriber', type: 'number', placeholder: '1000000', required: true },
        { name: 'thumbnail_url', label: 'URL Thumbnail', type: 'url', required: true }
    ]},
    { id: 'fake_dana', name: 'Fake DANA', category: 'finance', icon: 'fas fa-wallet', params: [
        { name: 'balance', label: 'Saldo', type: 'text', placeholder: 'Rp 10.000.000', required: true },
        { name: 'phone_number', label: 'Nomor HP', type: 'text', placeholder: '08123456789', required: true }
    ]},
    { id: 'fb_comment', name: 'FB Comment', category: 'social', icon: 'fab fa-facebook', params: [
        { name: 'name', label: 'Nama', type: 'text', required: true },
        { name: 'comment', label: 'Komentar', type: 'textarea', required: true },
        { name: 'avatar_url', label: 'URL Foto Profil', type: 'url', required: true }
    ]},
    { id: 'wa_group', name: 'WA Group', category: 'social', icon: 'fab fa-whatsapp', params: [
        { name: 'group_name', label: 'Nama Grup', type: 'text', required: true },
        { name: 'admin_name', label: 'Nama Admin', type: 'text', required: true },
        { name: 'message', label: 'Pesan', type: 'textarea', required: true }
    ]},
    { id: 'wa_group_v2', name: 'WA Group V2', category: 'social', icon: 'fab fa-whatsapp', params: [
        { name: 'group_name', label: 'Nama Grup', type: 'text', required: true },
        { name: 'admin_name', label: 'Nama Admin', type: 'text', required: true },
        { name: 'admin_avatar', label: 'URL Avatar Admin', type: 'url', required: true },
        { name: 'member_names', label: 'Nama Anggota (pisah koma)', type: 'text', required: true },
        { name: 'message_text', label: 'Teks Pesan', type: 'textarea', required: true }
    ]},
    { id: 'ig_post', name: 'IG Post', category: 'social', icon: 'fab fa-instagram', params: [
        { name: 'username', label: 'Username', type: 'text', required: true },
        { name: 'avatar_url', label: 'URL Avatar', type: 'url', required: true },
        { name: 'image_url', label: 'URL Gambar Postingan', type: 'url', required: true },
        { name: 'caption', label: 'Caption', type: 'textarea', required: true },
        { name: 'likes', label: 'Jumlah Likes', type: 'number', placeholder: '1000', required: true },
        { name: 'comments', label: 'Jumlah Comments', type: 'number', placeholder: '50', required: true }
    ]},
    { id: 'tiktok_profile', name: 'TikTok Profile', category: 'social', icon: 'fab fa-tiktok', params: [
        { name: 'username', label: 'Username', type: 'text', required: true },
        { name: 'display_name', label: 'Nama Tampilan', type: 'text', required: true },
        { name: 'followers', label: 'Jumlah Followers', type: 'number', required: true },
        { name: 'avatar_url', label: 'URL Avatar', type: 'url', required: true }
    ]},
    { id: 'tiktok_comment', name: 'TikTok Comment', category: 'social', icon: 'fab fa-tiktok', params: [
        { name: 'username', label: 'Username', type: 'text', required: true },
        { name: 'comment', label: 'Komentar', type: 'textarea', required: true },
        { name: 'avatar_url', label: 'URL Avatar', type: 'url', required: true },
        { name: 'likes', label: 'Jumlah Likes Komentar', type: 'number', required: true }
    ]},
    { id: 'greyscale', name: 'Greyscale Image', category: 'tools', icon: 'fas fa-adjust', params: [
        { name: 'image_url', label: 'URL Gambar', type: 'url', required: true }
    ]},
    { id: 'ship_image', name: 'Ship Image', category: 'tools', icon: 'fas fa-heart', params: [
        { name: 'person1_name', label: 'Nama Orang 1', type: 'text', required: true },
        { name: 'person1_avatar', label: 'URL Avatar 1', type: 'url', required: true },
        { name: 'person2_name', label: 'Nama Orang 2', type: 'text', required: true },
        { name: 'person2_avatar', label: 'URL Avatar 2', type: 'url', required: true },
        { name: 'percentage', label: 'Persentase', type: 'number', placeholder: '99', required: true }
    ]},
    { id: 'quote_card', name: 'Quote/Reminder Card', category: 'text', icon: 'fas fa-quote-right', params: [
        { name: 'text', label: 'Teks Quote (Gunakan [kurung siku] untuk highlight)', type: 'textarea', placeholder: 'Contoh: [Halo] semua, [selamat pagi]', required: true },
        { name: 'background_url', label: 'URL Background', type: 'url', placeholder: 'https://...', required: false }
    ]},
    { id: 'textpro', name: 'TextPro Effect', category: 'tools', icon: 'fas fa-magic', params: [
        { name: 'text', label: 'Teks', type: 'text', required: true },
        { name: 'effect_url', label: 'URL Effect TextPro', type: 'url', placeholder: 'https://textpro.me/...', required: true }
    ]},
    { id: 'photooxy', name: 'PhotoOxy Effect', category: 'tools', icon: 'fas fa-image', params: [
        { name: 'text', label: 'Teks', type: 'text', required: true },
        { name: 'effect_url', label: 'URL Effect PhotoOxy', type: 'url', placeholder: 'https://photooxy.com/...', required: true }
    ]}
];

const mockupFormatsV2 = [
    { id: 'fake_call_pro', name: 'Fake Call Pro', category: 'social', icon: 'fas fa-phone-alt', params: [
        { name: 'caller_name', label: 'Nama Penelepon', type: 'text', required: true },
        { name: 'caller_avatar', label: 'URL Avatar', type: 'url', required: true },
        { name: 'duration', label: 'Durasi', type: 'text', placeholder: '00:00', required: true },
        { name: 'caller_number', label: 'Nomor Telepon', type: 'text', placeholder: '+62 XXX', required: false }
    ]},
    { id: 'wa_group_premium', name: 'WA Group Premium', category: 'social', icon: 'fab fa-whatsapp', params: [
        { name: 'group_name', label: 'Nama Grup', type: 'text', required: true },
        { name: 'admin_name', label: 'Nama Admin', type: 'text', required: true },
        { name: 'admin_avatar', label: 'URL Avatar Admin', type: 'url', required: true },
        { name: 'member_names', label: 'Nama Anggota (pisah koma)', type: 'text', required: true },
        { name: 'message_text', label: 'Teks Pesan', type: 'textarea', required: true },
        { name: 'timestamp', label: 'Waktu', type: 'text', placeholder: '19:45', required: false }
    ]},
    { id: 'ig_post_pro', name: 'IG Post Pro', category: 'social', icon: 'fab fa-instagram', params: [
        { name: 'username', label: 'Username', type: 'text', required: true },
        { name: 'avatar_url', label: 'URL Avatar', type: 'url', required: true },
        { name: 'image_url', label: 'URL Gambar Postingan', type: 'url', required: true },
        { name: 'caption', label: 'Caption', type: 'textarea', required: true },
        { name: 'likes', label: 'Jumlah Likes', type: 'number', required: true },
        { name: 'comments', label: 'Jumlah Comments', type: 'number', required: true },
        { name: 'share_count', label: 'Jumlah Share', type: 'number', required: true },
        { name: 'repost_count', label: 'Jumlah Repost', type: 'number', required: true }
    ]},
    { id: 'tiktok_profile_pro', name: 'TikTok Profile Pro', category: 'social', icon: 'fab fa-tiktok', params: [
        { name: 'username', label: 'Username', type: 'text', required: true },
        { name: 'display_name', label: 'Nama Tampilan', type: 'text', required: true },
        { name: 'followers', label: 'Jumlah Followers', type: 'number', required: true },
        { name: 'following', label: 'Jumlah Following', type: 'number', required: true },
        { name: 'likes', label: 'Jumlah Likes', type: 'number', required: true },
        { name: 'avatar_url', label: 'URL Avatar', type: 'url', required: true },
        { name: 'bio', label: 'Bio', type: 'textarea', required: false }
    ]},
    { id: 'ship_image_pro', name: 'Ship Image Pro', category: 'tools', icon: 'fas fa-heart', params: [
        { name: 'person1_name', label: 'Nama Orang 1', type: 'text', required: true },
        { name: 'person1_avatar', label: 'URL Avatar 1', type: 'url', required: true },
        { name: 'person2_name', label: 'Nama Orang 2', type: 'text', required: true },
        { name: 'person2_avatar', label: 'URL Avatar 2', type: 'url', required: true },
        { name: 'percentage', label: 'Persentase', type: 'number', required: true },
        { name: 'background_url', label: 'URL Background', type: 'url', required: false }
    ]},
    { id: 'quote_card_pro', name: 'Quote Card Pro', category: 'text', icon: 'fas fa-quote-right', params: [
        { name: 'text', label: 'Teks Quote (Gunakan [kurung siku] untuk highlight)', type: 'textarea', placeholder: 'Contoh: [Halo] semua, [selamat pagi]', required: true },
        { name: 'background_url', label: 'URL Background', type: 'url', required: false },
        { name: 'font_url', label: 'URL Font Custom', type: 'url', required: false },
        { name: 'text_color', label: 'Warna Teks', type: 'text', placeholder: '#ffffff', required: false }
    ]}
];

// ========== RENDER FUNCTIONS ==========
function renderFormatGrid(version) {
    const formats = version === 'v1' ? mockupFormatsV1 : mockupFormatsV2;
    const gridContainer = document.getElementById(`formatGrid${version.toUpperCase()}`);
    const categoryContainer = document.getElementById(`categoryTabs${version.toUpperCase()}`);
    const formatCount = document.getElementById(`formatCount${version.toUpperCase()}`);
    
    if (!gridContainer) return;
    
    // Get unique categories
    const categories = ['Semua', ...new Set(formats.map(f => f.category))];
    
    // Render category tabs
    if (categoryContainer) {
        categoryContainer.innerHTML = categories.map(cat => `
            <button class="category-tab ${cat === 'Semua' ? 'active' : ''}" data-category="${cat}" data-version="${version}">
                <i class="fas ${cat === 'Semua' ? 'fa-th-large' : cat === 'social' ? 'fa-share-alt' : cat === 'text' ? 'fa-font' : cat === 'finance' ? 'fa-chart-line' : 'fa-tools'}"></i>
                ${cat}
            </button>
        `).join('');
        
        // Add event listeners to category tabs
        document.querySelectorAll(`.category-tab[data-version="${version}"]`).forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll(`.category-tab[data-version="${version}"]`).forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                filterFormatsByCategory(version, tab.dataset.category);
            });
        });
    }
    
    // Render format grid
    function renderFormats(formatsToRender) {
        gridContainer.innerHTML = formatsToRender.map(format => `
            <div class="format-card" data-format-id="${format.id}" data-version="${version}" data-format-name="${format.name}">
                <i class="${format.icon}"></i>
                <h3>${format.name}</h3>
                <div class="format-category">${format.category}</div>
                <div class="favorite-star ${favoriteFormats.includes(format.id) ? 'favorited' : ''}" data-format-id="${format.id}">
                    <i class="fas ${favoriteFormats.includes(format.id) ? 'fa-star' : 'fa-star'}"></i>
                </div>
            </div>
        `).join('');
        
        if (formatCount) {
            formatCount.textContent = `${formatsToRender.length} formats`;
        }
        
        // Add event listeners to format cards
        document.querySelectorAll(`.format-card[data-version="${version}"]`).forEach(card => {
            card.addEventListener('click', (e) => {
                if (e.target.closest('.favorite-star')) return;
                const formatId = card.dataset.formatId;
                const formatData = formats.find(f => f.id === formatId);
                if (formatData) {
                    showParamForm(version, formatId, formatData);
                }
            });
        });
        
        // Add favorite star listeners
        document.querySelectorAll(`.favorite-star`).forEach(star => {
            star.addEventListener('click', (e) => {
                e.stopPropagation();
                const formatId = star.dataset.formatId;
                if (favoriteFormats.includes(formatId)) {
                    favoriteFormats = favoriteFormats.filter(id => id !== formatId);
                    star.classList.remove('favorited');
                    showToast(`Removed from favorites`, 'info');
                } else {
                    favoriteFormats.push(formatId);
                    star.classList.add('favorited');
                    showToast(`Added to favorites`, 'success');
                }
                localStorage.setItem('favoriteFormats', JSON.stringify(favoriteFormats));
            });
        });
    }
    
    // Initial render
    renderFormats(formats);
    
    // Setup search
    setupSearch(version, formats, renderFormats);
    
    function filterFormatsByCategory(version, category) {
        const allFormats = version === 'v1' ? mockupFormatsV1 : mockupFormatsV2;
        const filtered = category === 'Semua' ? allFormats : allFormats.filter(f => f.category === category);
        renderFormats(filtered);
    }
}

function setupSearch(version, allFormats, renderCallback) {
    const searchInput = document.getElementById(`searchInput${version.toUpperCase()}`);
    const searchClear = document.getElementById(`searchClear${version.toUpperCase()}`);
    const emptyState = document.getElementById(`emptyState${version.toUpperCase()}`);
    const gridContainer = document.getElementById(`formatGrid${version.toUpperCase()}`);
    
    if (!searchInput) return;
    
    const performSearch = () => {
        const query = searchInput.value.toLowerCase().trim();
        const filtered = allFormats.filter(f => 
            f.name.toLowerCase().includes(query) || 
            f.category.toLowerCase().includes(query)
        );
        
        if (filtered.length === 0 && emptyState) {
            gridContainer.style.display = 'none';
            emptyState.style.display = 'block';
        } else {
            gridContainer.style.display = 'grid';
            if (emptyState) emptyState.style.display = 'none';
            renderCallback(filtered);
        }
        
        if (searchClear) {
            searchClear.style.display = query ? 'block' : 'none';
        }
    };
    
    searchInput.addEventListener('input', performSearch);
    
    if (searchClear) {
        searchClear.addEventListener('click', () => {
            searchInput.value = '';
            performSearch();
            searchInput.focus();
        });
    }
}

function showParamForm(version, formatId, formatData) {
    const gridContainer = document.getElementById(`formatGrid${version.toUpperCase()}`);
    const paramSection = document.getElementById(`paramSection${version.toUpperCase()}`);
    const selectedFormatName = document.getElementById(`selectedFormatName${version.toUpperCase()}`);
    const paramForm = document.getElementById(`paramForm${version.toUpperCase()}`);
    const backBtn = document.getElementById(`backToGrid${version.toUpperCase()}`);
    
    if (gridContainer) gridContainer.style.display = 'none';
    if (paramSection) paramSection.style.display = 'block';
    if (selectedFormatName) selectedFormatName.textContent = formatData.name;
    
    if (paramForm) {
        paramForm.innerHTML = formatData.params.map(param => `
            <div class="input-group">
                <label>${param.label} ${param.required ? '<span style="color:#ef4444;">*</span>' : ''}</label>
                ${param.type === 'textarea' ? 
                    `<textarea id="param_${param.name}" placeholder="${param.placeholder || ''}" ${param.required ? 'required' : ''}></textarea>` :
                    `<input type="${param.type}" id="param_${param.name}" placeholder="${param.placeholder || ''}" ${param.required ? 'required' : ''}>`
                }
            </div>
        `).join('');
    }
    
    // Setup generate button
    const generateBtn = document.getElementById(`generateBtn${version.toUpperCase()}`);
    if (generateBtn) {
        const newBtn = generateBtn.cloneNode(true);
        generateBtn.parentNode.replaceChild(newBtn, generateBtn);
        newBtn.addEventListener('click', () => generateMockup(version, formatId, formatData));
    }
    
    if (backBtn) {
        const newBackBtn = backBtn.cloneNode(true);
        backBtn.parentNode.replaceChild(newBackBtn, backBtn);
        newBackBtn.addEventListener('click', () => {
            if (paramSection) paramSection.style.display = 'none';
            if (gridContainer) {
                gridContainer.style.display = 'grid';
                // Refresh grid to show all formats
                const activeCategory = document.querySelector(`.category-tab[data-version="${version}"].active`);
                if (activeCategory) {
                    const allFormats = version === 'v1' ? mockupFormatsV1 : mockupFormatsV2;
                    const filtered = activeCategory.dataset.category === 'Semua' ? allFormats : allFormats.filter(f => f.category === activeCategory.dataset.category);
                    const gridCont = document.getElementById(`formatGrid${version.toUpperCase()}`);
                    if (gridCont) {
                        gridCont.innerHTML = filtered.map(format => `
                            <div class="format-card" data-format-id="${format.id}" data-version="${version}" data-format-name="${format.name}">
                                <i class="${format.icon}"></i>
                                <h3>${format.name}</h3>
                                <div class="format-category">${format.category}</div>
                                <div class="favorite-star ${favoriteFormats.includes(format.id) ? 'favorited' : ''}" data-format-id="${format.id}">
                                    <i class="fas fa-star"></i>
                                </div>
                            </div>
                        `).join('');
                        // Reattach events
                        document.querySelectorAll(`.format-card[data-version="${version}"]`).forEach(card => {
                            card.addEventListener('click', (e) => {
                                if (e.target.closest('.favorite-star')) return;
                                const fid = card.dataset.formatId;
                                const fdata = (version === 'v1' ? mockupFormatsV1 : mockupFormatsV2).find(f => f.id === fid);
                                if (fdata) showParamForm(version, fid, fdata);
                            });
                        });
                        document.querySelectorAll('.favorite-star').forEach(star => {
                            star.addEventListener('click', (e) => {
                                e.stopPropagation();
                                const fid = star.dataset.formatId;
                                if (favoriteFormats.includes(fid)) {
                                    favoriteFormats = favoriteFormats.filter(id => id !== fid);
                                    star.classList.remove('favorited');
                                } else {
                                    favoriteFormats.push(fid);
                                    star.classList.add('favorited');
                                }
                                localStorage.setItem('favoriteFormats', JSON.stringify(favoriteFormats));
                            });
                        });
                    }
                }
            }
        });
    }
}

async function generateMockup(version, formatId, formatData) {
    // Collect parameters
    const params = {};
    let isValid = true;
    
    for (const param of formatData.params) {
        const input = document.getElementById(`param_${param.name}`);
        if (input) {
            const value = input.value.trim();
            if (param.required && !value) {
                showToast(`${param.label} wajib diisi!`, 'error');
                isValid = false;
                break;
            }
            params[param.name] = value;
        }
    }
    
    if (!isValid) return;
    
    // Special handling for quote_card - process highlight text
    if (formatId === 'quote_card' || formatId === 'quote_card_pro') {
        if (params.text) {
            params.text = processHighlightText(params.text);
        }
    }
    
    // Show loading
    const loadingDiv = document.getElementById(`generateLoading${version.toUpperCase()}`);
    const generateBtn = document.getElementById(`generateBtn${version.toUpperCase()}`);
    const resultArea = document.getElementById(`resultArea${version.toUpperCase()}`);
    const progressFill = document.getElementById(`generateProgressFill${version.toUpperCase()}`);
    const progressPercent = document.getElementById(`generateProgressPercent${version.toUpperCase()}`);
    
    if (loadingDiv) loadingDiv.classList.remove('hidden');
    if (generateBtn) generateBtn.classList.add('hidden');
    if (resultArea) {
        resultArea.innerHTML = `<div class="result-placeholder"><i class="fas fa-spinner fa-pulse"></i><p>Sedang memproses ${formatData.name}...</p></div>`;
    }
    
    // Simulate progress
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += Math.random() * 20;
        if (progress >= 90) {
            progress = 90;
            clearInterval(progressInterval);
        }
        if (progressFill) progressFill.style.width = `${progress}%`;
        if (progressPercent) progressPercent.textContent = Math.floor(progress);
    }, 200);
    
    try {
        // Build query string
        const queryParams = new URLSearchParams(params).toString();
        const apiUrl = `/api/generate/${formatId}?${queryParams}`;
        
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        
        const imageBlob = await response.blob();
        const imageUrl = URL.createObjectURL(imageBlob);
        
        clearInterval(progressInterval);
        if (progressFill) progressFill.style.width = '100%';
        if (progressPercent) progressPercent.textContent = '100';
        
        setTimeout(() => {
            if (resultArea) {
                resultArea.innerHTML = `
                    <div class="result-content">
                        <img src="${imageUrl}" alt="${formatData.name}" style="max-width:100%; border-radius:1rem; box-shadow:0 8px 20px rgba(0,0,0,0.3);">
                        <button class="download-btn" onclick="downloadImage('${imageUrl}', '${formatId}.png')">
                            <i class="fas fa-download"></i> Download Image
                        </button>
                    </div>
                `;
            }
            if (loadingDiv) loadingDiv.classList.add('hidden');
            if (generateBtn) generateBtn.classList.remove('hidden');
            showToast(`${formatData.name} berhasil dibuat!`, 'success');
        }, 500);
        
    } catch (error) {
        console.error('Error:', error);
        clearInterval(progressInterval);
        if (resultArea) {
            resultArea.innerHTML = `<div class="result-placeholder"><i class="fas fa-exclamation-triangle"></i><p>Gagal memproses: ${error.message}</p></div>`;
        }
        if (loadingDiv) loadingDiv.classList.add('hidden');
        if (generateBtn) generateBtn.classList.remove('hidden');
        showToast(`Gagal membuat ${formatData.name}`, 'error');
    }
}

// Download function
function downloadImage(url, filename) {
    const link = document.createElement('a');
    link.download = filename;
    link.href = url;
    link.click();
}

// Navigation Functions
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = {
        home: document.getElementById('homePage'),
        ssweb: document.getElementById('sswebPage'),
        uploader: document.getElementById('uploaderPage'),
        info: document.getElementById('infoPage'),
        howto: document.getElementById('howtoPage'),
        guide: document.getElementById('guidePage'),
        docs: document.getElementById('docsPage')
    };
    
    function setActivePage(pageId) {
        Object.keys(pages).forEach(id => {
            if (pages[id]) pages[id].classList.remove('active-page');
        });
        if (pages[pageId]) pages[pageId].classList.add('active-page');
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === pageId) link.classList.add('active');
        });
        
        // Render specific content when page changes
        if (pageId === 'home') {
            if (document.querySelector('.mockup-tab.active-tab')?.id === 'mockupV1') {
                renderFormatGrid('v1');
            } else {
                renderFormatGrid('v2');
            }
        }
    }
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            if (page && pages[page]) setActivePage(page);
            
            const mobileMenu = document.getElementById('navMenu');
            if (mobileMenu && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
            }
        });
    });
    
    // Tab switching for mockup v1/v2
    const tabV1Btn = document.getElementById('tabV1Btn');
    const tabV2Btn = document.getElementById('tabV2Btn');
    const mockupV1 = document.getElementById('mockupV1');
    const mockupV2 = document.getElementById('mockupV2');
    
    if (tabV1Btn && tabV2Btn) {
        tabV1Btn.addEventListener('click', () => {
            tabV1Btn.classList.add('active');
            tabV2Btn.classList.remove('active');
            mockupV1.classList.add('active-tab');
            mockupV2.classList.remove('active-tab');
            renderFormatGrid('v1');
        });
        
        tabV2Btn.addEventListener('click', () => {
            tabV2Btn.classList.add('active');
            tabV1Btn.classList.remove('active');
            mockupV2.classList.add('active-tab');
            mockupV1.classList.remove('active-tab');
            renderFormatGrid('v2');
        });
    }
    
    // Mobile menu toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
}

// Initialize info pages (berita, gempa, cuaca, jadwal TV)
function initInfoPages() {
    // Info tabs
    const infoTabs = document.querySelectorAll('.info-tab-btn');
    const infoSections = {
        berita: document.getElementById('infoBerita'),
        gempa: document.getElementById('infoGempa'),
        cuaca: document.getElementById('infoCuaca'),
        jadwaltv: document.getElementById('infoJadwalTV')
    };
    
    infoTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            infoTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            Object.keys(infoSections).forEach(key => {
                if (infoSections[key]) infoSections[key].classList.remove('active-info');
            });
            const target = tab.dataset.info;
            if (infoSections[target]) infoSections[target].classList.add('active-info');
        });
    });
    
    // Berita sources
    const sourceBtns = document.querySelectorAll('.source-btn');
    sourceBtns.forEach(btn => {
        btn.addEventListener('click', async () => {
            sourceBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const source = btn.dataset.source;
            await loadBerita(source);
        });
    });
    
    // Gempa subtabs
    const gempaSubtabs = document.querySelectorAll('.gempa-subtab');
    gempaSubtabs.forEach(tab => {
        tab.addEventListener('click', async () => {
            gempaSubtabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const type = tab.dataset.gempa;
            await loadGempaData(type);
        });
    });
    
    // Cuaca search
    const searchCuacaBtn = document.getElementById('searchCuacaBtn');
    if (searchCuacaBtn) {
        searchCuacaBtn.addEventListener('click', async () => {
            const city = document.getElementById('cuacaCity')?.value;
            if (city) await loadCuaca(city);
        });
    }
    
    // TV channels
    const channelBtns = document.querySelectorAll('.channel-btn');
    channelBtns.forEach(btn => {
        btn.addEventListener('click', async () => {
            channelBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const channel = btn.dataset.channel;
            await loadJadwalTV(channel);
        });
    });
}

async function loadBerita(source) {
    const contentDiv = document.getElementById('beritaContent');
    if (!contentDiv) return;
    
    contentDiv.innerHTML = '<div class="loading-info"><i class="fas fa-spinner fa-pulse"></i> Memuat berita...</div>';
    
    try {
        const response = await fetch(`/api/berita/${source}`);
        const data = await response.json();
        
        if (data && data.articles && data.articles.length > 0) {
            contentDiv.innerHTML = data.articles.map(article => `
                <div class="berita-item">
                    <div class="berita-title">
                        <a href="${article.url}" target="_blank">${article.title || 'Judul tidak tersedia'}</a>
                    </div>
                    <div style="font-size:0.75rem; color:#9ca3af; margin-top:0.5rem;">
                        ${article.published_at ? new Date(article.published_at).toLocaleString('id-ID') : ''}
                    </div>
                </div>
            `).join('');
        } else {
            contentDiv.innerHTML = '<div class="loading-info"><i class="fas fa-info-circle"></i> Tidak ada berita tersedia</div>';
        }
    } catch (error) {
        console.error('Error loading berita:', error);
        contentDiv.innerHTML = '<div class="loading-info"><i class="fas fa-exclamation-triangle"></i> Gagal memuat berita</div>';
    }
}

async function loadGempaData(type) {
    const contentDiv = document.getElementById('gempaContent');
    if (!contentDiv) return;
    
    contentDiv.innerHTML = '<div class="loading-info"><i class="fas fa-spinner fa-pulse"></i> Memuat data gempa...</div>';
    
    try {
        const response = await fetch(`/api/info/bmkg?type=${type}`);
        const data = await response.json();
        
        if (data && data.gempa && data.gempa.length > 0) {
            contentDiv.innerHTML = data.gempa.map(g => `
                <div class="gempa-item">
                    <div><strong>📍 ${g.wilayah || 'Lokasi tidak diketahui'}</strong></div>
                    <div>📅 ${g.tanggal || '-'} | 🕐 ${g.jam || '-'}</div>
                    <div>📊 Magnitudo: ${g.magnitude || '-'} | 📏 Kedalaman: ${g.kedalaman || '-'}</div>
                    <div style="color:#fbbf24;">⚠️ ${g.potensi || ''}</div>
                </div>
            `).join('');
        } else {
            contentDiv.innerHTML = '<div class="loading-info"><i class="fas fa-info-circle"></i> Tidak ada data gempa terkini</div>';
        }
    } catch (error) {
        console.error('Error loading gempa:', error);
        contentDiv.innerHTML = '<div class="loading-info"><i class="fas fa-exclamation-triangle"></i> Gagal memuat data gempa</div>';
    }
}

async function loadCuaca(city) {
    const contentDiv = document.getElementById('cuacaContent');
    if (!contentDiv) return;
    
    contentDiv.innerHTML = '<div class="loading-info"><i class="fas fa-spinner fa-pulse"></i> Memuat data cuaca...</div>';
    
    try {
        const response = await fetch(`/api/info/cuaca?q=${encodeURIComponent(city)}`);
        const data = await response.json();
        
        if (data && data.location) {
            contentDiv.innerHTML = `
                <div style="text-align:center; padding:1rem;">
                    <h3>📍 ${data.location}</h3>
                    <div class="cuaca-temp">${data.temperature || '-'}°C</div>
                    <div>🌡️ ${data.condition || '-'}</div>
                    <div>💧 Kelembaban: ${data.humidity || '-'}%</div>
                    <div>💨 Kecepatan Angin: ${data.wind_speed || '-'} km/h</div>
                </div>
            `;
        } else {
            contentDiv.innerHTML = '<div class="loading-info"><i class="fas fa-info-circle"></i> Data cuaca tidak ditemukan</div>';
        }
    } catch (error) {
        console.error('Error loading cuaca:', error);
        contentDiv.innerHTML = '<div class="loading-info"><i class="fas fa-exclamation-triangle"></i> Gagal memuat data cuaca</div>';
    }
}

async function loadJadwalTV(channel) {
    const contentDiv = document.getElementById('jadwaltvContent');
    if (!contentDiv) return;
    
    contentDiv.innerHTML = '<div class="loading-info"><i class="fas fa-spinner fa-pulse"></i> Memuat jadwal TV...</div>';
    
    try {
        const response = await fetch(`/api/info/jadwaltv?channel=${channel}`);
        const data = await response.json();
        
        if (data && data.schedule && data.schedule.length > 0) {
            contentDiv.innerHTML = data.schedule.map(item => `
                <div class="tv-item">
                    <span class="tv-jam">${item.time || '-'}</span>
                    <span>${item.program || '-'}</span>
                </div>
            `).join('');
        } else {
            contentDiv.innerHTML = '<div class="loading-info"><i class="fas fa-info-circle"></i> Jadwal TV tidak tersedia</div>';
        }
    } catch (error) {
        console.error('Error loading jadwal TV:', error);
        contentDiv.innerHTML = '<div class="loading-info"><i class="fas fa-exclamation-triangle"></i> Gagal memuat jadwal TV</div>';
    }
}

// Initialize SSWeb
function initSSWeb() {
    const generateBtn = document.getElementById('sswebGenerateBtn');
    if (!generateBtn) return;
    
    generateBtn.addEventListener('click', async () => {
        const url = document.getElementById('sswebUrl')?.value;
        const device = document.getElementById('sswebDevice')?.value;
        const fullPage = document.getElementById('sswebFullPage')?.value;
        const scale = document.getElementById('sswebScale')?.value;
        
        if (!url) {
            showToast('URL Website wajib diisi!', 'error');
            return;
        }
        
        const loadingDiv = document.getElementById('sswebLoading');
        const resultArea = document.getElementById('sswebResultArea');
        const progressFill = document.getElementById('sswebProgressFill');
        const progressPercent = document.getElementById('sswebProgressPercent');
        
        if (loadingDiv) loadingDiv.classList.remove('hidden');
        if (generateBtn) generateBtn.classList.add('hidden');
        if (resultArea) {
            resultArea.innerHTML = `<div class="result-placeholder"><i class="fas fa-spinner fa-pulse"></i><p>Mengambil screenshot...</p></div>`;
        }
        
        let progress = 0;
        const progressInterval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress >= 90) {
                progress = 90;
                clearInterval(progressInterval);
            }
            if (progressFill) progressFill.style.width = `${progress}%`;
            if (progressPercent) progressPercent.textContent = Math.floor(progress);
        }, 200);
        
        try {
            const apiUrl = `/api/screenshot?url=${encodeURIComponent(url)}&device=${device}&fullpage=${fullPage === 'penuh'}&scale=${scale}`;
            const response = await fetch(apiUrl);
            
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            
            const imageBlob = await response.blob();
            const imageUrl = URL.createObjectURL(imageBlob);
            
            clearInterval(progressInterval);
            if (progressFill) progressFill.style.width = '100%';
            if (progressPercent) progressPercent.textContent = '100';
            
            setTimeout(() => {
                if (resultArea) {
                    resultArea.innerHTML = `
                        <div class="result-content">
                            <img src="${imageUrl}" alt="Screenshot" style="max-width:100%; border-radius:1rem;">
                            <button class="download-btn" onclick="downloadImage('${imageUrl}', 'screenshot.png')">
                                <i class="fas fa-download"></i> Download Screenshot
                            </button>
                        </div>
                    `;
                }
                if (loadingDiv) loadingDiv.classList.add('hidden');
                if (generateBtn) generateBtn.classList.remove('hidden');
                showToast('Screenshot berhasil diambil!', 'success');
            }, 500);
            
        } catch (error) {
            console.error('Error:', error);
            clearInterval(progressInterval);
            if (resultArea) {
                resultArea.innerHTML = `<div class="result-placeholder"><i class="fas fa-exclamation-triangle"></i><p>Gagal mengambil screenshot: ${error.message}</p></div>`;
            }
            if (loadingDiv) loadingDiv.classList.add('hidden');
            if (generateBtn) generateBtn.classList.remove('hidden');
            showToast('Gagal mengambil screenshot', 'error');
        }
    });
}

// Initialize Uploader (akan di-handle oleh uploader.js)
function initUploader() {
    const tabBtns = document.querySelectorAll('.uploader-tab-btn');
    const sections = {
        img: document.getElementById('uploaderImg'),
        vid: document.getElementById('uploaderVid'),
        aud: document.getElementById('uploaderAud')
    };
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const target = btn.dataset.uploader;
            Object.keys(sections).forEach(key => {
                if (sections[key]) sections[key].style.display = 'none';
            });
            if (sections[target]) sections[target].style.display = 'block';
        });
    });
}

// Splash screen handler
function initSplashScreen() {
    const splashScreen = document.getElementById('splashScreen');
    const mainContent = document.getElementById('mainContent');
    const gatePage = document.getElementById('gatePage');
    
    if (gatePage) {
        gatePage.style.display = 'flex';
    }
    
    // Simulate gate completion for demo (remove this in production)
    setTimeout(() => {
        if (gatePage) gatePage.style.display = 'none';
        if (splashScreen) splashScreen.style.display = 'flex';
        
        let progress = 0;
        const progressFill = document.getElementById('progressFill');
        const percentageSpan = document.getElementById('loadingPercentage');
        const statusSpan = document.getElementById('loadingStatus');
        
        const statusMessages = [
            '<i class="fas fa-magic"></i> Initializing...',
            '<i class="fas fa-cog fa-spin"></i> Loading modules...',
            '<i class="fas fa-palette"></i> Preparing mockup generator...',
            '<i class="fas fa-cloud-upload-alt"></i> Connecting APIs...',
            '<i class="fas fa-check-circle"></i> Almost ready...'
        ];
        
        const interval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                if (progressFill) progressFill.style.width = '100%';
                if (percentageSpan) percentageSpan.textContent = '100';
                
                setTimeout(() => {
                    if (splashScreen) {
                        splashScreen.classList.add('fade-out');
                        setTimeout(() => {
                            splashScreen.style.display = 'none';
                            if (mainContent) {
                                mainContent.classList.remove('hidden');
                                mainContent.classList.add('visible');
                            }
                        }, 800);
                    }
                }, 500);
            }
            
            if (progressFill) progressFill.style.width = `${progress}%`;
            if (percentageSpan) percentageSpan.textContent = Math.floor(progress);
            
            const statusIndex = Math.min(Math.floor(progress / 20), statusMessages.length - 1);
            if (statusSpan) statusSpan.innerHTML = statusMessages[statusIndex];
        }, 200);
    }, 1000);
}

// Initialize all
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initInfoPages();
    initSSWeb();
    initUploader();
    initSplashScreen();
    
    // Set default active page
    const defaultPage = document.querySelector('.nav-link.active')?.getAttribute('data-page') || 'home';
    if (defaultPage === 'home') {
        renderFormatGrid('v1');
    }
    
    // Keyboard shortcut Ctrl+K to focus search
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const activePage = document.querySelector('.page-container.active-page')?.id;
            if (activePage === 'homePage') {
                const activeTab = document.querySelector('.mockup-tab.active-tab')?.id;
                const searchInput = activeTab === 'mockupV1' ? document.getElementById('searchInputV1') : document.getElementById('searchInputV2');
                if (searchInput) {
                    searchInput.focus();
                    showToast('Fokus ke pencarian mockup', 'info');
                }
            }
        }
    });
});