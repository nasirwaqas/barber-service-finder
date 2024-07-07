const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require('dotenv').config()
const Complaint = require("../modals/Complaint")

const { authenticateToken } = require('../middleware/auth');

exports.createComplaint = async (req, res) => {
  try {
    const { name, email, complaint, role } = req.body;
    const newComplaint = new Complaint({ name, email, complaint, role });
    await newComplaint.save();
    res.status(201).json({ message: 'Complaint created successfully', complaint: newComplaint });
  } catch (error) {
    console.error('Complaint creation failed:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// exports.listComplaints = async (req, res) => {
//   try {
//     const complaints = await User.find();
//     res.json(complaints);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

exports.listComplaints = async (req, res) => {
  try {
    // Fetch all complaints from the database
    const complaints = await Complaint.find();

    // Send the complaints as a JSON response
    res.status(200).json({ complaints });
  } catch (error) {
    console.error('Error fetching complaints:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

