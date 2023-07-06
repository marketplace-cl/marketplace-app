import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "http://192.168.0.6:5000/api/v1",
});
