import React, {useEffect, useState} from "react";
import {servicesMissions} from "../api/servicesMissions";

const Mission = () => {
    const [launches, setLaunches] = useState([])
    useEffect(() => {
        servicesMissions.getAll().then(value => value.data).then(value => setLaunches(value))
    },[])
    return (
        <div>

            {launches.filter(item=>item.launch_year !== 2020).map(item=>{
                return(
                    <div key={item.mission_name}>
                        <h2>{item.mission_name}</h2>
                        <h2>{item.launch_year}</h2>
                        <img src={item.mission_patch_small} alt={item.mission_name}/>
                        <hr/>
                    </div>
                )
            })}

        </div>
    );
};

export {Mission};