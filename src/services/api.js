/* eslint-disable no-unused-vars */
import axios from "axios";
import { getToken } from "./auth";

// export const api = axios.create({
//   baseURL: "http://localhost:8080/gateway/",
//   headers: {
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
//     "Access-Control-Allow-Credentials": true,
//     "crossorigin": true,
//     "Accept": "application/json",
//     "Content-Type": "application/json"
//   }
// });
export const api = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Credentials": true,
    "crossorigin": true,
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
});
// export const api = axios.create({
//   baseURL: "http://localhost:8080/",
//   headers: {
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
//     "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
//   }
// });

// headers: {
//   "Access-Control-Allow-Origin": "*",
//   "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
//   "Access-Control-Allow-Credentials": true,
//   "crossorigin": true,
//   "Accept": "application/json",
//   "Content-Type": "application/json"
// }

// api.interceptors.request.use(async config => {
//   const token = getToken();
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

export const api = axios.create({
  baseURL: "http://localhost:8080/gateway/eventos/v1/api/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Credentials": true,
    "crossorigin": true,
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
});
