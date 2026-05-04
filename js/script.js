// ========== FORMAT MOCKUP V1 ==========
const formatsV1 = [
    { id: 'brat', name: 'Brat Text', icon: 'fas fa-font', endpoint: '/maker/brat', baseUrl: 'https://api.zenzxz.my.id', params: [{ name: 'text', label: 'Teks', type: 'text', placeholder: 'Masukkan teks...' }] },
    { id: 'fakecall', name: 'Fake Call', icon: 'fas fa-phone-alt', endpoint: '/maker/fakecall', baseUrl: 'https://api.zenzxz.my.id', params: [{ name: 'nama', label: 'Nama Penelepon', type: 'text', placeholder: 'Jhony' }, { name: 'durasi', label: 'Durasi', type: 'text', placeholder: '19:31' }, { name: 'avatar', label: 'URL Avatar', type: 'url', placeholder: 'https://cdn.discordapp.com/embed/avatars/0.png' }] },
    { id: 'fakechannel', name: 'Fake Channel', icon: 'fab fa-youtube', endpoint: '/maker/fakechannel', baseUrl: 'https://api.zenzxz.my.id', params: [{ name: 'url', label: 'URL Gambar', type: 'url' }, { name: 'name', label: 'Nama Channel', type: 'text' }, { name: 'followers', label: 'Followers', type: 'text' }, { name: 'desc', label: 'Deskripsi', type: 'text' }, { name: 'date', label: 'Tanggal', type: 'text' }] },
    { id: 'fakedana', name: 'Fake DANA', icon: 'fas fa-wallet', endpoint: '/maker/fakedanav2', baseUrl: 'https://api.zenzxz.my.id', params: [{ name: 'nominal', label: 'Nominal', type: 'text', placeholder: 'Rp 100.000' }] },
    { id: 'fbcomment', name: 'FB Comment', icon: 'fab fa-facebook', endpoint: '/maker/fakefbcomment', baseUrl: 'https://api.zenzxz.my.id', params: [{ name: 'name', label: 'Nama', type: 'text' }, { name: 'comment', label: 'Komentar', type: 'text' }, { name: 'url', label: 'URL Foto Profil', type: 'url' }] },
    { id: 'wagroup', name: 'WA Group', icon: 'fab fa-whatsapp', endpoint: '/maker/fakegroup', baseUrl: 'https://api.zenzxz.my.id', params: [{ name: 'url', label: 'URL Icon', type: 'url' }, { name: 'title', label: 'Judul', type: 'text' }, { name: 'number', label: 'Jumlah Pesan', type: 'text' }, { name: 'time', label: 'Waktu', type: 'text' }] },
    { id: 'wagroupv2', name: 'WA Group V2', icon: 'fab fa-whatsapp', endpoint: '/maker/fakegroupv2', baseUrl: 'https://api.zenzxz.my.id', params: [{ name: 'url', label: 'URL Avatar', type: 'url' }, { name: 'name', label: 'Nama Admin', type: 'text' }, { name: 'members', label: 'Member', type: 'text' }, { name: 'desc', label: 'Deskripsi', type: 'text' }, { name: 'author', label: 'Author', type: 'text' }, { name: 'date', label: 'Tanggal', type: 'text' }] },
    { id: 'igpost', name: 'IG Post', icon: 'fab fa-instagram', endpoint: '/maker/fakeigpost', baseUrl: 'https://api.zenzxz.my.id', params: [{ name: 'avatar', label: 'URL Avatar', type: 'url' }, { name: 'content', label: 'URL Konten', type: 'url' }, { name: 'username', label: 'Username', type: 'text' }, { name: 'likes', label: 'Likes', type: 'text' }, { name: 'comment', label: 'Comments', type: 'text' }, { name: 'share', label: 'Share', type: 'text' }, { name: 'repost', label: 'Repost', type: 'text' }, { name: 'date', label: 'Tanggal', type: 'text' }, { name: 'desc', label: 'Caption', type: 'textarea' }] },
    { id: 'tiktokprofile', name: 'TikTok Profile', icon: 'fab fa-tiktok', endpoint: '/maker/faketiktok', baseUrl: 'https://api.zenzxz.my.id', params: [{ name: 'name', label: 'Nama', type: 'text' }, { name: 'username', label: 'Username', type: 'text' }, { name: 'following', label: 'Following', type: 'text' }, { name: 'followers', label: 'Followers', type: 'text' }, { name: 'likes', label: 'Likes', type: 'text' }, { name: 'url', label: 'URL Foto', type: 'url' }] },
    { id: 'tiktokcomment', name: 'TikTok Comment', icon: 'fab fa-tiktok', endpoint: '/maker/fakettcomment', baseUrl: 'https://api.zenzxz.my.id', params: [{ name: 'url', label: 'URL Foto', type: 'url' }, { name: 'username', label: 'Username', type: 'text' }, { name: 'comment', label: 'Komentar', type: 'text' }, { name: 'date', label: 'Tanggal', type: 'text' }] },
    { id: 'ytcommunity', name: 'YT Community', icon: 'fab fa-youtube', endpoint: '/maker/fakeytcomunity', baseUrl: 'https://api.zenzxz.my.id', params: [{ name: 'avatar', label: 'URL Avatar', type: 'url' }, { name: 'content', label: 'URL Konten', type: 'url' }, { name: 'username', label: 'Username', type: 'text' }, { name: 'desc', label: 'Deskripsi', type: 'text' }, { name: 'like', label: 'Like', type: 'text' }, { name: 'comment', label: 'Comment', type: 'text' }] },
    { id: 'ytcomment', name: 'YT Comment', icon: 'fab fa-youtube', endpoint: '/maker/ytcomment', baseUrl: 'https://api.deline.web.id', params: [{ name: 'username', label: 'Username', type: 'text', placeholder: 'cpmjhon21' }, { name: 'text', label: 'Komentar', type: 'textarea', placeholder: 'Tulis komentar di sini...' }, { name: 'avatar', label: 'URL Avatar', type: 'url', placeholder: 'https://example.com/avatar.jpg' }] }
];

