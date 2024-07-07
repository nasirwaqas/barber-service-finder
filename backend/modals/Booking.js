// models/booking.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({

//   barberId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User', // Reference to your Barber model
//     required: true,
//   },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  customer: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
