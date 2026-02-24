const express = require('express');
const router = express.Router();
const Example = require('../models/Example');

// GET all examples
router.get('/', async (req, res) => {
  try {
    const examples = await Example.find();
    res.json(examples);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET one example
router.get('/:id', async (req, res) => {
  try {
    const example = await Example.findById(req.params.id);
    if (!example) {
      return res.status(404).json({ message: 'Example not found' });
    }
    res.json(example);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST create example
router.post('/', async (req, res) => {
  const example = new Example({
    name: req.body.name,
    description: req.body.description
  });

  try {
    const newExample = await example.save();
    res.status(201).json(newExample);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT update example
router.put('/:id', async (req, res) => {
  try {
    const example = await Example.findById(req.params.id);
    if (!example) {
      return res.status(404).json({ message: 'Example not found' });
    }

    if (req.body.name) example.name = req.body.name;
    if (req.body.description) example.description = req.body.description;

    const updatedExample = await example.save();
    res.json(updatedExample);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE example
router.delete('/:id', async (req, res) => {
  try {
    const example = await Example.findById(req.params.id);
    if (!example) {
      return res.status(404).json({ message: 'Example not found' });
    }

    await example.deleteOne();
    res.json({ message: 'Example deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
