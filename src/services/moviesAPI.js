import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = 'e4ed0f086cbca77909d91aa152a380ab';

const defaultParams = {
  api_key: API_KEY,
};

export const getTrending = async () => {
  const res = await axios.get('/trending/movie/day', { params: defaultParams });

  return res.data;
};

export const searchMoviesByQuery = async query => {
  const params = {
    ...defaultParams,
    query,
  };

  const res = await axios.get('/search/movie', { params });

  return res.data;
};

export const getMovieDetails = async movieId => {
  const res = await axios.get(`/movie/${movieId}`, { params: defaultParams });

  return res.data;
};

export const getMovieCredits = async movieId => {
  const res = await axios.get(`/movie/${movieId}/credits`, {
    params: defaultParams,
  });

  return res.data;
};

export const getMovieReviews = async movieId => {
  const res = await axios.get(`/movie/${movieId}/reviews`, {
    params: defaultParams,
  });

  return res.data;
};
