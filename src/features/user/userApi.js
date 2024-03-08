import axios from "axios";
let baseUrl = "http://localhost:5300/api/user/";

export const addUser = (email, password, userName) => {
  return axios.post(baseUrl, { email, password, userName });
};
export const Login = (email, password) => {
    return axios.post(`${baseUrl}/login`, { email, password });
  };
  