// ========== FORMAT MOCKUP V2 ==========
const formatsV2 = [
    { id: 'goodbye', name: 'Goodbye V1', icon: 'fas fa-sign-out-alt', endpoint: '/api/canvas/goodbyev1', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'username', label: 'Username', type: 'text' }, { name: 'guildName', label: 'Nama Guild', type: 'text' }, { name: 'guildIcon', label: 'URL Icon Guild', type: 'url' }, { name: 'memberCount', label: 'Jumlah Member', type: 'text' }, { name: 'avatar', label: 'URL Avatar', type: 'url' }, { name: 'background', label: 'URL Background', type: 'url' }, { name: 'quality', label: 'Kualitas (1-100)', type: 'text' }] },
    { id: 'welcome', name: 'Welcome V1', icon: 'fas fa-sign-in-alt', endpoint: '/api/canvas/welcomev1', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'username', label: 'Username', type: 'text' }, { name: 'guildName', label: 'Nama Guild', type: 'text' }, { name: 'guildIcon', label: 'URL Icon Guild', type: 'url' }, { name: 'memberCount', label: 'Jumlah Member', type: 'text' }, { name: 'avatar', label: 'URL Avatar', type: 'url' }, { name: 'background', label: 'URL Background', type: 'url' }, { name: 'quality', label: 'Kualitas (1-100)', type: 'text' }] },
    { id: 'spotify', name: 'Spotify Card', icon: 'fab fa-spotify', endpoint: '/api/canvas/spotify', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'title', label: 'Judul Lagu', type: 'text' }, { name: 'artist', label: 'Artis', type: 'text' }, { name: 'start', label: 'Waktu Mulai (ms)', type: 'text' }, { name: 'end', label: 'Waktu Akhir (ms)', type: 'text' }, { name: 'image', label: 'URL Gambar', type: 'url' }, { name: 'border', label: 'Warna Border', type: 'text' }, { name: 'album', label: 'Nama Album', type: 'text' }] },
    { id: 'gay', name: 'Gay Image', icon: 'fas fa-rainbow', endpoint: '/api/canvas/gay', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'nama', label: 'Nama', type: 'text' }, { name: 'avatar', label: 'URL Avatar', type: 'url' }, { name: 'num', label: 'Angka', type: 'text' }] },
    { id: 'profilecard', name: 'Profile Card', icon: 'fas fa-id-card', endpoint: '/api/canvas/profile', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'backgroundURL', label: 'URL Background', type: 'url' }, { name: 'avatarURL', label: 'URL Avatar', type: 'url' }, { name: 'rankName', label: 'Nama Rank', type: 'text' }, { name: 'rankId', label: 'ID Rank', type: 'text' }, { name: 'exp', label: 'EXP', type: 'text' }, { name: 'requireExp', label: 'EXP Required', type: 'text' }, { name: 'level', label: 'Level', type: 'text' }, { name: 'name', label: 'Nama', type: 'text' }] },
    { id: 'captcha', name: 'Captcha Image', icon: 'fas fa-shield-alt', endpoint: '/api/canvas/captcha', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'background', label: 'URL Background', type: 'url' }, { name: 'captchaKey', label: 'Kode Captcha', type: 'text' }, { name: 'border', label: 'Warna Border', type: 'text' }, { name: 'overlayOpacity', label: 'Opacity Overlay', type: 'text' }] },
    { id: 'fakecomment', name: 'Fake xnxx Comment', icon: 'fas fa-comment-dots', endpoint: '/api/canvas/fake-xnxx', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'name', label: 'Nama', type: 'text' }, { name: 'quote', label: 'Kutipan', type: 'textarea' }, { name: 'likes', label: 'Jumlah Like', type: 'text' }, { name: 'dislikes', label: 'Jumlah Dislike', type: 'text' }] },
    { id: 'fakexn', name: 'Fake xnxx', icon: 'fas fa-skull', endpoint: '/api/canvas/xnxx', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'title', label: 'Judul', type: 'text' }, { name: 'image', label: 'URL Gambar', type: 'url' }] },
    { id: 'beautiful', name: 'Beautiful Image', icon: 'fas fa-star', endpoint: '/api/canvas/beautiful', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'image', label: 'URL Gambar', type: 'url' }] },
    { id: 'sertifikat', name: 'Sertifikat Tolol', icon: 'fas fa-scroll', endpoint: '/api/canvas/sertifikat-tolol', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'text', label: 'Teks', type: 'text' }] },
    { id: 'ektp', name: 'eKTP Generator', icon: 'fas fa-id-card', endpoint: '/api/canvas/ektp', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'provinsi', label: 'Provinsi', type: 'text' }, { name: 'kota', label: 'Kota', type: 'text' }, { name: 'nik', label: 'NIK', type: 'text' }, { name: 'nama', label: 'Nama', type: 'text' }, { name: 'ttl', label: 'Tempat/Tgl Lahir', type: 'text' }, { name: 'jenis_kelamin', label: 'Jenis Kelamin', type: 'text' }, { name: 'golongan_darah', label: 'Golongan Darah', type: 'text' }, { name: 'alamat', label: 'Alamat', type: 'textarea' }, { name: 'rt/rw', label: 'RT/RW', type: 'text' }, { name: 'kel/desa', label: 'Kelurahan/Desa', type: 'text' }, { name: 'kecamatan', label: 'Kecamatan', type: 'text' }, { name: 'agama', label: 'Agama', type: 'text' }, { name: 'status', label: 'Status Perkawinan', type: 'text' }, { name: 'pekerjaan', label: 'Pekerjaan', type: 'text' }, { name: 'kewarganegaraan', label: 'Kewarganegaraan', type: 'text' }, { name: 'masa_berlaku', label: 'Masa Berlaku', type: 'text' }, { name: 'terbuat', label: 'Tanggal Terbuat', type: 'text' }, { name: 'pas_photo', label: 'URL Pas Photo', type: 'url' }] },
    { id: 'levelup', name: 'Level Up Card', icon: 'fas fa-level-up-alt', endpoint: '/api/canvas/level-up', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'backgroundURL', label: 'URL Background', type: 'url' }, { name: 'avatarURL', label: 'URL Avatar', type: 'url' }, { name: 'fromLevel', label: 'Dari Level', type: 'text' }, { name: 'toLevel', label: 'Ke Level', type: 'text' }, { name: 'name', label: 'Nama', type: 'text' }] },
    { id: 'security', name: 'Security Card', icon: 'fas fa-shield-virus', endpoint: '/api/canvas/security', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'avatar', label: 'URL Avatar', type: 'url' }, { name: 'background', label: 'URL Background', type: 'url' }, { name: 'createdTimestamp', label: 'Created Timestamp', type: 'text' }, { name: 'suspectTimestamp', label: 'Suspect Timestamp', type: 'text' }, { name: 'locale', label: 'Locale', type: 'text' }] },
    { id: 'greyscale', name: 'Greyscale Image', icon: 'fas fa-adjust', endpoint: '/api/canvas/greyscale', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'image', label: 'URL Gambar', type: 'url', placeholder: 'https://example.com/image.jpg' }] },
    { id: 'invert', name: 'Invert Image', icon: 'fas fa-eye-dropper', endpoint: '/api/canvas/invert', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'image', label: 'URL Gambar', type: 'url', placeholder: 'https://example.com/image.jpg' }] },
    { id: 'blur', name: 'Blur Image Effect', icon: 'fas fa-blur', endpoint: '/api/canvas/blur', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'image', label: 'URL Gambar', type: 'url', placeholder: 'https://example.com/image.jpg' }] },
    { id: 'affect', name: 'Affect Image', icon: 'fas fa-face-smile', endpoint: '/api/canvas/affect', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'image', label: 'URL Gambar', type: 'url', placeholder: 'https://example.com/image.jpg' }] },
    { id: 'delete', name: 'Delete Image', icon: 'fas fa-trash-alt', endpoint: '/api/canvas/delete', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'image', label: 'URL Gambar', type: 'url', placeholder: 'https://example.com/image.jpg' }] },
    { id: 'facepalm', name: 'Facepalm Image', icon: 'fas fa-facepalm', endpoint: '/api/canvas/facepalm', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'image', label: 'URL Gambar', type: 'url', placeholder: 'https://example.com/image.jpg' }] },
    { id: 'kiss', name: 'Kiss Image', icon: 'fas fa-kiss-wink-heart', endpoint: '/api/canvas/kiss', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'image1', label: 'URL Gambar 1', type: 'url', placeholder: 'https://example.com/person1.jpg' }, { name: 'image2', label: 'URL Gambar 2', type: 'url', placeholder: 'https://example.com/person2.jpg' }] },
    { id: 'batslap', name: 'Batslap Image', icon: 'fas fa-hand-back-fist', endpoint: '/api/canvas/batslap', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'image1', label: 'URL Gambar 1', type: 'url', placeholder: 'https://example.com/victim.jpg' }, { name: 'image2', label: 'URL Gambar 2', type: 'url', placeholder: 'https://example.com/hitter.jpg' }] },
    { id: 'ship', name: 'Ship Image', icon: 'fas fa-heart', endpoint: '/api/canvas/ship', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'avatar1', label: 'URL Avatar 1', type: 'url', placeholder: 'https://example.com/avatar1.jpg' }, { name: 'avatar2', label: 'URL Avatar 2', type: 'url', placeholder: 'https://example.com/avatar2.jpg' }, { name: 'background', label: 'URL Background (Opsional)', type: 'url', placeholder: 'https://example.com/background.jpg' }, { name: 'persen', label: 'Persentase (%)', type: 'text', placeholder: '50' }] },
    { id: 'quote', name: 'Quote/Reminder Card', icon: 'fas fa-quote-right', endpoint: '/api/canvas/quote', baseUrl: 'https://api.siputzx.my.id', isQuoteCard: true, params: [{ name: 'text', label: 'Teks Quote', type: 'textarea', placeholder: 'Masukkan teks quote di sini...\nGunakan [kurung siku] untuk highlight teks' }, { name: 'author', label: 'Nama Penulis/Sumber', type: 'text', placeholder: 'Seseorang' }, { name: 'bgUrl', label: 'URL Background (Opsional)', type: 'url', placeholder: 'https://example.com/background.jpg' }, { name: 'fontUrl', label: 'URL Font (Opsional)', type: 'url', placeholder: 'https://example.com/font.ttf' }] },
    { id: 'textpro', name: 'TextPro', icon: 'fas fa-text-height', endpoint: '/api/m/textpro', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'url', label: 'URL TextPro', type: 'url' }, { name: 'text1', label: 'Teks 1', type: 'text' }, { name: 'text2', label: 'Teks 2', type: 'text' }] },
    { id: 'photooxy', name: 'PhotoOxy', icon: 'fas fa-image', endpoint: '/api/m/photooxy', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'url', label: 'URL PhotoOxy', type: 'url' }, { name: 'text1', label: 'Teks', type: 'text' }] },
    { id: 'ephoto360', name: 'Ephoto360', icon: 'fas fa-edit', endpoint: '/api/m/ephoto360', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'url', label: 'URL Ephoto360', type: 'url' }, { name: 'text1', label: 'Teks', type: 'text' }] },
    { id: 'random_bluearchive', name: 'Random Blue Archive', icon: 'fas fa-dice-d6', endpoint: '/api/r/blue-archive', baseUrl: 'https://api.siputzx.my.id', params: [], isRandom: true, isDirectImage: true },
    { id: 'random_cecan_thailand', name: 'Random Cecan Thailand', icon: 'fas fa-dice-d6', endpoint: '/api/r/cecan/thailand', baseUrl: 'https://api.siputzx.my.id', params: [], isRandom: true, isDirectImage: true },
    { id: 'random_cecan_china', name: 'Random Cecan China', icon: 'fas fa-dice-d6', endpoint: '/api/r/cecan/china', baseUrl: 'https://api.siputzx.my.id', params: [], isRandom: true, isDirectImage: true },
    { id: 'random_cecan_vietnam', name: 'Random Cecan Vietnam', icon: 'fas fa-dice-d6', endpoint: '/api/r/cecan/vietnam', baseUrl: 'https://api.siputzx.my.id', params: [], isRandom: true, isDirectImage: true },
    { id: 'random_cecan_indonesia', name: 'Random Cecan Indonesia', icon: 'fas fa-dice-d6', endpoint: '/api/r/cecan/indonesia', baseUrl: 'https://api.siputzx.my.id', params: [], isRandom: true, isDirectImage: true },
    { id: 'random_cecan_japan', name: 'Random Cecan Japan', icon: 'fas fa-dice-d6', endpoint: '/api/r/cecan/japan', baseUrl: 'https://api.siputzx.my.id', params: [], isRandom: true, isDirectImage: true },
    { id: 'random_cecan_korea', name: 'Random Cecan Korea', icon: 'fas fa-dice-d6', endpoint: '/api/r/cecan/korea', baseUrl: 'https://api.siputzx.my.id', params: [], isRandom: true, isDirectImage: true },
    { id: 'random_waifu', name: 'Random Waifu', icon: 'fas fa-dice-d6', endpoint: '/sfw/waifu', baseUrl: 'https://api.waifu.pics', params: [], isRandom: true, useWaifuPics: true },
    { id: 'random_neko', name: 'Random Anime Neko', icon: 'fas fa-dice-d6', endpoint: '/api/v2/neko', baseUrl: 'https://nekos.best', params: [], isRandom: true, useNekosBest: true }
];

