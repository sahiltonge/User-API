// middleware/validateUser.js
const validateUser = (req, res, next) => {
  const method = req.method;
  const { firstName, lastName, hobby } = req.body;

  if (method === 'POST') {
    if (!firstName || !lastName || !hobby) {
      return res.status(400).json({ message: "firstName, lastName, and hobby are required." });
    }
  }

  // For PUT, allow at least one field
  if (method === 'PUT') {
    if (!firstName && !lastName && !hobby) {
      return res.status(400).json({ message: "Provide at least one field to update." });
    }
  }

  next();
};

module.exports = validateUser;
