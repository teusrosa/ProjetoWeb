const mongoose = require('mongoose');

const dvdSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
    trim: true
  },
  diretor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Autor',
    required: true
  },
  anoLancamento: {
    type: Number
  },
  genero: {
    type: String,
    trim: true
  },
  duracao: {
    type: Number, 
    min: 0
  },
  classificacao: {
    type: String,
    trim: true
  },
  sinopse: {
    type: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('DVD', dvdSchema);
