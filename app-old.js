const http = require('http');

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const salid = {
      nombre: 'fernando',
      edad: 23,
      url: req.url
    };
    res.write(JSON.stringify(salid));
    res.end();
  })
  .listen(3000);

console.log('entrando  al puerto 3000');
