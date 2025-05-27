const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let users = [];

// GET all users
app.get('/users', (req, res) => {
  res.json(users);
});

// POST a new user
app.post('/users', (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json(user);
});

app.listen(port, () => {
  console.log(`API is running on http://localhost:${port}`);
});
