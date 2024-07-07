const express = require('express');
const router = express.Router();
const review = require('../controllers/review.controller')
const { authenticateToken } = require('../middleware/auth');


// List reviews for a specific barber
router.get('/listReviews', review.listReviews);

// Create a review for a specific barber
router.post('/createReview/:barberId', review.createReview);
router.get('/barber/:barberId/reviews',  review.getBarberReviews);


module.exports = router;
