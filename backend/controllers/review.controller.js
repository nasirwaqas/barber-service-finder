const Review = require("../modals/Review");

const User = require("../modals/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require('dotenv').config()
const { authenticateToken } = require('../middleware/auth');


exports.createReview = async (req, res) => {
  try {
    const { user, rating, comment } = req.body;
    const barberId = req.params.barberId;
    const newReview = new Review({
      user,
      barberId,
      rating,
      comment,
    });

    const savedReview = await newReview.save();

    // Update the user model with the new rating and comment
    await User.findByIdAndUpdate(barberId, {
      $push: { ratings: rating, comments: comment },
    });

    res.json(savedReview);
  } catch (error) {
    console.error('Error creating review:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



exports.listReviews = async (req, res) => {
  try {
    console.log("Fetching reviews...");
    const reviews = await Review.find();
    console.log("Reviews fetched successfully:", reviews);
    res.json(reviews);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
exports.getBarberReviews = async (req, res) => {
  try {
    const barberId = req.params.barberId;

    // Fetch the reviews for the specified barberId
    const reviews = await Review.find({ barberId: barberId });

    // Fetch additional information about the barber using the User model
    const barber = await User.findById(barberId);

    res.json({
      barber: {
        _id: barber._id, // Include the barber's ID
        name: barber.name, // Replace with the actual property you want to display
        // Add other barber information as needed
      },
      reviews: reviews,
    });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};




// exports.createReview = async (req, res) => {
//   try {
//     const { user, rating, comment } = req.body;
//     const barberId = req.params.barberId;

//     // Validate the request body
//     if (!user || !rating || !comment || !barberId) {
//       return res.status(400).json({ error: 'Missing required fields' });
//     }

//     // Create a new review instance
//     const newReview = new Review({
//       user,
//       barber: barberId,
//       rating,
//       comment,
//     });

//     // Save the review to the database
//     const savedReview = await newReview.save();

//     // Update the user model with the new rating and comment
//     await User.findByIdAndUpdate(barberId, {
//       $push: { ratings: rating, comments: comment },
//     });

//     res.json(savedReview);
//   } catch (error) {
//     console.error('Error creating review:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

// exports.listReviews = async (req, res) => {
//   try {
//     console.log("Fetching reviews...");
//     const reviews = await Review.find();
//     console.log("Reviews fetched successfully:", reviews);
//     res.json(reviews);
//   } catch (error) {
//     console.error("Error fetching reviews:", error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

// exports.getBarberReviews = async (req, res) => {
//   try {
//     const barberId = req.params.barberId;

//     // Fetch the reviews for the specified barberId
//     const reviews = await Review.find({ barber: barberId });

//     // Fetch additional information about the barber using the User model
//     const barber = await User.findById(barberId);

//     res.json({
//       barber: {
//         name: barber.name, // Replace with the actual property you want to display
//         // Add other barber information as needed
//       },
//       reviews: reviews,
//     });
//   } catch (error) {
//     console.error('Error fetching reviews:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };
