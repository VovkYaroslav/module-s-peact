import {axiosConf} from "../../utils/axiosConf";
import {requests} from "../endpoints";

const commentRequest = {
    getAll:()=>axiosConf.get(requests.comments),
    addComment:(data)=>axiosConf.get(requests.comments, data)
}

export {commentRequest}