// ========== APP STORE STATE ==========
const AppStoreState = {
    selectedCategory: 'All',
    searchQuery: '',
    selectedFormat: null,
    viewMode: 'grid',
    favorites: JSON.parse(localStorage.getItem('quickfake_favorites') || '[]')
};

// Categories
const CATEGORIES_LIST = ['All', 'Social Media', 'Messaging', 'Entertainment', 'Image Effect', 'Random', 'Tools'];

// Get format category
const getFormatCategory = (format) => {
    const categoryMap = {
        'igpost': 'Social Media', 'tiktokprofile': 'Social Media', 'tiktokcomment': 'Social Media',
        'ytcommunity': 'Social Media', 'ytcomment': 'Social Media', 'fakechannel': 'Social Media',
        'fbcomment': 'Social Media', 'wagroup': 'Messaging', 'wagroupv2': 'Messaging',
        'fakecall': 'Messaging', 'brat': 'Entertainment', 'fakedana': 'Tools',
        'goodbye': 'Entertainment', 'welcome': 'Entertainment', 'spotify': 'Entertainment',
        'gay': 'Image Effect', 'profilecard': 'Tools', 'captcha': 'Tools', 'beautiful': 'Image Effect',
        'sertifikat': 'Entertainment', 'ektp': 'Tools', 'levelup': 'Entertainment', 'security': 'Tools',
        'greyscale': 'Image Effect', 'invert': 'Image Effect', 'blur': 'Image Effect', 'affect': 'Image Effect',
        'delete': 'Image Effect', 'facepalm': 'Image Effect', 'kiss': 'Image Effect', 'batslap': 'Image Effect',
        'ship': 'Image Effect', 'quote': 'Tools', 'textpro': 'Tools', 'photooxy': 'Tools', 'ephoto360': 'Tools',
        'random_waifu': 'Random', 'random_neko': 'Random', 'random_bluearchive': 'Random',
        'random_cecan_thailand': 'Random', 'random_cecan_china': 'Random', 'random_cecan_vietnam': 'Random',
        'random_cecan_indonesia': 'Random', 'random_cecan_japan': 'Random', 'random_cecan_korea': 'Random'
    };
    return categoryMap[format.id] || 'Tools';
};

// Check if format is new
const isNewFormat = (formatId) => {
    const newFormats = ['quote', 'security', 'levelup', 'random_cecan_korea', 'ship'];
    return newFormats.includes(formatId);
};

// Check if format is popular
const isPopularFormat = (formatId) => {
    const popularFormats = ['igpost', 'fakecall', 'wagroup', 'spotify', 'random_waifu', 'ektp'];
    return popularFormats.includes(formatId);
};

// Save favorites
const saveFavorites = () => {
    localStorage.setItem('quickfake_favorites', JSON.stringify(AppStoreState.favorites));
};

// Toggle favorite
const toggleFavorite = (formatId, event) => {
    if (event) event.stopPropagation();
    const index = AppStoreState.favorites.indexOf(formatId);
    if (index > -1) {
        AppStoreState.favorites.splice(index, 1);
    } else {
        AppStoreState.favorites.push(formatId);
    }
    saveFavorites();
    renderFormats(currentVersion);
    if (window.showToast) window.showToast(index > -1 ? 'Removed from favorites' : 'Added to favorites', 'success');
};

let currentVersion = 'v1';
let activeFormatV1 = formatsV1[0];
let activeFormatV2 = formatsV2[0];

// ========== VERIFICATION GATE ==========
let isFollowed = false, isShared = false;

function checkVerification() {
    if (localStorage.getItem('quickfake_verified') === 'true') {
        document.getElementById('gatePage').classList.add('hidden');
        document.getElementById('splashScreen').style.display = 'flex';
        initSplashScreen();
        initAll();
    } else {
        document.getElementById('gatePage').style.display = 'flex';
        document.getElementById('splashScreen').style.display = 'none';
        document.getElementById('mainContent').classList.add('hidden');
    }
}

function followSaluran() { 
    window.open('https://whatsapp.com/channel/0029VaLiUSS5q08hPj5mcH0m', '_blank'); 
    isFollowed = true; 
    cekProgress(); 
}

