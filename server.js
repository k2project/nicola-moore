const next = require('next');
const express = require('express');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    // Heroku terminates TLS at its router and sets X-Forwarded-Proto;
    // redirect plain HTTP to HTTPS (skipped locally when the header is absent).
    server.set('trust proxy', true);
    if (!dev) {
        server.use((req, res, nextMiddleware) => {
            const proto = req.headers['x-forwarded-proto'];
            if (!proto || req.secure) return nextMiddleware();
            res.redirect(301, `https://${req.headers.host}${req.originalUrl}`);
        });
    }

    server.use((req, res) => handle(req, res));

    server.listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});
