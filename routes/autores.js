const express = require('express');
const router = express.Router();
const Autor = require('../models/Autor');
const auth = require('../middleware/auth');

//PESQUISAS SOBRE AUTORES
router.get('/', async (req, res) => {
  try {
    const autores = await Autor.find().sort({ nome: 1 });
    res.json(autores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar autores' });
  }
});


router.get('/:id', async (req, res) => {
  try {
    const autor = await Autor.findById(req.params.id);
    
    if (!autor) {
      return res.status(404).json({ message: 'Autor não encontrado' });
    }
    
    res.json(autor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar autor' });
  }
});


router.post('/', auth, async (req, res) => {
  try {
    const autor = new Autor(req.body);
    await autor.save();
    res.status(201).json(autor);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Erro ao criar autor', error: error.message });
  }
});


router.put('/:id', auth, async (req, res) => {
  try {
    const autor = await Autor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!autor) {
      return res.status(404).json({ message: 'Autor não encontrado' });
    }
    
    res.json(autor);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Erro ao atualizar autor', error: error.message });
  }
});


router.delete('/:id', auth, async (req, res) => {
  try {
    const autor = await Autor.findByIdAndDelete(req.params.id);
    
    if (!autor) {
      return res.status(404).json({ message: 'Autor não encontrado' });
    }
    
    res.json({ message: 'Autor deletado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao deletar autor' });
  }
});

module.exports = router;
