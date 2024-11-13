const Order = require('../models/Order');
const User = require('../models/User');
const Product = require('../models/Product');

exports.saveRemoveWishlist = async (req, res) => {
  const { userID, productID } = req.body;

  try {
    const user = await User.findById(userID);
    if (!user) return res.status(404).json({ message: 'User Not Found' });

    const productIndex = user.wishlist.indexOf(productID);
    if (productIndex === -1) {
      user.wishlist.push(productID);
    } else {
      user.wishlist.splice(productIndex, 1);
    }
    await user.save();
    res.status(200).json(user.wishlist);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.saveRemoveCart = async (req, res) => {
  const { userID, productID, count, bookingStartDate, bookingEndDate } = req.body;

  try {
    const user = await User.findById(userID);
    if (!user) return res.status(404).json({ message: 'User Not Found' });

    const product = await Product.findById(productID);
    if (!product) return res.status(404).json({ message: 'Product Not Found' });

    const cartItemIndex = user.cart.findIndex(item => item.product.toString() === productID);
    if (cartItemIndex === -1) {
      if (count > product.unitsAvailable) {
        return res.status(400).json({ message: `Only ${product.unitsAvailable} units available` });
      }
      user.cart.push({ product: productID, count, bookingStartDate, bookingEndDate, rentedAtPrice: `${product.rentalPricePerWeek}/week, ${product.rentalPricePerMonth}/month` });
    } else {
      user.cart.splice(cartItemIndex, 1);
    }
    await user.save();
    res.status(200).json(user.cart);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.placeOrder = async (req, res) => {
  const { userID } = req.body;

  try {
    
    const user = await User.findById(userID).populate('cart.product');
    if (!user) return res.status(404).json({ message: 'User Not Found' });

    const productsInCart = user.cart;

    // Create order
    const order = new Order({ user: userID, products: productsInCart });
    await order.save();

    // Update product units
    for (const item of productsInCart) {
      const product = await Product.findById(item.product._id);
      product.unitsAvailable -= item.count;
      await product.save();
    }

    // Clear user's cart
    user.cart = [];
    await user.save();

    res.status(200).json(order.products);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};
