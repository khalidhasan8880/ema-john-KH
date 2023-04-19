import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext)
    const handleLogOut=()=>{
        logOut().then(() => {
            console.log('sign out successfully');
          }).catch((error) => {
            console.log(error);
          });
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                {
                    user&& <a>{user.email}</a>
                }
                <Link onClick={handleLogOut}>log Out</Link>
            </div>
        </nav>
    );
};

export default Header;