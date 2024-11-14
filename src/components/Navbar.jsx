import React from 'react';
import { Link } from 'react-router-dom';
import user from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex  justify-between items-center'>
            <div></div>
            <div className='space-x-2.5'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/career'>Career</Link>
            </div>
            <div className='flex space-x-2'>
                <img src={user}></img>         
                <button>Login</button>
            </div>
        </div>
    );
};

export default Navbar;