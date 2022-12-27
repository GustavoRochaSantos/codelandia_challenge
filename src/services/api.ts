import axios from "axios";

export const api = axios.create({
  baseURL: "https://newsapi.org/v2/",
});

api.interceptors.request.use((config) => {
  config.url += `&apiKey=${import.meta.env.VITE_NEWSAPI_KEY}`;
  // console.log(config);
  return config;
});

api.interceptors.response.use((response) => {
  //console.log(response);
  return response.data;
});
