const express = require('express');
const router = express.Router();
const CD = require('../models/CD');
const auth = require('../middleware/auth');


router.get('/', async (req, res) => {
  try {
    const cds = await CD.find().populate('artista', 'nome').sort({ titulo: 1 });
    res.json(cds);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar CDs' });
  }
});


router.get('/:id', async (req, res) => {
  try {
    const cd = await CD.findById(req.params.id).populate('artista');
    
    if (!cd) {
      return res.status(404).json({ message: 'CD não encontrado' });
    }
    
    res.json(cd);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar CD' });
  }
});


router.post('/', auth, async (req, res) => {
  try {
    const cd = new CD(req.body);
    await cd.save();
    await cd.populate('artista');
    res.status(201).json(cd);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Erro ao criar CD', error: error.message });
  }
});


router.put('/:id', auth, async (req, res) => {
  try {
    const cd = await CD.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('artista');
    
    if (!cd) {
      return res.status(404).json({ message: 'CD não encontrado' });
    }
    
    res.json(cd);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Erro ao atualizar CD', error: error.message });
  }
});


router.delete('/:id', auth, async (req, res) => {
  try {
    const cd = await CD.findByIdAndDelete(req.params.id);
    
    if (!cd) {
      return res.status(404).json({ message: 'CD não encontrado' });
    }
    
    res.json({ message: 'CD deletado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao deletar CD' });
  }
});

module.exports = router;
