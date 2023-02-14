import axios from "axios";
import {baseURL} from "../api/endpoints";

const axiosConf = axios.create({baseURL})

export {axiosConf}