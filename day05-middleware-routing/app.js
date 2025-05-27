const express = require('express');
const app = express();

// Middleware function to log method, URL, and timestamp
const logger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next(); // Continue to the next function or route
};

// Use the logger middleware globally
app.use(logger);

// Define routes
app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
