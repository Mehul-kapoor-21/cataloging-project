const jwt = require('jsonwebtoken')
const User = require('../models/user')
const { isValidObjectId } = require('mongoose');
const { sendError, generateRandomByte } = require('../utils/helper');

exports.create = async (req, res) => {
  const { name, email, password } = req.body

  const oldUser = await User.findOne({ email });

  if (oldUser) return sendError(res, "This email is already in use!")

  const newUser = new User({ name, email, password })
  await newUser.save()
  res.status(201).json({ message: 'Your Account has been created successfull. Please login to continue!' })
};




exports.signIn = async (req, res,) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return sendError(res, "User Not Found");

  const matched = await user.comparePassword(password);
  if (!matched) return sendError(res, "Email/Password mismatch!");

  const { _id, name } = user;

  const jwtToken = jwt.sign({ userId: _id }, process.env.JWT_SECRET);

  res.json({
    user: { id: _id, name, email, token: jwtToken, },
  });
};