function shareWA() { 
    const waText = `*WEBSITE QuickFake By Jhon*\n> ${window.location.href}\n\n*SUMBER UTAMA*\n> https://whatsapp.com/channel/0029VaLiUSS5q08hPj5mcH0m`; 
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(waText)}`, '_blank'); 
    isShared = true; 
    cekProgress(); 
}

function cekProgress() {
    const pBar = document.getElementById('pBar'), statusText = document.getElementById('statusText');
    let progress = (isFollowed ? 50 : 0) + (isShared ? 50 : 0);
    pBar.style.width = progress + '%';
    statusText.style.display = 'block';
    if (progress === 100) {
        statusText.innerHTML = '✅ Verifikasi berhasil! Mengalihkan...';
        statusText.style.color = '#10b981';
        localStorage.setItem('quickfake_verified', 'true');
        setTimeout(() => {
            document.getElementById('gatePage').classList.add('hidden');
            document.getElementById('splashScreen').style.display = 'flex';
            document.getElementById('mainContent').classList.remove('hidden');
            initSplashScreen();
            initAll();
        }, 1500);
    } else { 
        statusText.innerHTML = `Progress: ${progress}% - Selesaikan kedua tugas!`; 
        statusText.style.color = '#f59e0b'; 
    }
}

// ========== SPLASH SCREEN ==========
function initSplashScreen() {
    const splashScreen = document.getElementById('splashScreen');
    const progressFill = document.getElementById('progressFill');
    const loadingPercentage = document.getElementById('loadingPercentage');
    const loadingStatus = document.getElementById('loadingStatus');
    const messages = [{ text: '🎨 Loading features...', progress: 20 }, { text: '⚡ Connecting to API...', progress: 40 }, { text: '✨ Preparing v1 & v2...', progress: 60 }, { text: '📸 Adding SSWeb...', progress: 80 }, { text: '🎉 Welcome to QuickFake!', progress: 100 }];
    let currentProgress = 0, msgIndex = 0;
    createParticles();
    function updateProgress() {
        const target = messages[msgIndex]?.progress || 100;
        const interval = setInterval(() => {
            if (currentProgress < target) { 
                currentProgress++; 
                progressFill.style.width = currentProgress + '%'; 
                loadingPercentage.textContent = currentProgress; 
            } else {
                clearInterval(interval);
                if (msgIndex < messages.length - 1) { 
                    msgIndex++; 
                    const icons = ['', 'network-wired', 'palette', 'camera', 'check-circle']; 
                    loadingStatus.innerHTML = `<i class="fas fa-${icons[msgIndex]}"></i> ${messages[msgIndex].text}`; 
                    updateProgress(); 
                } else { 
                    setTimeout(() => { 
                        splashScreen.classList.add('fade-out'); 
                        document.getElementById('mainContent').classList.remove('hidden'); 
                        setTimeout(() => { 
                            document.getElementById('mainContent').classList.add('visible'); 
                            splashScreen.style.display = 'none'; 
                        }, 800); 
                    }, 500); 
                }
            }
        }, 30);
    }
    updateProgress();
}

function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    for (let i = 0; i < 30; i++) { 
        const p = document.createElement('div'); 
        p.className = 'particle'; 
        p.style.position = 'absolute'; 
        p.style.left = Math.random() * 100 + '%'; 
        p.style.animationDelay = Math.random() * 3 + 's'; 
        p.style.animationDuration = 2 + Math.random() * 2 + 's'; 
        p.style.background = `hsl(${Math.random() * 60 + 200}, 70%, 60%)`; 
        container.appendChild(p); 
    }
}

// ========== RENDER CATEGORY TABS ==========
function renderCategoryTabs(version) {
    const container = document.getElementById(`categoryTabs${version.toUpperCase()}`);
    if (!container) return;
    
    container.innerHTML = CATEGORIES_LIST.map(cat => `
        <button class="category-tab ${AppStoreState.selectedCategory === cat ? 'active' : ''}" data-category="${cat}">
            ${cat === 'All' ? '<i class="fas fa-th-large"></i>' : ''}
            ${cat === 'Social Media' ? '<i class="fab fa-instagram"></i>' : ''}
            ${cat === 'Messaging' ? '<i class="fab fa-whatsapp"></i>' : ''}
            ${cat === 'Entertainment' ? '<i class="fas fa-music"></i>' : ''}
            ${cat === 'Image Effect' ? '<i class="fas fa-magic"></i>' : ''}
            ${cat === 'Random' ? '<i class="fas fa-dice-d6"></i>' : ''}
            ${cat === 'Tools' ? '<i class="fas fa-tools"></i>' : ''}
            ${cat}
        </button>
    `).join('');
    
    container.querySelectorAll('.category-tab').forEach(btn => {
        btn.addEventListener('click', () => {
            AppStoreState.selectedCategory = btn.dataset.category;
            AppStoreState.selectedFormat = null;
            AppStoreState.viewMode = 'grid';
            renderCategoryTabs(version);
            renderFormats(version);
            
            const paramSection = document.getElementById(`paramSection${version.toUpperCase()}`);
            const grid = document.getElementById(`formatGrid${version.toUpperCase()}`);
            if (paramSection) paramSection.style.display = 'none';
            if (grid) grid.style.display = 'grid';
        });
    });
}

// ========== RENDER FORMATS ==========
function renderFormats(version) {
    const prefix = version.toUpperCase();
    const grid = document.getElementById(`formatGrid${prefix}`);
    const emptyState = document.getElementById(`emptyState${prefix}`);
    const formatCount = document.getElementById(`formatCount${prefix}`);
    
    if (!grid) return;
    
    const formats = version === 'v1' ? formatsV1 : formatsV2;
    
    let filteredFormats = [...formats];
    
    if (AppStoreState.selectedCategory !== 'All') {
        filteredFormats = filteredFormats.filter(f => getFormatCategory(f) === AppStoreState.selectedCategory);
    }
    
    if (AppStoreState.searchQuery.trim()) {
        const query = AppStoreState.searchQuery.toLowerCase();
        filteredFormats = filteredFormats.filter(f => f.name.toLowerCase().includes(query) || f.id.toLowerCase().includes(query));
    }
    
    filteredFormats.sort((a, b) => {
        const aFav = AppStoreState.favorites.includes(a.id);
        const bFav = AppStoreState.favorites.includes(b.id);
        if (aFav && !bFav) return -1;
        if (!aFav && bFav) return 1;
        return 0;
    });
    
    if (formatCount) formatCount.textContent = `${filteredFormats.length} format${filteredFormats.length !== 1 ? 's' : ''}`;
    
    if (filteredFormats.length === 0) {
        grid.style.display = 'none';
        if (emptyState) emptyState.style.display = 'block';
        return;
    }
    
    grid.style.display = 'grid';
    if (emptyState) emptyState.style.display = 'none';
    
    const fragment = document.createDocumentFragment();
    
    filteredFormats.forEach(format => {
        const card = document.createElement('div');
        card.className = `format-card ${AppStoreState.selectedFormat?.id === format.id ? 'active' : ''}`;
        card.setAttribute('data-format-id', format.id);
        
        const isNew = isNewFormat(format.id);
        const isPopular = isPopularFormat(format.id);
        const isFavorited = AppStoreState.favorites.includes(format.id);
        
        card.innerHTML = `
            ${isNew ? '<span class="format-badge new">NEW</span>' : ''}
            ${isPopular ? '<span class="format-badge popular">🔥 POPULAR</span>' : ''}
            <i class="${format.icon}"></i>
            <h3>${format.name}</h3>
            <div class="format-category">${getFormatCategory(format)}</div>
            <div class="favorite-star ${isFavorited ? 'favorited' : ''}" data-format-id="${format.id}">
                <i class="fas ${isFavorited ? 'fa-star' : 'fa-star-of-life'}"></i>
            </div>
        `;
        
        card.addEventListener('click', (e) => {
            if (e.target.closest('.favorite-star')) return;
            AppStoreState.selectedFormat = format;
            AppStoreState.viewMode = 'detail';
            renderFormats(version);
            showFormatDetail(version, format);
        });
        
        fragment.appendChild(card);
    });
    
    grid.innerHTML = '';
    grid.appendChild(fragment);
    
    grid.querySelectorAll('.favorite-star').forEach(star => {
        star.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleFavorite(star.dataset.formatId, e);
        });
    });
}

// ========== SHOW FORMAT DETAIL ==========
function showFormatDetail(version, format) {
    const prefix = version.toUpperCase();
    const grid = document.getElementById(`formatGrid${prefix}`);
    const paramSection = document.getElementById(`paramSection${prefix}`);
    const selectedFormatName = document.getElementById(`selectedFormatName${prefix}`);
    const backBtn = document.getElementById(`backToGrid${prefix}`);
    
    if (grid) grid.style.display = 'none';
    if (paramSection) paramSection.style.display = 'block';
    if (selectedFormatName) selectedFormatName.textContent = format.name;
    
    if (version === 'v1') activeFormatV1 = format;
    else activeFormatV2 = format;
    
    renderParamForm(prefix, format);
    
    if (backBtn) {
        const newBackBtn = backBtn.cloneNode(true);
        backBtn.parentNode.replaceChild(newBackBtn, backBtn);
        newBackBtn.addEventListener('click', () => {
            AppStoreState.selectedFormat = null;
            AppStoreState.viewMode = 'grid';
            if (grid) grid.style.display = 'grid';
            if (paramSection) paramSection.style.display = 'none';
            renderFormats(version);
        });
    }
    
    const generateBtn = document.getElementById(`generateBtn${prefix}`);
    if (generateBtn) {
        const newGenerateBtn = generateBtn.cloneNode(true);
        generateBtn.parentNode.replaceChild(newGenerateBtn, generateBtn);
        newGenerateBtn.addEventListener('click', () => generateMockup(version));
    }
}

// ========== SETUP SEARCH ==========
function setupSearch(version) {
    const prefix = version.toUpperCase();
    const searchInput = document.getElementById(`searchInput${prefix}`);
    const searchClear = document.getElementById(`searchClear${prefix}`);
    
    if (!searchInput) return;
    
    let debounceTimer;
    
    const handleSearch = () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            AppStoreState.searchQuery = searchInput.value;
            AppStoreState.selectedFormat = null;
            AppStoreState.viewMode = 'grid';
            renderFormats(version);
            
            const paramSection = document.getElementById(`paramSection${prefix}`);
            const grid = document.getElementById(`formatGrid${prefix}`);
            if (paramSection) paramSection.style.display = 'none';
            if (grid) grid.style.display = 'grid';
            
            if (searchClear) searchClear.style.display = searchInput.value ? 'flex' : 'none';
        }, 300);
    };
    
    searchInput.addEventListener('input', handleSearch);
    
    if (searchClear) {
        searchClear.addEventListener('click', () => {
            searchInput.value = '';
            handleSearch();
            searchInput.focus();
        });
    }
}

// ========== RENDER FUNCTIONS ==========
function renderFormatGridV1() {
    if (!AppStoreState.selectedFormat && AppStoreState.viewMode === 'grid') {
        renderCategoryTabs('v1');
        renderFormats('v1');
        setupSearch('v1');
    }
}

function renderFormatGridV2() {
    if (!AppStoreState.selectedFormat && AppStoreState.viewMode === 'grid') {
        renderCategoryTabs('v2');
        renderFormats('v2');
        setupSearch('v2');
    }
}

function renderParamForm(prefix, activeFormat) {
    const container = document.getElementById(`paramForm${prefix}`);
    if (!container) return;
    
    if (!activeFormat.params?.length) {
        container.innerHTML = '<div class="input-group"><p style="color:#9ca3af;">✨ Random Image - Klik Generate untuk mendapatkan gambar acak</p></div>';
        return;
    }
    
    let html = activeFormat.params.map(p => `
        <div class="input-group">
            <label>${p.label}</label>
            ${p.type === 'textarea' ? `<textarea name="${p.name}" rows="3" placeholder="${p.placeholder || ''}"></textarea>` : `<input type="${p.type}" name="${p.name}" placeholder="${p.placeholder || ''}" />`}
        </div>
    `).join('');
    
    if (activeFormat.id === 'quote') {
        html += `<div class="tips-form"><i class="fas fa-lightbulb"></i> <strong>✨ Tips:</strong> Gunakan [kurung siku] untuk highlight teks</div>`;
    }
    
    container.innerHTML = html;
}

function renderParamFormV1() { renderParamForm('V1', activeFormatV1); }
function renderParamFormV2() { renderParamForm('V2', activeFormatV2); }

// ========== GENERATE LOADING ==========
function showGenerateLoading(version) {
    const prefix = version === 'v1' ? 'V1' : 'V2';
    const btn = document.getElementById(`generateBtn${prefix}`);
    const loading = document.getElementById(`generateLoading${prefix}`);
    const fill = document.getElementById(`generateProgressFill${prefix}`);
    const percent = document.getElementById(`generateProgressPercent${prefix}`);
    
    if (btn) btn.classList.add('hidden');
    if (loading) loading.classList.remove('hidden');
    
    let progress = 0;
    const interval = setInterval(() => {
        if (progress < 95) { 
            progress += Math.random() * 12; 
            if (progress > 95) progress = 95; 
            if (fill) fill.style.width = progress + '%'; 
            if (percent) percent.textContent = Math.floor(progress); 
        }
    }, 180);
    
    return { interval, fill, percent };
}

function hideGenerateLoading(loadingObj, success = true, version) {
    if (loadingObj && loadingObj.interval) clearInterval(loadingObj.interval);
    
    const prefix = version === 'v1' ? 'V1' : 'V2';
    const btn = document.getElementById(`generateBtn${prefix}`);
    const container = document.getElementById(`generateLoading${prefix}`);
    
    if (success && loadingObj && loadingObj.fill && loadingObj.percent) { 
        loadingObj.fill.style.width = '100%'; 
        loadingObj.percent.textContent = '100'; 
        setTimeout(() => { 
            if (container) container.classList.add('hidden'); 
            if (btn) btn.classList.remove('hidden'); 
        }, 500); 
    } else { 
        if (container) container.classList.add('hidden'); 
        if (btn) btn.classList.remove('hidden'); 
    }
}

// ========== FETCH FUNCTIONS ==========
async function fetchWithRetry(url, options, retries = 3, delay = 1000) {
    for (let i = 0; i < retries; i++) {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 25000);
            const response = await fetch(url, { ...options, signal: controller.signal });
            clearTimeout(timeoutId);
            if (response.ok) return response;
            if (response.status === 503 && i < retries - 1) {
                await new Promise(resolve => setTimeout(resolve, delay * (i + 1)));
                continue;
            }
            throw new Error(`HTTP ${response.status}`);
        } catch (err) {
            if (i === retries - 1) throw err;
            await new Promise(resolve => setTimeout(resolve, delay * (i + 1)));
        }
    }
}

async function fetchDirectImage(format) {
    const apiUrl = `${format.baseUrl}${format.endpoint}`;
    const response = await fetchWithRetry(apiUrl, { headers: { 'Accept': 'image/*' } });
    const blob = await response.blob();
    return URL.createObjectURL(blob);
}

async function fetchWaifuPics() {
    const response = await fetch('https://api.waifu.pics/sfw/waifu');
    const data = await response.json();
    return data.url;
}

async function fetchNekosBest() {
    const response = await fetch('https://nekos.best/api/v2/neko');
    const data = await response.json();
    return data.results[0].url;
}

// ========== PERBAIKAN QUOTE CARD DENGAN HIGHLIGHT [KURUNG SIKU] ==========
async function generateQuoteCard(text, author, bgUrl = null, fontUrl = null) {
    const backgroundUrl = bgUrl || 'https://raw.githubusercontent.com/CusJhon/Asset-/542413b90c0f414672859cb0b461c5b7db0aac9f/Image/_20260425155846190.jpeg';
    const fontUrlToUse = fontUrl || 'https://raw.githubusercontent.com/CusJhon/Asset-/542413b90c0f414672859cb0b461c5b7db0aac9f/Font/CrimsonText-Regular.ttf';
    
    try {
        // Load font
        const fontResponse = await fetch(fontUrlToUse);
        const fontBuffer = await fontResponse.arrayBuffer();
        const fontBlob = new Blob([fontBuffer], { type: 'font/ttf' });
        const fontUrlBlob = URL.createObjectURL(fontBlob);
        const font = new FontFace('CustomFont', `url(${fontUrlBlob})`);
        await font.load();
        document.fonts.add(font);
        URL.revokeObjectURL(fontUrlBlob);
        
        // Load background image
        const bgResponse = await fetch(backgroundUrl);
        const bgBuffer = await bgResponse.arrayBuffer();
        const bgBlob = new Blob([bgBuffer], { type: 'image/jpeg' });
        const bgUrlBlob = URL.createObjectURL(bgBlob);
        
        const bgImage = await new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = () => reject(new Error('Gagal load background'));
            img.src = bgUrlBlob;
        });
        URL.revokeObjectURL(bgUrlBlob);
        
        // Setup canvas
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = bgImage.width;
        canvas.height = bgImage.height;
        
        // Draw background
        ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
        
        // Add semi-transparent overlay agar teks lebih terbaca
        ctx.fillStyle = 'rgba(0, 0, 0, 0.55)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // ========== PROSES TEKS DENGAN HIGHLIGHT [kurung siku] ==========
        // Parse teks untuk mencari pola [teks] dan ganti dengan highlight
        const highlightRegex = /\[([^\]]+)\]/g;
        const segments = [];
        let lastIndex = 0;
        let match;
        
        while ((match = highlightRegex.exec(text)) !== null) {
            // Teks biasa sebelum highlight
            if (match.index > lastIndex) {
                segments.push({
                    type: 'text',
                    content: text.substring(lastIndex, match.index)
                });
            }
            // Teks highlight (tanpa kurung siku)
            segments.push({
                type: 'highlight',
                content: match[1]
            });
            lastIndex = match.index + match[0].length;
        }
        
        // Sisa teks biasa
        if (lastIndex < text.length) {
            segments.push({
                type: 'text',
                content: text.substring(lastIndex)
            });
        }
        
        // Jika tidak ada highlight sama sekali, treat seluruh teks sebagai teks biasa
        if (segments.length === 0) {
            segments.push({
                type: 'text',
                content: text
            });
        }
        
        // Konfigurasi teks
        const baseFontSize = Math.min(canvas.width / 22, 52);
        const lineHeight = baseFontSize * 1.4;
        const maxWidth = canvas.width - 100;
        const startX = 50;
        let currentY = canvas.height / 2 - 60;
        
        ctx.font = `${baseFontSize}px CustomFont`;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'top';
        
        // Fungsi untuk mengukur lebar teks
        function measureTextWidth(txt) {
            return ctx.measureText(txt).width;
        }
        
        // Kumpulkan semua segmen menjadi satu array karakter dengan metadata highlight
        const chars = [];
        for (const seg of segments) {
            for (let i = 0; i < seg.content.length; i++) {
                chars.push({
                    char: seg.content[i],
                    isHighlight: seg.type === 'highlight'
                });
            }
        }
        
        // Fungsi menggambar satu baris dengan highlight
        function drawHighlightedLine(ctxRef, charsArray, x, y, fontSize) {
            let currentX = x;
            let currentHighlightChars = [];
            let currentNormalChars = [];
            
            for (let i = 0; i <= charsArray.length; i++) {
                const char = charsArray[i];
                const nextChar = charsArray[i + 1];
                
                if (char) {
                    if (char.isHighlight) {
                        currentHighlightChars.push(char.char);
                    } else {
                        currentNormalChars.push(char.char);
                    }
                }
                
                // Jika ganti tipe atau akhir array, gambar segmen yang terkumpul
                if ((char && nextChar && char.isHighlight !== nextChar.isHighlight) || i === charsArray.length - 1) {
                    // Gambar teks normal
                    if (currentNormalChars.length > 0) {
                        const normalText = currentNormalChars.join('');
                        const metrics = ctxRef.measureText(normalText);
                        ctxRef.fillStyle = '#FFFFFF';
                        ctxRef.font = `${fontSize}px CustomFont`;
                        ctxRef.fillText(normalText, currentX, y);
                        currentX += metrics.width;
                        currentNormalChars = [];
                    }
                    
                    // Gambar highlight
                    if (currentHighlightChars.length > 0) {
                        const highlightText = currentHighlightChars.join('');
                        const metrics = ctxRef.measureText(highlightText);
                        const highlightWidth = metrics.width;
                        const highlightHeight = fontSize * 1.2;
                        
                        // Gambar background highlight (kuning dengan efek rounded)
                        ctxRef.save();
                        ctxRef.shadowBlur = 0;
                        ctxRef.fillStyle = '#FBBF24';
                        
                        // Rounded rectangle untuk background
                        const radius = 8;
                        ctxRef.beginPath();
                        ctxRef.moveTo(currentX + radius, y);
                        ctxRef.lineTo(currentX + highlightWidth - radius, y);
                        ctxRef.quadraticCurveTo(currentX + highlightWidth, y, currentX + highlightWidth, y + radius);
                        ctxRef.lineTo(currentX + highlightWidth, y + highlightHeight - radius);
                        ctxRef.quadraticCurveTo(currentX + highlightWidth, y + highlightHeight, currentX + highlightWidth - radius, y + highlightHeight);
                        ctxRef.lineTo(currentX + radius, y + highlightHeight);
                        ctxRef.quadraticCurveTo(currentX, y + highlightHeight, currentX, y + highlightHeight - radius);
                        ctxRef.lineTo(currentX, y + radius);
                        ctxRef.quadraticCurveTo(currentX, y, currentX + radius, y);
                        ctxRef.closePath();
                        ctxRef.fill();
                        
                        // Gambar teks dengan warna gelap agar kontras
                        ctxRef.fillStyle = '#1F2937';
                        ctxRef.font = `${fontSize}px CustomFont`;
                        ctxRef.fillText(highlightText, currentX, y);
                        ctxRef.restore();
                        
                        currentX += highlightWidth;
                        currentHighlightChars = [];
                    }
                }
            }
            return currentX;
        }
        
        // Render teks dengan word wrap
        let lineChars = [];
        let yOffset = currentY;
        
        for (let i = 0; i < chars.length; i++) {
            const char = chars[i];
            const testLine = lineChars.map(c => c.char).join('') + char.char;
            const testWidth = measureTextWidth(testLine);
            
            if (testWidth > maxWidth && lineChars.length > 0) {
                // Gambar line saat ini
                drawHighlightedLine(ctx, lineChars, startX, yOffset, baseFontSize);
                yOffset += lineHeight;
                lineChars = [char];
            } else {
                lineChars.push(char);
            }
        }
        
        // Gambar line terakhir
        if (lineChars.length > 0) {
            drawHighlightedLine(ctx, lineChars, startX, yOffset, baseFontSize);
            yOffset += lineHeight;
        }
        
        // Gambar author
        if (author && author.trim()) {
            const authorY = Math.min(yOffset + 30, canvas.height - 60);
            ctx.font = `${Math.max(baseFontSize * 0.65, 18)}px CustomFont`;
            ctx.fillStyle = '#CBD5E1';
            ctx.textAlign = 'right';
            ctx.fillText(`— ${author} —`, canvas.width - 50, authorY);
        }
        
        // Convert ke blob
        const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/jpeg', 0.9));
        return URL.createObjectURL(blob);
        
    } catch (error) {
        console.error('Quote card error:', error);
        throw new Error(`Gagal membuat quote card: ${error.message}`);
    }
}

// ========== GENERATE MOCKUP ==========
async function generateMockup(version) {
    const prefix = version === 'v1' ? 'V1' : 'V2';
    const activeFormat = version === 'v1' ? activeFormatV1 : activeFormatV2;
    const resultDiv = document.getElementById(`resultArea${prefix}`);
    const loadingObj = showGenerateLoading(version);
    
    try {
        if (activeFormat.isRandom) {
            let imageUrl;
            if (activeFormat.isDirectImage) imageUrl = await fetchDirectImage(activeFormat);
            else if (activeFormat.useWaifuPics) imageUrl = await fetchWaifuPics();
            else imageUrl = await fetchNekosBest();
            
            resultDiv.innerHTML = `<div class="result-content"><img src="${imageUrl}" loading="lazy" style="max-width:100%; border-radius:1rem;"/><div style="margin-top:20px;"><button class="download-btn" id="downloadImageBtn${prefix}"><i class="fas fa-download"></i> Download</button></div></div>`;
            const downloadBtn = document.getElementById(`downloadImageBtn${prefix}`);
            if (downloadBtn) downloadBtn.onclick = () => window.downloadImage?.(imageUrl, `${activeFormat.id}_${Date.now()}.png`);
            hideGenerateLoading(loadingObj, true, version);
            window.showToast?.('Gambar acak berhasil dihasilkan!', 'success');
            return;
        }
        
        if (activeFormat.isQuoteCard || activeFormat.id === 'quote') {
            const textInput = document.querySelector(`#paramForm${prefix} textarea[name="text"], #paramForm${prefix} input[name="text"]`);
            const authorInput = document.querySelector(`#paramForm${prefix} input[name="author"]`);
            const bgUrlInput = document.querySelector(`#paramForm${prefix} input[name="bgUrl"]`);
            const fontUrlInput = document.querySelector(`#paramForm${prefix} input[name="fontUrl"]`);
            
            const imageUrl = await generateQuoteCard(textInput?.value || '', authorInput?.value || 'Seseorang', bgUrlInput?.value, fontUrlInput?.value);
            resultDiv.innerHTML = `<div class="result-content"><img src="${imageUrl}" loading="lazy" style="max-width:100%; border-radius:1rem;"/><div style="margin-top:20px;"><button class="download-btn" id="downloadImageBtn${prefix}"><i class="fas fa-download"></i> Download</button><button class="download-btn" id="downloadImageBtn2${prefix}" style="margin-left:10px;"><i class="fas fa-copy"></i> Copy Image</button></div></div>`;
            const downloadBtn = document.getElementById(`downloadImageBtn${prefix}`);
            if (downloadBtn) downloadBtn.onclick = () => window.downloadImage?.(imageUrl, `quote_card_${Date.now()}.png`);
            const copyBtn = document.getElementById(`downloadImageBtn2${prefix}`);
            if (copyBtn) {
                copyBtn.onclick = async () => {
                    try {
                        const response = await fetch(imageUrl);
                        const blob = await response.blob();
                        await navigator.clipboard.write([
                            new ClipboardItem({
                                [blob.type]: blob
                            })
                        ]);
                        window.showToast?.('Gambar berhasil disalin ke clipboard!', 'success');
                    } catch (err) {
                        window.showToast?.('Gagal menyalin gambar', 'error');
                    }
                };
            }
            hideGenerateLoading(loadingObj, true, version);
            window.showToast?.('Quote Card berhasil dibuat!', 'success');
            return;
        }
        
        const inputs = document.querySelectorAll(`#paramForm${prefix} input, #paramForm${prefix} textarea`);
        let params = {};
        inputs.forEach(inp => { if (inp.value.trim()) params[inp.name] = encodeURIComponent(inp.value.trim()); });
        
        const apiUrl = `${activeFormat.baseUrl}${activeFormat.endpoint}?${Object.entries(params).map(([k, v]) => `${k}=${v}`).join('&')}`;
        const response = await fetchWithRetry(apiUrl, { method: 'GET' });
        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        
        resultDiv.innerHTML = `<div class="result-content"><img src="${imageUrl}" loading="lazy" style="max-width:100%; border-radius:1rem;"/><div style="margin-top:20px;"><button class="download-btn" id="downloadImageBtn${prefix}"><i class="fas fa-download"></i> Download</button></div></div>`;
        const downloadBtn = document.getElementById(`downloadImageBtn${prefix}`);
        if (downloadBtn) downloadBtn.onclick = () => window.downloadImage?.(imageUrl, `${activeFormat.id}_mockup_${Date.now()}.png`);
        
        hideGenerateLoading(loadingObj, true, version);
        window.showToast?.('Mockup berhasil dibuat!', 'success');
    } catch (err) {
        resultDiv.innerHTML = `<div class="result-placeholder"><i class="fas fa-times-circle"></i><p>❌ Gagal: ${err.message}</p></div>`;
        hideGenerateLoading(loadingObj, false, version);
        window.showToast?.(err.message, 'error');
    }
}

