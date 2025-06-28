// app.js
const express = require('express');
const app = express();

// Import custom middleware and routes
const logger = require('./middleware/logger');
const userRoutes = require('./routes/userRoutes');

// Built-in middleware to parse JSON request bodies
app.use(express.json());

// Custom middleware to log request details
app.use(logger);

// Mount user routes under /api prefix
app.use('/api', userRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
