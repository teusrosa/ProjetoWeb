const express = require('express');
const router = express.Router();
const Livro = require('../models/Livro');
const auth = require('../middleware/auth');


router.get('/', async (req, res) => {
  try {
    const livros = await Livro.find().populate('autor', 'nome').sort({ titulo: 1 });
    res.json(livros);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar livros' });
  }
});


router.get('/:id', async (req, res) => {
  try {
    const livro = await Livro.findById(req.params.id).populate('autor');
    
    if (!livro) {
      return res.status(404).json({ message: 'Livro não encontrado' });
    }
    
    res.json(livro);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar livro' });
  }
});


router.post('/', auth, async (req, res) => {
  try {
    const livro = new Livro(req.body);
    await livro.save();
    await livro.populate('autor');
    res.status(201).json(livro);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Erro ao criar livro', error: error.message });
  }
});


router.put('/:id', auth, async (req, res) => {
  try {
    const livro = await Livro.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('autor');
    
    if (!livro) {
      return res.status(404).json({ message: 'Livro não encontrado' });
    }
    
    res.json(livro);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Erro ao atualizar livro', error: error.message });
  }
});


router.delete('/:id', auth, async (req, res) => {
  try {
    const livro = await Livro.findByIdAndDelete(req.params.id);
    
    if (!livro) {
      return res.status(404).json({ message: 'Livro não encontrado' });
    }
    
    res.json({ message: 'Livro deletado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao deletar livro' });
  }
});

module.exports = router;
