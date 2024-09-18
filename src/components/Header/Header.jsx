import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>Nav Bar</h2>
            <nav>
                <Link to="/">Home</Link>
                <NavLink to="/users">Users</NavLink>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/user">Users</Link>
            </nav>
        </div>
    );
};

export default Header;