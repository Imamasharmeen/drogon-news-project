import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import user from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const{user}= useContext(AuthContext)
    return (
        <div className='flex  justify-between items-center'>
            <div>{user && user.name}</div>
            <div className='space-x-2.5'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/career'>Career</Link>
            </div>
            <div className='flex space-x-2'>
                <img src={user}></img>         
                <Link to='/auth'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;