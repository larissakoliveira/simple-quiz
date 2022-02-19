import axios from "axios";

const api = axios.create({
  baseURL: "https://quizapi.io/api/v1"
});

export default api