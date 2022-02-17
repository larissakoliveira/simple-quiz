import axios from "axios";

export const api = axios.create({
  baseURL: "https://quizapi.io/api/v1/questions"
});
