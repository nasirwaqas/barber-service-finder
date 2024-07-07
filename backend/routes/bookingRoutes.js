// routes/booking.js
const express = require('express');
const router = express.Router();
const booking = require('../controllers/booking.controller');



router.post('/bookBarber/:barberId', booking.bookBarber);
router.get('/customer/bookings', booking.getAllBookings);

module.exports = router;
