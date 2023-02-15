import {useForm} from "react-hook-form";
import {userRequest} from "../../api/requests/userRequest";

const UsersForm = ({setUsers}) => {

    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({mode: 'all'})

    const submit = (data) => {
        userRequest.createUser(data).then(({data}) => setUsers((prevState) => [...prevState, data]))
    }

    return (

        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder="name"{...register('name')}/>
            <input type="text" placeholder='username'{...register('username')}/>
            <input type="email" placeholder='email'{...register('email')}/>

            <button>Create new user</button>

        </form>

    );
};

export {UsersForm};