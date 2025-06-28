// controllers/userController.js
let users = require('../data/users');

// Get all users
exports.getAllUsers = (req, res) => {
  res.status(200).json(users);
};

// Get user by ID
exports.getUserById = (req, res) => {
  const id = req.params.id;
  const user = users.find(u => u.id === id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json(user);
};

// Create a new user
exports.createUser = (req, res) => {
  const { firstName, lastName, hobby } = req.body;

  if (!firstName || !lastName || !hobby) {
    return res.status(400).json({ message: "firstName, lastName, and hobby are required." });
  }

  const newUser = {
    id: (users.length + 1).toString(),
    firstName,
    lastName,
    hobby
  };

  users.push(newUser);
  res.status(201).json(newUser);
};

// Update user
exports.updateUser = (req, res) => {
  const id = req.params.id;
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const { firstName, lastName, hobby } = req.body;

  if (!firstName && !lastName && !hobby) {
    return res.status(400).json({ message: "Provide at least one field to update." });
  }

  user.firstName = firstName || user.firstName;
  user.lastName = lastName || user.lastName;
  user.hobby = hobby || user.hobby;

  res.status(200).json(user);
};

// Delete user
exports.deleteUser = (req, res) => {
  const id = req.params.id;
  const index = users.findIndex(u => u.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  const deletedUser = users.splice(index, 1);
  res.status(200).json({ message: "User deleted successfully", user: deletedUser[0] });
};
