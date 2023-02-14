import {useEffect, useState} from "react";
import {userRequest} from "../../api/requests/userRequest";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userRequest.getAll().then(({data}) => setUsers([...data]))
    }, [])
    return (
        <div>

            {users.map(item => {
                const {id, name, username, email} = item;

                return (
                    <div key={id}>

                        <h2>name:{name}</h2>
                        <p>Some details</p>
                        <h3>id:{id}</h3>
                        <h3>username:{username}</h3>
                        <h3>email:{email}</h3>
                        <hr/>

                    </div>
                )
            })}

        </div>
    );
};

export {Users};