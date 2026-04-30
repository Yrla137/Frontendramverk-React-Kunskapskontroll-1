import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://www.omdbapi.com/",
  params : { apikey: "5e52cd69"},
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
})

apiClient.interceptors.request.use(
  (config) => {
    console.log(`API Request: ${config.method.toUpperCase()} ${config.url}`);
    return config;
  }
)
export default apiClient;