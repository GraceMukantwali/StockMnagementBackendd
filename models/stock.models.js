const { string, number } = require('joi');
const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    stockName: {
        type: string,
        required: true,
        unique: [true, "$stock name is required!"],
        trim: true,
    },
    date: {
        type: String,
        required: [true,"date is required"],
        unique:true
    },
    id: {
        type: number,
        required: [true, "id is required"],
        unique: true,
    },
    price:{
        type: Number,
        required: [true, "price is required"],
        
    },
    enum: {
        value: ["male","female","prefer not say"],
        message:"{value} is not recognized  as valid grenger"

    },

    quantity: {
        type: String,
        required: [true, "quantity is required"],
        
    },

    stock: {
        type: Schema.type.objectId,
        ref: "stock"
       
    }

});


  module.exports = mongoose.module ('stock',stockSchema );
  