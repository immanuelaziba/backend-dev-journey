const express = require('express');
const app = express();

// Middleware: adds current time to each request
const requestTime = (req, res, next) => {
  req.requestTime = new Date();
  next(); // move on to the route handler
};

// Use the middleware
app.use(requestTime);

// Route: shows request time
app.get('/', (req, res) => {
  res.send(`Current Time: ${req.requestTime}`);
});

// Route with param and query string
app.get('/products/:productId', (req, res) => {
  const productId = req.params.productId;
  const category = req.query.category;

  res.send(`Product ID: ${productId}, Category: ${category}`);
});

// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
