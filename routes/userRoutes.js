// routes/userRoutes.js
const express = require('express');
const router = express.Router();

// Import controller and middleware with correct paths
const userController = require('../controllers/userController');
const validateUser = require('../middleware/validateUser');

// Route to get all users
router.get('/users', userController.getAllUsers);

// Route to get a single user by ID
router.get('/users/:id', userController.getUserById);

// Route to create a new user
router.post('/user', validateUser, userController.createUser);

// Route to update an existing user
router.put('/user/:id', validateUser, userController.updateUser);

// Route to delete a user
router.delete('/user/:id', userController.deleteUser);

module.exports = router;
