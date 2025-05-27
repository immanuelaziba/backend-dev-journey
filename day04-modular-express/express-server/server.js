const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Important for handling JSON body in POST/PUT

// GET Route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// POST Route
app.post('/submit', (req, res) => {
  res.send('POST request received');
});

// PUT Route
app.put('/update', (req, res) => {
  res.send('PUT request received');
});

// DELETE Route
app.delete('/delete', (req, res) => {
  res.send('DELETE request received');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