// ========== SSWEB FUNCTIONS ==========
async function generateSSWeb() {
    const url = document.getElementById('sswebUrl')?.value;
    const device = document.getElementById('sswebDevice')?.value;
    const fullPage = document.getElementById('sswebFullPage')?.value;
    const scale = document.getElementById('sswebScale')?.value;
    
    if (!url || !device || !fullPage || !scale) {
        window.showToast?.('Lengkapi semua field', 'error');
        return;
    }
    
    const resultDiv = document.getElementById('sswebResultArea');
    const generateBtn = document.getElementById('sswebGenerateBtn');
    const loadingDiv = document.getElementById('sswebLoading');
    const loadingFill = document.getElementById('sswebProgressFill');
    const loadingPercent = document.getElementById('sswebProgressPercent');
    
    generateBtn.classList.add('hidden');
    loadingDiv.classList.remove('hidden');
    
    let progress = 0;
    const progressInterval = setInterval(() => {
        if (progress < 90) {
            progress += Math.random() * 15;
            if (progress > 90) progress = 90;
            loadingFill.style.width = progress + '%';
            loadingPercent.textContent = Math.floor(progress);
        }
    }, 200);
    
    const fullPageValue = fullPage === 'penuh' ? 'true' : 'false';
    const scaleValue = scale;
    const endpoints = [`https://api.zenzxz.my.id/tools/ssweb?url=${encodeURIComponent(url)}&device=${device}&full_page=${fullPageValue}&scale=${scaleValue}`];
    
    let imageUrl = null;
    for (const endpoint of endpoints) {
        try {
            const response = await fetch(endpoint);
            const blob = await response.blob();
            imageUrl = URL.createObjectURL(blob);
            break;
        } catch (err) { console.error(err); }
    }
    
    clearInterval(progressInterval);
    
    if (!imageUrl) {
        resultDiv.innerHTML = `<div class="result-placeholder"><i class="fas fa-times-circle"></i><p>Gagal mengambil screenshot</p></div>`;
        loadingDiv.classList.add('hidden');
        generateBtn.classList.remove('hidden');
        return;
    }
    
    loadingFill.style.width = '100%';
    loadingPercent.textContent = '100';
    setTimeout(() => {
        resultDiv.innerHTML = `<div class="result-content"><img src="${imageUrl}" loading="lazy" style="max-width:100%; border-radius:1rem;"/><div style="margin-top:20px;"><button class="download-btn" id="sswebDownloadBtn"><i class="fas fa-download"></i> Download</button></div></div>`;
        const downloadBtn = document.getElementById('sswebDownloadBtn');
        if (downloadBtn) downloadBtn.onclick = () => window.downloadImage?.(imageUrl, `screenshot_${Date.now()}.png`);
        loadingDiv.classList.add('hidden');
        generateBtn.classList.remove('hidden');
    }, 500);
    window.showToast?.('Screenshot berhasil!', 'success');
}

