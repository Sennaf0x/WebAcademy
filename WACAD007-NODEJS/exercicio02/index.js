// index.mjs
import http from 'http';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { createLink } from './link.mjs'; 


dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const PORT = process.env.PORT;
const dirPath = process.argv[2];

const server = http.createServer((req, res) => {
    const requestedUrl = req.url;
    console.log(requestedUrl);

    if (requestedUrl === '/') {
        fs.readdir(dirPath, (err, files) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Erro ao ler o diretório: ' + err.message);
                return;
            }

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('<h1>Lista do diretório</h1>');
            res.write('<ul>');
            files.forEach((file) => {
                res.write('<li>' + createLink(file) + '</li>');
            });
            res.write('</ul>');
            res.end();
        });
    } else {
        const fileName = decodeURIComponent(requestedUrl.slice(1));
        const filePath = path.join(dirPath, fileName);

        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('Arquivo não encontrado: ' + fileName);
                return;
            }

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(`<h1>${fileName}</h1>`);
            res.write(`<pre>${data}</pre>`);
            res.write(`<br><a href="/">Voltar</a>`);
            res.end();
        });
    }
});

server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});