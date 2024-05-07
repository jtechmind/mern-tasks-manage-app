const User = require("../models/userModel");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

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

    const isUserExists = await User.findOne({ email });

    // encrypt password
    const salt = bcryptjs.genSaltSync(10);
    const hashedPassword = bcryptjs.hashSync(password, salt);

    // compare password
    const validPassword = await bcryptjs.compare(
      password,
      isUserExists.password
    );

    if (!isUserExists || !validPassword) {
      res.status(4001).json({ message: "Invalid Credentials!" });
    }

    // create Token
    // Payload data for JWT
    const tokenData = {
      id: isUserExists._id,
      email: isUserExists.email,
    };
    const token = await jwt.sign(tokenData, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.json({ token });

    // res.status(200).json({ message: "Logged in successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.Authorization || req.headers.authorization;

    if (authHeader && authHeader.startsWith("Bearer")) {
      token = authHeader.split(" ")[1];
      console.log(token);
      jwt.verify(token, process.env.JWT_SECRET, (err, activeUser) => {
        if (err) {
          res.status(401).json("Invalid Token");
        }
        // req.user = user;
        // next();
        console.log(activeUser);
      });
    }

    // if (!token) {
    //   res.status(401).json("Unauthorized11");
    // }
  } catch (error) {}
};

const signOut = async (req, res) => {
  try {
  } catch (error) {}
};

const currentUser = async (req, res) => {
  res.json({ message: res.user });
};

module.exports = { signUp, signIn, signOut, authenticateToken, currentUser };
