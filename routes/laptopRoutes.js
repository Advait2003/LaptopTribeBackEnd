const express = require('express');
const { addLaptop, getLaptops } = require('../controllers/laptopController');

const router = express.Router();

// Route for adding a laptop
router.post('/laptops', addLaptop);

// Route for getting all laptops
router.get('/laptops', getLaptops);

module.exports = router;
