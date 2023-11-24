const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require('dotenv').config()
const User = require("./../modals/User");
const { authenticateToken } = require('../middleware/auth');

exports.register = async (req, res) => {
  console.log("Body", req.body);
  const { fullname, email, password, role, homeAddress, barberAddress } = req.body;

  if (!email || !password) {
    return res.status(400).send({
      message: "Email and password cannot be empty",
    });
  }

  try {
    const data = await User.findOne({ email: email });

    if (data) {
      return res.status(400).send({
        message: "Email already exists",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = new User({ fullname, email, password: hash, Role: role, homeAddress, barberAddress }); // Use 'role' here, not 'Role'

    const savedUser = await user.save();
    console.log("savedUser", savedUser);

    const payload = {
      id: savedUser.id,
      name: savedUser.fullname,
      role: savedUser.role,
    };

    jwt.sign(
      payload,
      // process.env.JWT_SECRET, // Use the secret from your .env file
      'abc12345',
      { expiresIn: "3h" },
      (err, token) => {
        if (err) throw err;
        res.json({ token, email, fullname });
      }
    );
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

exports.login = async (req, res) => {
  // console.log("Body", req.body);
  const {email , password , role:Role} = req.body;

  try {
    const user = await User.findOne({ email , Role });

    if (!user) {
      return res.status(400).json({ message: "Email is not registered" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Password" });
    }

    const { _id, fullname, Role: userRole } = user;

    // Create a payload for the JWT
    const payload = {
      id: _id,
      name: fullname,
      Role: userRole,
      email,
    };

    // Sign the JWT token
    jwt.sign(
      payload,
     'abc123', // Use the secret from your .env file
      { expiresIn: "3h" },
      (err, token) => {
        if (err) {
          throw err;
        }
        res.status(200).json({
          fullname,
          email,
          token,
          Role: userRole,
        });
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getMe = async (req, res) => {
  const { id } = req.user;
  try {
    const { _id, email } = await User.findById(id);

    res.status(200).json({ _id, email });
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
};

// const User = require('./models/User'); // Import the User model or adjust the path accordingly

// Create function for handling the POST request

// Define the create function for the /create route
// Create a new user
exports.create = async (req, res) => {
  try {
    // Extract user data from the request body
    const { fullname, email, password, homeAddress, barberAddress, role } = req.body;

    // Create a new user document using your User model
    const newUser = new User({
      fullname,
      email,
      password,
      homeAddress,
      barberAddress,
      role,
    });
      const data = await User.findOne({ email: email });
  
      if (data) {
        return res.status(400).send({
          message: "Email already exists",
        });
      }
    // Save the new user to the database
    await newUser.save();

    // Send a success response
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error('User creation failed:', error);
    res.status(500).json({ message: 'Server error' });
  }
  
};


exports.updates = async (req, res) => {
  const { fullname, homeAddress, barberAddress,mobile } = req.body;
  const { id } = req.params
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        fullname,
        homeAddress,
        barberAddress,
        mobile,
      },
      {
        new: true,
      }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
exports.delete = async (req, res) => {
  const { id } = req.params

  try {
    const user = await User.findOneAndRemove({ _id: id });
    if (!user) {
      res.status(500).json({ success: false, message: 'User not found' })
    }
    res.json({ success: true, message: 'User deleted successfully' })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error deleting user: ' + error.message })
  }
}
exports.list = async (req, res) => {
  try {

    const users = await User.find({}).select({ password: 0 }); // Retrieve all users from the User model
    res.json( users );
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}
exports.findByID = async (req, res) => {
  const { id } = req.params
  const user = await User.findById(id).select({ password: 0 });
  if (!user) {
    res.status(500).json({ "message": "No User found" })
  }
  res.json(user)
}
