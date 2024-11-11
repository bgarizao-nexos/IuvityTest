import axios from "axios";

const randomuserApi = axios.create({
  baseURL: "https://randomuser.me/api/", // URL base
  timeout: 10000,
});

export default randomuserApi;
