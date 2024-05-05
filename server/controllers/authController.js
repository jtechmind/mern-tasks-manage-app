const User = require("../models/userModel");
const signUp = async (req, res) => {
  try {
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    });
    console.log(user);
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const signIn = async (req, res) => {
  try {
  } catch (error) {}
};

const signOut = async (req, res) => {
  try {
  } catch (error) {}
};

module.exports = { signUp, signIn, signOut };
