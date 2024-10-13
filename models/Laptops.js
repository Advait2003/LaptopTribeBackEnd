const mongoose = require('mongoose');

const laptopSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  ram: {
    type: String,
    required: true,
  },
  storage: {
    type: String,
    required: true,
  },
  processor: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Laptop', laptopSchema);
