// models/Complaint.js
const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({
    role: {
        type: String,
        enum: ["Admin", "Barber", "Customer"],
        // required: true,
    },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  complaint: {
    type: String,
    required: true,
  },
  
});

const Complaint = mongoose.model("Complaint", complaintSchema);

module.exports = Complaint;
