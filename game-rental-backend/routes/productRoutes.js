const express = require('express');
const { getAllProducts, getProductDetails, createProduct, updateProduct } = require('../controllers/productController');
const router = express.Router();

router.get('/', getAllProducts);
router.get('/:productID', getProductDetails);
router.post('/', createProduct);
router.put('/:productID', updateProduct);

module.exports  = router;



//http://localhost:5000/products for get
//http://localhost:5000/products/:productID -for post
// {
//     "title": "PlayStation 5",
//     "thumbnailURL": "https://example.com/images/ps5.jpg",
//     "sellerUsername": "seller123",
//     "unitsAvailable": 10,
//     "productType": "console",
//     "productImages": [
//       "https://example.com/images/ps5_1.jpg",
//       "https://example.com/images/ps5_2.jpg"
//     ],
//     "rentalPricePerWeek": 50,
//     "rentalPricePerMonth": 150
//   }
  