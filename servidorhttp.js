const express = require('express');
const path = require('path');

const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, 'public')));

//app.

app.get('/baunilha', (req, res) => {
    res.sendFile(path.join(__dirname, 'public' ,'index3.html'));
});

app.get('/teste', (req, res) => {
    res.sendFile(path.join(__dirname, 'public' ,'sobre.html'));
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://127.0.0.1:${port}`);
});

