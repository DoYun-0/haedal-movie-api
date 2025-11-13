import axios from "axios";
import { API_KEY } from "../config.js";

const BASE = "https://api.themoviedb.org/3";

const api = axios.create({
  baseURL: BASE,
  params: {
    api_key: API_KEY,
    language: "ko-KR",
  },
  timeout: 10000,
});

export async function Top5Movies() {
  try {
    const res = await api.get("/movie/popular", { params: { page: 1 } });
    return res.data && res.data.results ? res.data.results.slice(0, 5) : [];
  } catch (err) {
    throw console.error(err);
  }
}

export async function searchMovies(query) {
  if (!query) return [];
  try {
    const res = await api.get("/search/movie", { params: { query } });
    return res.data && res.data.results ? res.data.results : [];
  } catch (err) {
    throw console.error(err);
  }
}
