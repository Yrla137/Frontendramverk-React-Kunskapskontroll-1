import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://www.omdbapi.com/",
  params: {
    apikey: import.meta.env.VITE_API_KEY
  },
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 20000,
});

export default apiClient;