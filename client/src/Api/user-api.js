import axios from "axios";
const URL = "http://localhost:8080/api/v1";
const ADD_USER_INFO = async (data) => {
  const config = { headers: { "Content-Type": "multipart/form-data" } };
  return axios
    .post(`${URL}/user-form`, data, config)
    .then((res) => res)
    .catch((er) => er);
};
const GET_USER = async (id) => {
  return axios
    .get(`${URL}/user/${id}`)
    .then((res) => res)
    .catch((er) => er);
};
export { ADD_USER_INFO, GET_USER };
