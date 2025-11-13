import { api } from "./baseApi.js";

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
