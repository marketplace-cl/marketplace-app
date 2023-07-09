import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "http://172.20.10.2:5000/api/v1",
});
