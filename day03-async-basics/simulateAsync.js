function simulateAsyncOperation(callback) {
  setTimeout(() => {
    callback('Operation completed');
  }, 1000); // Delay of 1 second
}

simulateAsyncOperation(message => console.log(message));
