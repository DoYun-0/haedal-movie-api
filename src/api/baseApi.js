import axios from "axios";

const BASE = "https://api.themoviedb.org/3";

export const api = axios.create({
  baseURL: BASE,
  params: {
    api_key: import.meta.env.VITE_API_KEY,
    language: "ko-KR",
  },
  timeout: 10000,
});
