const mongoose = require('mongoose');

const livroSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
    trim: true
  },
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Autor',
    required: true
  },
  isbn: {
    type: String,
    unique: true,
    sparse: true,
    trim: true
  },
  anoPublicacao: {
    type: Number
  },
  editora: {
    type: String,
    trim: true
  },
  genero: {
    type: String,
    trim: true
  },
  numeroPaginas: {
    type: Number
  },
  descricao: {
    type: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Livro', livroSchema);
