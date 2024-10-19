
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, 'index.html'); // Caminho para o index.html

    // Verifica se a URL é para o JavaScript
    if (req.url === '/app.js') {
        filePath = path.join(__dirname, 'app.js'); // Caminho para o app.js
        res.setHeader('Content-Type', 'application/javascript'); // Define o tipo do conteúdo
    } else {
        res.setHeader('Content-Type', 'text/html'); // Define como HTML
    }

    // Lê o arquivo e o envia como resposta
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404);
            res.end('Arquivo não encontrado');
        } else {
            res.writeHead(200);
            res.end(content);
        }
    });
});

// O servidor escuta na porta 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
