import axios from "axios";
import { API_KEY } from "react-native-dotenv";

export const tmdb = axios.create({
  baseURL: `https://api.themoviedb.org/3/`
});

export const discoverMovie = axios.create({
  baseURL: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}/`
});

export const discoverTV = axios.create({
  baseURL: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}/`
});