// ========== INFO & BERITA FUNCTIONS ==========
let currentBeritaSource = 'cnbc', currentGempaTab = 'auto', currentChannel = 'sctv';
const beritaSources = { cnbc: 'https://api.siputzx.my.id/api/berita/cnbcindonesia', liputan6: 'https://api.siputzx.my.id/api/berita/liputan6', tribun: 'https://api.siputzx.my.id/api/berita/tribunnews', sindonews: 'https://api.siputzx.my.id/api/berita/sindonews', kompas: 'https://api.siputzx.my.id/api/berita/kompas', merdeka: 'https://api.siputzx.my.id/api/berita/merdeka', cnn: 'https://api.siputzx.my.id/api/berita/cnn', antara: 'https://api.siputzx.my.id/api/berita/antara' };

function initInfoTabs() {
    const tabBtns = document.querySelectorAll('.info-tab-btn');
    const sections = { berita: document.getElementById('infoBerita'), gempa: document.getElementById('infoGempa'), cuaca: document.getElementById('infoCuaca'), jadwaltv: document.getElementById('infoJadwalTV') };
    tabBtns.forEach(btn => btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        Object.values(sections).forEach(s => s?.classList.remove('active-info'));
        if (sections[btn.dataset.info]) sections[btn.dataset.info].classList.add('active-info');
        if (btn.dataset.info === 'gempa') loadGempaData();
        if (btn.dataset.info === 'jadwaltv') loadJadwalTV(currentChannel);
    }));
}

