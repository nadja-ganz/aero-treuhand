// Prevent indexing on Netlify preview domains
if (window.location.hostname.includes('netlify.app')) {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);
}
