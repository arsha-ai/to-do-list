// server.js
const express = require('express');
const app = express();

console.log("🛠️ Starting server...");

app.get('/', (req, res) => {
  res.send('✅ Backend is running!');
});

app.listen(5000, () => {
  console.log('🚀 Server running on http://localhost:5000');
});
