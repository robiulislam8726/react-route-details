import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'

const Users = () => {

    const users = useLoaderData();
    // state --> data
    // state --> loader
    // use effect
    // fetch --> state set
    return (
        <div >
            <h2>Our Users: {users.length}</h2>
            <p>If ypu agree  with us please click hear</p>
            <div className="users">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;