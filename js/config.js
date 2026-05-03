// ========== QUICKFAKE PRO CONFIGURATION ==========

const CONFIG = {
    // API Configuration
    API: {
        BASE_URL: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
            ? 'http://localhost:3000/api'
            : '/api',
        TIMEOUT: 25000,
        MAX_RETRIES: 3,
        RETRY_DELAY: 1000
    },
    
    // Mockup Formats V1
    FORMATS_V1: [
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
        { id: 'ytcommunity', name: 'YT Community', icon: 'fab fa-youtube', endpoint: '/maker/fakeytcomunity', baseUrl: 'https://api.zenzxz.my.id', params: [{ name: 'avatar', label: 'URL Avatar', type: 'url' }, { name: 'content', label: 'URL Konten', type: 'url' }, { name: 'username', label: 'Username', type: 'text' }, { name: 'desc', label: 'Deskripsi', type: 'text' }, { name: 'like', label: 'Like', type: 'text' }, { name: 'comment', label: 'Comment', type: 'text' }] }
    ],
    
    // Mockup Formats V2
    FORMATS_V2: [
        { id: 'goodbye', name: 'Goodbye V1', icon: 'fas fa-sign-out-alt', endpoint: '/api/canvas/goodbyev1', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'username', label: 'Username', type: 'text' }, { name: 'guildName', label: 'Nama Guild', type: 'text' }, { name: 'guildIcon', label: 'URL Icon Guild', type: 'url' }, { name: 'memberCount', label: 'Jumlah Member', type: 'text' }, { name: 'avatar', label: 'URL Avatar', type: 'url' }, { name: 'background', label: 'URL Background', type: 'url' }, { name: 'quality', label: 'Kualitas (1-100)', type: 'text' }] },
        { id: 'welcome', name: 'Welcome V1', icon: 'fas fa-sign-in-alt', endpoint: '/api/canvas/welcomev1', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'username', label: 'Username', type: 'text' }, { name: 'guildName', label: 'Nama Guild', type: 'text' }, { name: 'guildIcon', label: 'URL Icon Guild', type: 'url' }, { name: 'memberCount', label: 'Jumlah Member', type: 'text' }, { name: 'avatar', label: 'URL Avatar', type: 'url' }, { name: 'background', label: 'URL Background', type: 'url' }, { name: 'quality', label: 'Kualitas (1-100)', type: 'text' }] },
        { id: 'spotify', name: 'Spotify Card', icon: 'fab fa-spotify', endpoint: '/api/canvas/spotify', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'title', label: 'Judul Lagu', type: 'text' }, { name: 'artist', label: 'Artis', type: 'text' }, { name: 'image', label: 'URL Gambar', type: 'url' }, { name: 'border', label: 'Warna Border', type: 'text' }, { name: 'album', label: 'Nama Album', type: 'text' }] },
        { id: 'gay', name: 'Gay Image', icon: 'fas fa-rainbow', endpoint: '/api/canvas/gay', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'nama', label: 'Nama', type: 'text' }, { name: 'avatar', label: 'URL Avatar', type: 'url' }, { name: 'num', label: 'Angka', type: 'text' }] },
        { id: 'profilecard', name: 'Profile Card', icon: 'fas fa-id-card', endpoint: '/api/canvas/profile', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'backgroundURL', label: 'URL Background', type: 'url' }, { name: 'avatarURL', label: 'URL Avatar', type: 'url' }, { name: 'rankName', label: 'Nama Rank', type: 'text' }, { name: 'rankId', label: 'ID Rank', type: 'text' }, { name: 'exp', label: 'EXP', type: 'text' }, { name: 'requireExp', label: 'EXP Required', type: 'text' }, { name: 'level', label: 'Level', type: 'text' }, { name: 'name', label: 'Nama', type: 'text' }] },
        { id: 'captcha', name: 'Captcha Image', icon: 'fas fa-shield-alt', endpoint: '/api/canvas/captcha', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'background', label: 'URL Background', type: 'url' }, { name: 'captchaKey', label: 'Kode Captcha', type: 'text' }, { name: 'border', label: 'Warna Border', type: 'text' }, { name: 'overlayOpacity', label: 'Opacity Overlay', type: 'text' }] },
        { id: 'beautiful', name: 'Beautiful Image', icon: 'fas fa-star', endpoint: '/api/canvas/beautiful', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'image', label: 'URL Gambar', type: 'url' }] },
        { id: 'sertifikat', name: 'Sertifikat Tolol', icon: 'fas fa-scroll', endpoint: '/api/canvas/sertifikat-tolol', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'text', label: 'Teks', type: 'text' }] },
        { id: 'ektp', name: 'eKTP Generator', icon: 'fas fa-id-card', endpoint: '/api/canvas/ektp', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'provinsi', label: 'Provinsi', type: 'text' }, { name: 'kota', label: 'Kota', type: 'text' }, { name: 'nik', label: 'NIK', type: 'text' }, { name: 'nama', label: 'Nama', type: 'text' }, { name: 'ttl', label: 'Tempat/Tgl Lahir', type: 'text' }, { name: 'jenis_kelamin', label: 'Jenis Kelamin', type: 'text' }, { name: 'golongan_darah', label: 'Golongan Darah', type: 'text' }, { name: 'alamat', label: 'Alamat', type: 'textarea' }, { name: 'rt/rw', label: 'RT/RW', type: 'text' }, { name: 'kel/desa', label: 'Kelurahan/Desa', type: 'text' }, { name: 'kecamatan', label: 'Kecamatan', type: 'text' }, { name: 'agama', label: 'Agama', type: 'text' }, { name: 'status', label: 'Status Perkawinan', type: 'text' }, { name: 'pekerjaan', label: 'Pekerjaan', type: 'text' }, { name: 'kewarganegaraan', label: 'Kewarganegaraan', type: 'text' }, { name: 'masa_berlaku', label: 'Masa Berlaku', type: 'text' }, { name: 'terbuat', label: 'Tanggal Terbuat', type: 'text' }, { name: 'pas_photo', label: 'URL Pas Photo', type: 'url' }] },
        { id: 'levelup', name: 'Level Up Card', icon: 'fas fa-level-up-alt', endpoint: '/api/canvas/level-up', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'backgroundURL', label: 'URL Background', type: 'url' }, { name: 'avatarURL', label: 'URL Avatar', type: 'url' }, { name: 'fromLevel', label: 'Dari Level', type: 'text' }, { name: 'toLevel', label: 'Ke Level', type: 'text' }, { name: 'name', label: 'Nama', type: 'text' }] },
        { id: 'security', name: 'Security Card', icon: 'fas fa-shield-virus', endpoint: '/api/canvas/security', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'avatar', label: 'URL Avatar', type: 'url' }, { name: 'background', label: 'URL Background', type: 'url' }, { name: 'createdTimestamp', label: 'Created Timestamp', type: 'text' }, { name: 'suspectTimestamp', label: 'Suspect Timestamp', type: 'text' }, { name: 'locale', label: 'Locale', type: 'text' }] },
        { id: 'greyscale', name: 'Greyscale Image', icon: 'fas fa-adjust', endpoint: '/api/canvas/greyscale', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'image', label: 'URL Gambar', type: 'url' }] },
        { id: 'invert', name: 'Invert Image', icon: 'fas fa-eye-dropper', endpoint: '/api/canvas/invert', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'image', label: 'URL Gambar', type: 'url' }] },
        { id: 'blur', name: 'Blur Image Effect', icon: 'fas fa-blur', endpoint: '/api/canvas/blur', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'image', label: 'URL Gambar', type: 'url' }] },
        { id: 'affect', name: 'Affect Image', icon: 'fas fa-face-smile', endpoint: '/api/canvas/affect', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'image', label: 'URL Gambar', type: 'url' }] },
        { id: 'delete', name: 'Delete Image', icon: 'fas fa-trash-alt', endpoint: '/api/canvas/delete', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'image', label: 'URL Gambar', type: 'url' }] },
        { id: 'facepalm', name: 'Facepalm Image', icon: 'fas fa-facepalm', endpoint: '/api/canvas/facepalm', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'image', label: 'URL Gambar', type: 'url' }] },
        { id: 'kiss', name: 'Kiss Image', icon: 'fas fa-kiss-wink-heart', endpoint: '/api/canvas/kiss', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'image1', label: 'URL Gambar 1', type: 'url' }, { name: 'image2', label: 'URL Gambar 2', type: 'url' }] },
        { id: 'batslap', name: 'Batslap Image', icon: 'fas fa-hand-back-fist', endpoint: '/api/canvas/batslap', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'image1', label: 'URL Gambar 1', type: 'url' }, { name: 'image2', label: 'URL Gambar 2', type: 'url' }] },
        { id: 'ship', name: 'Ship Image', icon: 'fas fa-heart', endpoint: '/api/canvas/ship', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'avatar1', label: 'URL Avatar 1', type: 'url' }, { name: 'avatar2', label: 'URL Avatar 2', type: 'url' }, { name: 'background', label: 'URL Background (Opsional)', type: 'url' }, { name: 'persen', label: 'Persentase (%)', type: 'text' }] },
        { id: 'quote', name: 'Quote/Reminder Card', icon: 'fas fa-quote-right', endpoint: '/api/canvas/quote', baseUrl: 'https://api.siputzx.my.id', isQuoteCard: true, params: [{ name: 'text', label: 'Teks Quote', type: 'textarea' }, { name: 'author', label: 'Nama Penulis/Sumber', type: 'text' }, { name: 'bgUrl', label: 'URL Background (Opsional)', type: 'url' }, { name: 'fontUrl', label: 'URL Font (Opsional)', type: 'url' }] },
        { id: 'random_waifu', name: 'Random Waifu', icon: 'fas fa-dice-d6', endpoint: '/sfw/waifu', baseUrl: 'https://api.waifu.pics', params: [], isRandom: true, useWaifuPics: true },
        { id: 'random_neko', name: 'Random Anime Neko', icon: 'fas fa-dice-d6', endpoint: '/api/v2/neko', baseUrl: 'https://nekos.best', params: [], isRandom: true, useNekosBest: true }
    ],
    
    // TV Channels
    TV_CHANNELS: [
        'sctv', 'rcti', 'antv', 'indosiar', 'gtrans', 'trans7', 
        'transtv', 'metrotv', 'tvone', 'kompastv', 'inews', 'mnc'
    ],
    
    // Berita Sources
    BERITA_SOURCES: {
        cnbc: 'CNBC Indonesia',
        liputan6: 'Liputan6',
        tribun: 'Tribunnews',
        sindonews: 'Sindonews',
        kompas: 'Kompas',
        merdeka: 'Merdeka',
        cnn: 'CNN Indonesia',
        antara: 'Antara News'
    },
    
    // UI Configuration
    UI: {
        TOAST_DURATION: 3000,
        LOADING_STEPS: [
            { text: '🎨 Loading features...', progress: 20 },
            { text: '⚡ Connecting to API...', progress: 40 },
            { text: '✨ Preparing v1 & v2...', progress: 60 },
            { text: '📸 Adding SSWeb...', progress: 80 },
            { text: '🎉 Welcome to QuickFake!', progress: 100 }
        ]
    },
    
    // Verification
    VERIFICATION: {
        CHANNEL_URL: 'https://whatsapp.com/channel/0029VaLiUSS5q08hPj5mcH0m',
        STORAGE_KEY: 'quickfake_verified'
    }
};

// Export untuk penggunaan
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else {
    window.QUICKFAKE_CONFIG = CONFIG;
}