function initBeritaSources() {
    document.querySelectorAll('.source-btn').forEach(btn => btn.addEventListener('click', () => {
        document.querySelectorAll('.source-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentBeritaSource = btn.dataset.source;
        loadBerita(currentBeritaSource);
    }));
}

async function loadBerita(source) {
    const container = document.getElementById('beritaContent');
    container.innerHTML = '<div class="loading-info">Memuat berita...</div>';
    try {
        const response = await fetch(beritaSources[source]);
        const data = await response.json();
        if (data.status && data.data) {
            container.innerHTML = data.data.slice(0, 20).map(a => `<div class="berita-item"><div class="berita-title"><a href="${a.link}" target="_blank">${a.title}</a></div><div class="berita-meta">${a.time || 'Baru saja'}</div></div>`).join('');
        }
    } catch (err) { container.innerHTML = '<div class="loading-info">Gagal memuat berita</div>'; }
}

function initGempaTabs() {
    document.querySelectorAll('.gempa-subtab').forEach(btn => btn.addEventListener('click', () => {
        document.querySelectorAll('.gempa-subtab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentGempaTab = btn.dataset.gempa;
        loadGempaData();
    }));
}

async function loadGempaData() {
    const container = document.getElementById('gempaContent');
    container.innerHTML = '<div class="loading-info">Memuat data gempa...</div>';
    try {
        const response = await fetch('https://api.siputzx.my.id/api/info/bmkg');
        const data = await response.json();
        if (data.status) {
            let gempaList = currentGempaTab === 'auto' ? (data.data.auto?.Infogempa?.gempa ? [data.data.auto.Infogempa.gempa] : []) : (data.data.dirasakan?.Infogempa?.gempa || []);
            container.innerHTML = gempaList.map(g => `<div class="gempa-item"><div class="gempa-lokasi">${g.Wilayah}</div><div class="gempa-magnitude">Magnitude: ${g.Magnitude}</div></div>`).join('');
        }
    } catch (err) { container.innerHTML = '<div class="loading-info">Gagal memuat gempa</div>'; }
}

async function loadCuaca(city) {
    const container = document.getElementById('cuacaContent');
    if (!city.trim()) return;
    container.innerHTML = '<div class="loading-info">Memuat cuaca...</div>';
    try {
        const response = await fetch(`https://api.siputzx.my.id/api/info/cuaca?q=${encodeURIComponent(city)}`);
        const data = await response.json();
        if (data.status && data.data?.weather?.[0]?.cuaca?.[0]?.[0]) {
            const w = data.data.weather[0].cuaca[0][0];
            container.innerHTML = `<div class="cuaca-item"><h3>${city}</h3><div class="cuaca-temp">${w.t}°C</div><div>${w.weather_desc}</div></div>`;
        }
    } catch (err) { container.innerHTML = '<div class="loading-info">Gagal memuat cuaca</div>'; }
}

function initTVChannels() {
    document.querySelectorAll('.channel-btn').forEach(btn => btn.addEventListener('click', () => {
        document.querySelectorAll('.channel-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentChannel = btn.dataset.channel;
        loadJadwalTV(currentChannel);
    }));
}

async function loadJadwalTV(channel) {
    const container = document.getElementById('jadwaltvContent');
    container.innerHTML = '<div class="loading-info">Memuat jadwal TV...</div>';
    try {
        const response = await fetch(`https://api.siputzx.my.id/api/info/jadwaltv?channel=${channel}`);
        const data = await response.json();
        if (data.status && data.data) {
            container.innerHTML = data.data.map(s => `<div class="tv-item"><div class="tv-jam">${s.jam}</div><div class="tv-acara">${s.acara}</div></div>`).join('');
        }
    } catch (err) { container.innerHTML = '<div class="loading-info">Gagal memuat jadwal TV</div>'; }
}

function initInfoPage() {
    initInfoTabs();
    initBeritaSources();
    initGempaTabs();
    initTVChannels();
    loadBerita('cnbc');
    document.getElementById('searchCuacaBtn')?.addEventListener('click', () => loadCuaca(document.getElementById('cuacaCity').value));
}

// ========== NAVIGATION ==========
function initNavigation() {
    const links = document.querySelectorAll('.nav-link');
    const pages = { home: document.getElementById('homePage'), ssweb: document.getElementById('sswebPage'), uploader: document.getElementById('uploaderPage'), info: document.getElementById('infoPage'), howto: document.getElementById('howtoPage'), guide: document.getElementById('guidePage'), docs: document.getElementById('docsPage') };
    
    function switchPage(pageId) {
        Object.values(pages).forEach(p => p?.classList.remove('active-page'));
        if (pages[pageId]) pages[pageId].classList.add('active-page');
        links.forEach(l => l.classList.remove('active'));
        document.querySelector(`.nav-link[data-page="${pageId}"]`)?.classList.add('active');
        window.scrollTo({ top: 0 });
        if (pageId === 'info') loadBerita(currentBeritaSource);
    }
    
    links.forEach(l => l.addEventListener('click', (e) => { e.preventDefault(); switchPage(l.dataset.page); document.getElementById('navMenu')?.classList.remove('active'); }));
    document.getElementById('navToggle')?.addEventListener('click', () => document.getElementById('navMenu')?.classList.toggle('active'));
    switchPage('home');
}

function switchMockupTab(version) {
    currentVersion = version;
    document.getElementById('tabV1Btn').classList.toggle('active', version === 'v1');
    document.getElementById('tabV2Btn').classList.toggle('active', version === 'v2');
    document.getElementById('mockupV1').classList.toggle('active-tab', version === 'v1');
    document.getElementById('mockupV2').classList.toggle('active-tab', version === 'v2');
    
    AppStoreState.selectedCategory = 'All';
    AppStoreState.searchQuery = '';
    AppStoreState.selectedFormat = null;
    AppStoreState.viewMode = 'grid';
    
    const searchInput = document.getElementById(`searchInput${version.toUpperCase()}`);
    if (searchInput) searchInput.value = '';
    
    if (version === 'v1') renderFormatGridV1();
    else renderFormatGridV2();
}

// ========== INIT ALL ==========
function initAll() {
    renderFormatGridV1();
    renderParamFormV1();
    renderFormatGridV2();
    renderParamFormV2();
    initNavigation();
    initInfoPage();
    
    document.getElementById('sswebGenerateBtn')?.addEventListener('click', generateSSWeb);
    document.getElementById('imgUploadBtn')?.addEventListener('click', uploadImg);
    document.getElementById('vidUploadBtn')?.addEventListener('click', uploadVid);
    document.getElementById('audUploadBtn')?.addEventListener('click', uploadAud);
    document.querySelectorAll('.copy-btn').forEach(btn => btn.addEventListener('click', () => copyUrl(btn.dataset.copy)));
}

// Keyboard shortcut
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const activeSearch = document.getElementById(`searchInput${currentVersion.toUpperCase()}`);
        if (activeSearch) { activeSearch.focus(); activeSearch.select(); }
    }
});

// Start
document.addEventListener('DOMContentLoaded', () => {
    checkVerification();
    document.getElementById('followBtn')?.addEventListener('click', followSaluran);
    document.getElementById('shareBtn')?.addEventListener('click', shareWA);
    document.getElementById('tabV1Btn')?.addEventListener('click', () => switchMockupTab('v1'));
    document.getElementById('tabV2Btn')?.addEventListener('click', () => switchMockupTab('v2'));
});