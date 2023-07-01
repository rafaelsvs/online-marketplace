const MovieService = require('../services/movieService');

const movieService = new MovieService();

exports.getAllMovies = (req, res) => {
  const movies = movieService.getAllMovies();
  res.json(movies);
};
