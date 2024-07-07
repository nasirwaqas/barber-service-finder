// controllers/bookingController.js
const Booking = require("../modals/Booking");
const User = require("../modals/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require('dotenv').config()
const { authenticateToken } = require('../middleware/auth');

exports.bookBarber = async (req, res) => {
    const { barberId } = req.params;
    const { date, time, customerName, customerEmail, customerPhone } = req.body;
  
    try {
      // Create a new booking
      const booking = new Booking({
        barberId,
        date,
        time,
        customer: {
          name: customerName,
          email: customerEmail,
          phone: customerPhone,
        },
      });
  
      // Save the booking to the database
      await booking.save();
  
      res.status(201).json({
        message: 'Booking successful',
        booking: {
          barberId,
          date,
          time,
          customer: {
            name: customerName,
            email: customerEmail,
            phone: customerPhone,
          },
        },
      });
      
    } catch (error) {
      console.error('Error booking appointment:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  exports.getAllBookings = async (req, res) => {
    try {
      const bookings = await Booking.find();
      res.status(200).json(bookings);
    } catch (error) {
      console.error('Error fetching bookings:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };