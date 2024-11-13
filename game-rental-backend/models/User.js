const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  contactNumber: { type: String, required: true },
  userType: { type: String, required: true, enum: ['Gamer', 'Seller'] },
  wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  cart: [{
    product:  { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    count: Number,
    bookingStartDate: Date,
    bookingEndDate: Date,
    rentedAtPrice: String
  }]
});

module.exports = mongoose.model('User', userSchema);
