// Callback Method
const fsCallback = require('fs');
fsCallback.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Callback:', data);
});

// Promise Method
const fsPromise = require('fs').promises;
fsPromise.readFile('example.txt', 'utf8')
  .then(data => console.log('Promise:', data))
  .catch(err => console.error(err));

// Async/Await Method
async function readFileAsync() {
  try {
    const data = await fsPromise.readFile('example.txt', 'utf8');
    console.log('Async/Await:', data);
  } catch (err) {
    console.error(err);
  }
}
readFileAsync();
