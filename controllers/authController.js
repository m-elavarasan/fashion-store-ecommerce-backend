const user = require('../models/user');
const bcrypt = require('bcryptjs');

exports.login = async (req, res) => {
  const { email, password } = req.body;

  // Find the user by email
  const user = await user.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: 'Invalid email or password' });
  }

  // Compare password with the stored hash
  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return res.status(400).json({ message: 'Invalid email or password' });
  }

  res.json({ message: 'Login successful' });
};
