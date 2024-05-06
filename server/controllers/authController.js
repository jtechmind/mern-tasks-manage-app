const User = require("../models/userModel");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // check email if already registered.
    const isUserExists = await User.findOne({ email });

    if (isUserExists) {
      res.status(404).json({ message: "User Already Exists" });
    }
    // Bcrypt password
    const salt = bcryptjs.genSaltSync(10);

    const hashedPassword = await bcryptjs.hashSync(password, salt);

    // create new user object
    const user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    // save new user
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const salt = bcryptjs.genSaltSync(10);
    const hashedPassword = bcryptjs.hashSync(password, salt);

    const userSignIn = await User.findOne({ email });

    const validPassword = await bcryptjs.compare(password, userSignIn.password);

    if (!validPassword) {
      res.status(400).json({ message: "Invalid Credentials!" });
    }
    res.status(200).json({ message: "Logged in successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const signOut = async (req, res) => {
  try {
  } catch (error) {}
};

module.exports = { signUp, signIn, signOut };
