const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
require('dotenv').config();

const app = express();


connectDB();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'));


app.use('/api/auth', require('./routes/auth'));
app.use('/api/autores', require('./routes/autores'));
app.use('/api/livros', require('./routes/livros'));
app.use('/api/dvds', require('./routes/dvds'));
app.use('/api/cds', require('./routes/cds'));


app.get('/api', (req, res) => {
  res.json({
    message: 'API do Projeto Web - Sistema de Gerenciamento',
    endpoints: {
      auth: '/api/auth',
      autores: '/api/autores',
      livros: '/api/livros',
      dvds: '/api/dvds',
      cds: '/api/cds'
    }
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Acesse: http://localhost:${PORT}`);
});
