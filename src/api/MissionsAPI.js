import axios from "axios";

const axiosAPI = axios.create({baseURL: 'https://api.spacexdata.com'});

export {axiosAPI};