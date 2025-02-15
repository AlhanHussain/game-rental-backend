const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  thumbnailURL: { type: String, required: true },
  sellerUsername: { type: String, required: true },
  unitsAvailable: { type: Number, required: true },
  productType: { type: String, required: true, enum: ['game', 'controller', 'console'] },
  productImages: [String],
  rentalPricePerWeek: { type: Number, required: true },
  rentalPricePerMonth:  { type: Number, required: true }
});

module.exports = mongoose.model('Product', productSchema);
