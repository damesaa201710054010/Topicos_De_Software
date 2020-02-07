const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({
    name: {type: String, required:true},
    productId: {type: Number, required: true},
    price: {type: Number, required: true},
    avaible: {type: Number, required: true},
    description: {type: String}
});

module.exports = mongoose.model('product', productSchema);