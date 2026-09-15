const fs = require('fs');
const https = require('https');
const path = require('path');

async function download(url, dest) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.statusText}`);
    const buffer = await res.arrayBuffer();
    fs.writeFileSync(dest, Buffer.from(buffer));
}

async function main() {
    // 1. Download images
    const imgDir = path.join('public', 'img');
    if (!fs.existsSync(imgDir)) {
        fs.mkdirSync(imgDir, { recursive: true });
    }
    
    const url1 = "https://lh3.googleusercontent.com/aida-public/AB6AXuAqukM5DDD0MJQIrfbH2Ro50VyZq2jMnzE3wzavs13lU280uLp9IQWMyhFdZBi7IkaJMhfTsNdtLnLmigP8W75iK5hhXhru3iPsXT6TmSu9JsVN9OFZ_zs8YvOrvl0ebLLz8fwhBze4H1d_303O73J9nU30SieoNyeD4TUUZ0ANVydArAAE261GLoWyX4xwgIMli6moc88GuL2p0UCFfb2N9Zi1_YsuYhK5WdoFqNrt5Pepogf1JIJFqbwLIoUFuHTvKQ";
    const url2 = "https://lh3.googleusercontent.com/aida-public/AB6AXuDy5Yr528m1EwtjgnjRz84-zIVCfQ4ZDIH69rZMmUzdqRXv5bg_-SBjwyuL6k0FIW8PDIt1dsjw5YUOrOyoXe40j1BLiDftfg6NABDBOHJnoD-TPoC3v0Ww30nv5dv3pklqVEzFcYR0ZVhuNhF8HLfrpxeYuwKzKptumlnqOYBzAgT-0wz3dHUC8aP7huvJjriqcfOCiXkpxNrM8-4ccOiUKZB5AB_1HXbnzjO_-9JF66tLNBhYV8ggmw8HPqZe38hBHw";
    
    await download(url1, path.join(imgDir, 'logo-digital-drift.png'));
    await download(url2, path.join(imgDir, 'logo-digital-drift-footer.png'));
    console.log("Images downloaded.");

    // 2. Read App.jsx
    let appContent = fs.readFileSync('src/App.jsx', 'utf8');

    // Replace image URLs
    appContent = appContent.replace(url1, "/img/logo-digital-drift.png");
    appContent = appContent.replace(url2, "/img/logo-digital-drift-footer.png");

    // Replace global WhatsApp links
    const oldWaLink = "https://wa.me/?text=Hola%20Nexus%20Digital";
    const newWaLink = "https://wa.me/584125063754?text=Hola%20Digital%20Drift";
    appContent = appContent.split(oldWaLink).join(newWaLink);
    
    // Also replace the "Consultar Ahora" header button
    // It currently has href="#contacto"
    // Let's replace href="#contacto" in the header button with the newWaLink
    appContent = appContent.replace(
        `href="#contacto">Consultar Ahora</a>`,
        `href="${newWaLink},%20quiero%20consultar%20sobre%20sus%20servicios" target="_blank" rel="noopener noreferrer">Consultar Ahora</a>`
    );

    // 3. Update Demos
    // We will use placeholders for the Vercel URLs
    
    // Industria
    appContent = appContent.replace(
        `href="https://wa.me/?text=Hola%20Nexus%20Digital,%20me%20interesa%20ver%20la%20demo%20de%20Industria%20y%20Construcción." target="_blank"`,
        `href="https://demo-servinteca.vercel.app" target="_blank"`
    );
    
    // Gastronomía
    appContent = appContent.replace(
        `href="https://wa.me/?text=Hola%20Nexus%20Digital,%20me%20interesa%20ver%20la%20demo%20de%20Gastronomía%20y%20Delivery." target="_blank"`,
        `href="https://demo-hamburguesas.vercel.app" target="_blank"`
    );
    
    // Retail
    appContent = appContent.replace(
        `href="https://wa.me/?text=Hola%20Nexus%20Digital,%20me%20interesa%20ver%20la%20demo%20de%20Comercio%20y%20Retail." target="_blank"`,
        `href="https://demo-zapatos.vercel.app" target="_blank"`
    );
    
    // Salud
    appContent = appContent.replace(
        `href="https://wa.me/?text=Hola%20Nexus%20Digital,%20me%20interesa%20ver%20la%20demo%20de%20Clínicas%20y%20Salud." target="_blank"`,
        `href="https://wa.me/584125063754?text=Hola%20Digital%20Drift,%20quiero%20ver%20la%20demo%20médica%20privada" target="_blank"`
    );

    // Update Footer date to 2026
    appContent = appContent.replace(`© 2025 Digital Drift`, `© 2026 Digital Drift`);
    
    fs.writeFileSync('src/App.jsx', appContent);
    console.log("App.jsx updated.");

    // 4. Update index.html Title
    let htmlContent = fs.readFileSync('index.html', 'utf8');
    htmlContent = htmlContent.replace(/<title>.*?<\/title>/, `<title>Digital Drift | Desarrollo Web B2B & Captación por WhatsApp.</title>`);
    fs.writeFileSync('index.html', htmlContent);
    console.log("index.html updated.");
}

main().catch(console.error);
