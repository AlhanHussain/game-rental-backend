const Product = require('../models/Product');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getProductDetails = async (req, res) => {
  const { productID } = req.params;

  try {
    const product = await Product.findById(productID);
    if (!product) return res.status(404).json({ message: 'Product Not Found' });

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.createProduct = async (req, res) => {
  const { title, thumbnailURL, sellerUsername, unitsAvailable, productType, productImages, rentalPricePerWeek, rentalPricePerMonth } = req.body;

  if (!title || !thumbnailURL || !sellerUsername || !unitsAvailable || !productType || !rentalPricePerWeek || !rentalPricePerMonth) {
    return res.status(400).json({ message: 'Please provide all required fields' });
  }

  try {
    const product = new Product({ title, thumbnailURL, sellerUsername, unitsAvailable, productType, productImages, rentalPricePerWeek, rentalPricePerMonth });
    await product.save();
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.updateProduct = async (req, res) => {
  const { productID } = req.params;
  const { title, thumbnailURL, sellerUsername, unitsAvailable, productType, productImages, rentalPricePerWeek, rentalPricePerMonth } = req.body;

  try {
    const product = await Product.findByIdAndUpdate(productID, { title, thumbnailURL, sellerUsername, unitsAvailable, productType, productImages, rentalPricePerWeek, rentalPricePerMonth }, { new: true });
    if (!product) return res.status(404).json({ message: 'Product Not Found' });

    res.status(200).json(product);
    
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};
