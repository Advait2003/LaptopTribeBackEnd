const Laptop = require('../models/Laptops');

// Add a laptop
const addLaptop = async (req, res) => {
  const { brand, model, ram, storage, processor } = req.body;

  try {
    const newLaptop = new Laptop({
      brand,
      model,
      ram,
      storage,
      processor,
    });

    const savedLaptop = await newLaptop.save();
    res.status(201).json(savedLaptop);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all laptops
const getLaptops = async (req, res) => {
  try {
    const laptops = await Laptop.find();
    res.status(200).json(laptops);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { addLaptop, getLaptops };
