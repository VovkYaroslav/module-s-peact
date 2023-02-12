import {MissionsAPI} from "./MissionsAPI";

const servicesMissions = {

    getAll: ()=>MissionsAPI.get('/v3/launches/')

};

export {servicesMissions};