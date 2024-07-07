const express = require('express');
const router = express.Router();
const complaint = require('../controllers/complaint.controller')

const { authenticateToken } = require('../middleware/auth');



router.post('/createComplaint', complaint.createComplaint);
router.get('/listComplaints', complaint.listComplaints);

module.exports = router;
