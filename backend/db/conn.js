const mongoose = require("mongoose");
require('dotenv').config()
const DBConn = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://nasirwaqas744:b7dQjsoWjLyKlQPo@barberapp.wuz6hwd.mongodb.net/barberApp?retryWrites=true&w=majority', {
      useNewUrlParser: true,
    });
    console.log("Connection Created at" ,'mongodb+srv://nasirwaqas744:b7dQjsoWjLyKlQPo@barberapp.wuz6hwd.mongodb.net/barberApp?retryWrites=true&w=majority' );
    return conn;
  } catch (error) {
    return error.message;
  }
};
module.exports = {
  DBConn,
};
