const mongoose = require('mongoose');

const cdSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
    trim: true
  },
  artista: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Autor',
    required: true
  },
  anoLancamento: {
    type: Number
  },
  gravadora: {
    type: String,
    trim: true
  },
  generoMusical: {
    type: String,
    trim: true
  },
  numeroFaixas: {
    type: Number,
    min: 0
  },
  duracao: {
    type: Number, 
    min: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('CD', cdSchema);
