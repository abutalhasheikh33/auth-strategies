const signToken = require('../utils/signToken');
const verifyPassword = require('../utils/verifyPassword');
const User = require('../models/User');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');

exports.register = catchAsync(async (req, res, next) => {
  const { name, email, password, passwordConfirm } = req.body;

  if (!name || !email || !password || !passwordConfirm) {
    return next(new AppError('Fill every field'));
  }

  const user = {
    name,
    email,
    password
  };

  const newUser = await User.create(user);
  const payload = {
    email: newUser.email,
    id: newUser._id
  };
  const token = await signToken(payload);

  res.status(200).json({
    message: "A new user just registered",
    newUser,
    token
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError('Cannot leave email or password field blank'));
  }

  const user = await User.findOne({ email });

  if (!user) {
    return next(new AppError('User not found'));
  }

  const isPasswordValid = await verifyPassword(password, user.password);

  if (!isPasswordValid) {
    return next(new AppError('Enter the correct password'));
  }

  const payload = { email: user.email, id: user._id };
  const token = await signToken(payload);

  res.status(201).json({
    status: 'SUCCESS',
    message: "Login successful",
    user,
    token
  });
});
