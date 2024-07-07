const express = require('express');
const router = express.Router();
const user = require('../controllers/user.controller');
const { authenticateToken } = require('../middleware/auth');
<<<<<<< HEAD
=======
const multer = require('multer');
const path = require('path'); // Import the path module

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'frontend/src/images'); // Specify the directory where uploaded files should be stored
  },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname)); // Keep the original file name
//   },
filename: function (req, file, cb) {
    cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname)); // Keep the original file name
  }
});

const upload = multer({ storage: storage });
>>>>>>> 8e73524 (add some front end and backend files)

router.post('/register', user.register);
router.post('/login', user.login);


router.post('/create', user.create);
<<<<<<< HEAD
router.put('/update/:id', user.updates);
=======
//router.put('/update/:id', user.updates);
router.put('/update/:id', upload.single('image'), user.updates);
router.patch('/user/approve/:id', user.approveUser);
>>>>>>> 8e73524 (add some front end and backend files)
router.get('/list', user.list);
router.get('/:id', user.findByID);
router.delete('/:id', user.delete);

<<<<<<< HEAD
router.get("/me", authenticateToken, user.getMe);
=======

// Complaint routes
router.post('/createComplaint', user.createComplaint);
router.get('/listComplaints', user.listComplaints);


router.post("/me", authenticateToken, user.getInfo);
>>>>>>> 8e73524 (add some front end and backend files)

module.exports = router;
