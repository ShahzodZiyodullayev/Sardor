import axios from "axios";

const modelsBaseURL = axios.create({
  baseURL: "http://localhost:4000/model/",
});

const modelsListBaseURL = axios.create({
  baseURL: "http://localhost:4000/car/",
});

const carDetailBaseURL = axios.create({
  baseURL: "http://localhost:4000/",
});

export default { modelsBaseURL, modelsListBaseURL, carDetailBaseURL };
