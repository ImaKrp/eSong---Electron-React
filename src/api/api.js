import axios from "axios";

export const userApi = axios.create({
  baseURL: "http://localhost:8000",
});

export const songApi = axios.create({
  baseURL: "https://deezerdevs-deezer.p.rapidapi.com",

  headers: {
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    "x-rapidapi-key": "34ea251c21msh2b71942132f7772p165b87jsn49dc125b75ec",
  },
});
