const express = require('express');
const cors = require('cors');

app = express();
app.use(express.json());

app.use('/api', require('./src/routes/usuario.router'));

const server = app.listen(3000);

console.log('Servidor Express iniciado na porta %s', server.address().port);
console.log('NODE ENV: ', process.env.NODE_ENV);
