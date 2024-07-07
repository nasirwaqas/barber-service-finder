const express = require("express");
const mongoose = require("mongoose");
<<<<<<< HEAD
=======
mongoose.set('strictQuery', false);
>>>>>>> 8e73524 (add some front end and backend files)
const cors = require('cors')
const bodyParser = require("body-parser");
const { DBConn } = require("./db/conn");

<<<<<<< HEAD
=======


>>>>>>> 8e73524 (add some front end and backend files)
const app = express();
const path = require("path");
 require("dotenv").config();
const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: true }));
<<<<<<< HEAD

=======
app.use(cors());
>>>>>>> 8e73524 (add some front end and backend files)
// parse requests of content-type - application/json
app.use(bodyParser.json());
DBConn();
app.use("/user", require("./routes/userRoutes"));
<<<<<<< HEAD
=======
app.use("/complaint", require("./routes/complaintRoutes"))
app.use("/review", require("./routes/reviewRoutes"))
app.use("/booking", require("./routes/bookingRoutes"))
>>>>>>> 8e73524 (add some front end and backend files)
app.post('/' ,(req, res)=>{
  res.send("Hello World")
})
// Serve frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
