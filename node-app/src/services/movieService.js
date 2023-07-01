const movies = [
    { id: 1, title: 'Movie 1', year: 2021, genre: 'Action' },
    { id: 2, title: 'Movie 2', year: 2022, genre: 'Drama' },
    { id: 3, title: 'Movie 3', year: 2023, genre: 'Comedy' },
  ];
  
  class MovieService {
    getAllMovies() {
      return movies;
    }
  }
  
  module.exports = MovieService;
  