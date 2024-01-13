const express = require('express');
const stockRoutes = required('./stock.routes');
const allRautes = express();

allRauters.use('/stock',stockRoutes);

module.exports = allRautes;