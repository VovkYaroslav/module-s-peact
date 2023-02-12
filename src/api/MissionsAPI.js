import axios from "axios";

const MissionsAPI = axios.create({baseURL: 'https://api.spacexdata.com'});

export {MissionsAPI};