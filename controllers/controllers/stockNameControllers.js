const stockModel = require('../models/stock.models');

const record = async (req, res, next) => {
    try {
        var recordedStock = await stock
        res.status(2001).json({
        Message: "stock: recorde"
        stock: recordedStock,

        });
    } catch (error); {
        res.status(500).send('server:' error);
    }
}
const list = (req, res, next) => {

}
const remove = (req, res, next) => {

}

const update = (req, res, next) => {

}
const findById = (req, res, next) => {

}
const findByDate = (req, res, next) => {

}
module.exports = {
    findById, finfByDate, list, remove, record, update
}