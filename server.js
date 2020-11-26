const next = require('next');
const express = require('express');
// const sslRedirect = require('heroku-ssl-redirect').default;
const secure = require('express-force-https');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // redirect to SSL
  // server.use(sslRedirect());
  app.use(secure);

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});