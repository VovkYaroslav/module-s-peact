
const Users = ({users}) => {
    return (
        <div>
      {users.map(item => {
                const {id, name, username, email} = item;

                return (
                    <div key={id}>
                        <h1>User № {id}</h1>
                        <h3>name:{name}</h3>
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