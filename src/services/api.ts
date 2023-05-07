import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-travel-board.onrender.com",
  timeout: 3000,
});

