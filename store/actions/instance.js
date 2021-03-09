import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.237.1:8000",
});

export default instance;
