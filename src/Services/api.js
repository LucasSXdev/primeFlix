//Url base: https://api.themoviedb.org/3
//Url da api:/movie/now_playing?api_key=1e05456c352bfe27ab41dcc7db359cbe&language=pt-BR

import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
