const mongoose = require('mongoose');

const autorSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    trim: true
  },
  biografia: {
    type: String,
    trim: true
  },
  dataNascimento: {
    type: Date
  },
  nacionalidade: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Autor', autorSchema);


