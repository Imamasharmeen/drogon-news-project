import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import userLogo from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const{user}= useContext(AuthContext)
    console.log(user)
    return (
        <div className='flex  justify-between items-center'>
            <div>User:{user && user.email}</div>

            <div className='space-x-2.5'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/career'>Career</Link>
            </div>
            <div className='flex space-x-2'>
                <img src={userLogo}></img>         
                <Link to='/auth'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;