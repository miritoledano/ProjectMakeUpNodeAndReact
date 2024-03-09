import axios from "axios";
let baseUrl = "https://projectnode-1-49hj.onrender.com/api/user/";

export const addUser = (email, password, userName) => {
  return axios.post(baseUrl, { email, password, userName });
};
export const Login = (email, password) => {
    return axios.post(`${baseUrl}/login`, { email, password });
  };
  