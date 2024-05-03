const express = require('express');
const routes = express.Router();
const { rollDice } = require('../controllers/random.js');


routes.get('/', rollDice);

module.exports = routes