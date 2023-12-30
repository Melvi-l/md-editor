const http = require('http');

const server = http.createServer((req, res) => {
    console.log("HHAAA")
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Raspberry work !');
});

const PORT = 8080;
const HOST = '0.0.0.0';

server.listen(PORT, HOST, () => {
    console.log(`Serveur lancé sur http://192.168.0.243:${PORT}/`);
});
