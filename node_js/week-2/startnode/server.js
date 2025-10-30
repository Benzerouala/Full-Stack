
// Import Express
const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

app.post('/api/users', (req, res) => {
  console.log(req.body);
  res.send({ message: `Utilisateur ${req.body.name} ajouté.` });
});

// Start the server
app.listen(3000, () => {
  console.log(`Server running at http://localhost:${3000}`);
});
