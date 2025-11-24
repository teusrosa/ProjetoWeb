const express = require('express');
const router = express.Router();
const DVD = require('../models/DVD');
const auth = require('../middleware/auth');


router.get('/', async (req, res) => {
  try {
    const dvds = await DVD.find().populate('diretor', 'nome').sort({ titulo: 1 });
    res.json(dvds);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar DVDs' });
  }
});


router.get('/:id', async (req, res) => {
  try {
    const dvd = await DVD.findById(req.params.id).populate('diretor');
    
    if (!dvd) {
      return res.status(404).json({ message: 'DVD não encontrado' });
    }
    
    res.json(dvd);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar DVD' });
  }
});


router.post('/', auth, async (req, res) => {
  try {
    const dvd = new DVD(req.body);
    await dvd.save();
    await dvd.populate('diretor');
    res.status(201).json(dvd);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Erro ao criar DVD', error: error.message });
  }
});


router.put('/:id', auth, async (req, res) => {
  try {
    const dvd = await DVD.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('diretor');
    
    if (!dvd) {
      return res.status(404).json({ message: 'DVD não encontrado' });
    }
    
    res.json(dvd);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Erro ao atualizar DVD', error: error.message });
  }
});


router.delete('/:id', auth, async (req, res) => {
  try {
    const dvd = await DVD.findByIdAndDelete(req.params.id);
    
    if (!dvd) {
      return res.status(404).json({ message: 'DVD não encontrado' });
    }
    
    res.json({ message: 'DVD deletado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao deletar DVD' });
  }
});

module.exports = router;
