const fs = require('fs');

// Step 1: Write to a file
fs.writeFile('example.txt', 'This is a sample text.', (err) => {
  if (err) throw err;
  console.log('✅ File written successfully.');

  // Step 2: Read the file
  fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('📄 File content:', data);
  });
});
