const mongoose = require("mongoose");

const User = new mongoose.Schema({
  fullname: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    unique: true,
    required: false,
  },
<<<<<<< HEAD
=======
  
>>>>>>> 8e73524 (add some front end and backend files)
  password: {
    type: String,
    required: false,
  },
  avatar: {
    type: String,
    required: false,
  },
  Role: {
    type: String,
    enum: ["Admin", "Barber", "Customer"],
    // required: true,
  },
  homeAddress:{
    type:String
  },
  barberAddress :{
    type : String
  },
  mobile:{
    type : String,
    required: false,
<<<<<<< HEAD
  }
=======
  },
 
  name: {
    type: String,
    required: false,
  },
  complaint: {
    type: String,
    required: false,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
  experience: {
    type: String,
    default: '',
  },
  expertise: {
    type: String,
    default: '',
  },
  qualification: {
    type: String,
    default: '',
  },
  location: {
    type: String,
    default: '',
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  },
>>>>>>> 8e73524 (add some front end and backend files)
});
module.exports = new mongoose.model("User", User);
