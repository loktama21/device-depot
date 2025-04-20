// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name:        { type: String, required: true },
  description: { type: String },
  price:       { type: Number, required: true },
  imageUrl:    { type: String },
  category:    {
    type: String,
    required: true,
    enum: ['laptop', 'sound system', 'others']
  }
});

module.exports = mongoose.model('Product', productSchema);
