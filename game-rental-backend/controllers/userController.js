const User = require('../models/User');

exports.getUserDetails = async (req, res) => {
  const { username } = req.params;

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ message: 'User Not Found' });

    res.status(200).json({ userID: user._id, firstName: user.firstName, lastName: user.lastName, email: user.email, contactNumber: user.contactNumber, userType: user.userType });
  } catch (err)  {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.updateUserDetails = async (req, res) => {
  const { userID } = req.body;
  const { firstName, lastName, email, contactNumber, userType } = req.body;

  try {
    const user = await User.findByIdAndUpdate(userID, { firstName, lastName, email, contactNumber, userType }, { new: true });
    if (!user) return res.status(404).json({ message: 'User Not Found' });

    res.status(200).json({ userID: user._id, firstName: user.firstName, lastName: user.lastName, email: user.email, contactNumber: user.contactNumber, userType: user.userType });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};
