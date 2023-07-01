const express = require('express');
const cors = require('cors');
const movieController = require('./src/controllers/movies');
const userController = require('./src/controllers/users');

const app = express();
app.use(cors());

app.get('/movies', movieController.getAllMovies);
app.get('/users', userController.getAllUsers);

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
