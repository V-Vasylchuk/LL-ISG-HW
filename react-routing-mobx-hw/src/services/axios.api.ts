import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

const getUsers = (limit: number) => axiosInstance.get(`/users?_limit=${limit}`);
const getPosts = (limit: number) => axiosInstance.get(`/posts?_limit=${limit}`);
const getToDos = (limit: number) => axiosInstance.get(`/todos?_limit=${limit}`);

export {
  getUsers,
  getPosts,
  getToDos,
}
