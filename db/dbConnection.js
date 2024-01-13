

const mongoose = require('mongoose');
const connectTodb = () => {
    return mongoose.connect(process.env.MONGODB-URL);
}
module.exports = connectTodb;