const User = require('../models/User');

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username, password });
    if (!user) return res.status(400).json({ message: 'Invalid Login Credentials' });

    res.status(200).json({ userId: user._id, message: 'Login Successful' });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
 };

exports.register = async (req, res) => {
  const { username, email, password, firstName, lastName, contactNumber, userType } = req.body;

  if (!username || !email || !password || !firstName || !lastName || !contactNumber || !userType) {
    return res.status(400).json({ message: 'Please provide all required fields' });
  }

  if (userType === 'Seller' && !email.endsWith('@admin.com')) {
    return res.status(400).json({ message: 'Sellers must register with an admin email' });
  }

  try {
    const user = new User({ username, email, password, firstName, lastName, contactNumber, userType });
    await user.save();
    res.status(200).json({ userId: user._id, username, email, firstName, lastName, contactNumber, userType });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};
