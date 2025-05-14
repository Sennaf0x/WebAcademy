const http = require('http');
const fs = require('fs');
const path = require('path');
const dotenv = require("dotenv");

dotenv.config()

const PORT = process.env.PORT

const dirPath = process.argv[2];
const server = http.createServer((req, res) => {
  
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Erro ao ler o diretório: ' + err.message);
            return;
        }

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Lista do diretorio</h1>');
        res.write('<ul>');
        files.forEach((file) => {
            res.write('<li>' + file + '</li>');
        });
        res.write('</ul>');
        res.end();
    });
});

// O servidor escuta na porta 3000
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});