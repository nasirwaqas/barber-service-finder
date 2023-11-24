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
  }
});
module.exports = new mongoose.model("User", User);
