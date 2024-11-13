const express = require('express');
const { login, register } = require('../controllers/authController');
const router = express.Router();

router.post('/login', login);
router.post('/register', register);

module.exports  = router;


// http://localhost:5000/auth/register
// register as new user 
// {
//     "username": "john_doe",
//  "password": "password123",
//     "email": "john_doe@example.com",
//     "firstName": "John",
//     "lastName": "Doe",
//     "contactNumber": "1234567890",
//     "userType": "Gamer"
//   }


// http://localhost:5000/auth/login
//register as seller   @admin.com is compulsary
// {
//     "username": "seller_qaifi",
//     "email": "qaifi@admin.com",
//     "password": "securePassword456",
//     "firstName": "Qaifi",
//     "lastName": "Admin",
//     "contactNumber": "0987654321",
//     "userType": "Seller"
//   }
  