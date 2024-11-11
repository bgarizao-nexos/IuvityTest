import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/api", // URL base
  timeout: 10000,
});

export default instance;
