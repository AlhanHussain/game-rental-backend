const express = require('express');
const { saveRemoveWishlist, saveRemoveCart, placeOrder } = require('../controllers/orderController');
const router = express.Router();

router.put('/wishlist', saveRemoveWishlist);
router.put('/cart', saveRemoveCart);
router.post('/order', placeOrder);

module.exports  = router;




//http://localhost:5000/orders/wishlist
// {
//     "userID": "",
//     "productID": ""
//   }
  

// http://localhost:5000/orders/cart
// {
//     "userID": "6694b01e07dae9ca764ea1cf",
//     "productID": "6694b18dc82f55bc385a0466",
//     "count": 2,
//     "bookingStartDate": "2023-07-20",
//     "bookingEndDate": "2023-07-27"
//   }


// http://localhost:5000/orders/order
// {
//     "userID": "6694b01e07dae9ca764ea1cf"
//   }
  