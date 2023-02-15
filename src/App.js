import {UsersForm} from "./components/userForm/UsersForm";
import {Users} from "./components/users/Users";
import {useEffect, useState} from "react";
import {userRequest} from "./api/requests/userRequest";

const App = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userRequest.getAll().then(({data}) => setUsers([...data]))
    }, [])


    return (
        <div>

            <UsersForm setUsers={setUsers}/>
            <hr/>
            <Users users={users}/>

        </div>
    );
};

export {App};