const express = require('express');
const { getUserDetails, updateUserDetails } = require('../controllers/userController');
const router = express.Router();

router.get('/:username', getUserDetails);
router.put('/', updateUserDetails);

module.exports  = router;


// for get
// http://localhost:5000/users/seller_qaifi
//http://localhost:5000/users/john_doe


// for put
// {
//     "userID": "",
//     "firstName": "Qaifi bhai",
//     "lastName": "Admin",
//     "email": "qaifi@admin.com",
//     "contactNumber": "0987654321",
//     "userType": "Seller"
//   }

// {
//     "userID": "",
//     "firstName": "John bro",
//     "lastName": "Doe",
//     "email": "john_doe@example.com",
//     "contactNumber": "1234567890",
//     "userType": "Gamer"
//   }