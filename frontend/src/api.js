import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:3001/api",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }
  return req;
});

export const loginUser = (data) => API.post("/auth/login", data);
export const signupUser = (data) => API.post("/auth/signup", data);

export default API;
