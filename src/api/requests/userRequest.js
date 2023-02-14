import {axiosConf} from "../../utils/axiosConf";
import {requests} from "../endpoints";

const userRequest = {
    getAll: ()=>axiosConf.get(requests.users),
    createUser: (data)=>axiosConf.post(requests.users, data)
}

export {userRequest}