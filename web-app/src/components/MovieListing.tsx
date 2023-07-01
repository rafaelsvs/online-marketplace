import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, Box } from '@mui/material';
import API_URLS from '../config';

interface Movie {
  id: number;
  title: string;
  year: number;
  genre: string;
}

interface User {
  id: number;
  name: string;
  email: string;
}

const MovieListing: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchMovies();
    fetchUsers();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(API_URLS.movies);
      setMovies(response.data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get(API_URLS.users);
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Movie Listing
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Movies:
      </Typography>
      {movies.map((movie) => (
        <Box key={movie.id} sx={{ marginBottom: '1rem' }}>
          <Typography variant="h6" component="h3" gutterBottom>
            {movie.title}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Year: {movie.year}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Genre: {movie.genre}
          </Typography>
        </Box>
      ))}
      <Typography variant="h5" component="h2" gutterBottom>
        Users:
      </Typography>
      {users.map((user) => (
        <Box key={user.id} sx={{ marginBottom: '1rem' }}>
          <Typography variant="h6" component="h3" gutterBottom>
            {user.name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Email: {user.email}
          </Typography>
        </Box>
      ))}
    </div>
  );
};

export default MovieListing;
