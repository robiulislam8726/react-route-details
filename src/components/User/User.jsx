import { Link, useNavigate } from "react-router-dom";

const User = ({user}) => {
    const { id, name, email, phone} = user;
    const navigate = useNavigate();
    const userStyle ={
        border : '2px solid yellow',
        padding : '5px',
        borderRadius: '20px'
        
    }
    const handleShowDetail =() =>{
        navigate(`/user/${id}`)
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>email : {email}</p>
            <p>phone: {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}>
                <button onClick={handleShowDetail} >Click Me</button>
            </Link>
        </div>
    );
};

export default User;