const express = require('express');
const router = express.Router();
const user = require('../controllers/user.controller');
const { authenticateToken } = require('../middleware/auth');

router.post('/register', user.register);
router.post('/login', user.login);


router.post('/create', user.create);
router.put('/update/:id', user.updates);
router.get('/list', user.list);
router.get('/:id', user.findByID);
router.delete('/:id', user.delete);

router.get("/me", authenticateToken, user.getMe);

module.exports = router;
