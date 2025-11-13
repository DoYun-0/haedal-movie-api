import axios from "axios";
import { API_KEY } from "../config.js";

const BASE = "https://api.themoviedb.org/3";

export const api = axios.create({
  baseURL: BASE,
  params: {
    api_key: API_KEY,
    language: "ko-KR",
  },
  timeout: 10000,
});
