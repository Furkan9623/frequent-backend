import axios from "axios";
const URL = "http://localhost:8080/api/v1";
const ADD_USER_INFO = async (data) => {
  return axios
    .post(`${URL}/user-form`, data)
    .then((res) => res)
    .catch((er) => er);
};

export { ADD_USER_INFO };
