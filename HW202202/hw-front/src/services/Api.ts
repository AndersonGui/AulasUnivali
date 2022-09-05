import axios from "axios";

const Api = axios.create({
  baseURL: "https://localhost:7102/",
});

export default Api;