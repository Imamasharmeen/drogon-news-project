import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import userLogo from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const{user, logOut}= useContext(AuthContext)
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
                <div>
                    <img src={userLogo}></img> 
                </div> 
                {
                    user && user?.email?(
                    <button onClick={logOut} className='btn btn-neutral rounded-none'>Log Out</button>)   
                    :
                    (<Link to='/auth' className='btn btn-neutral rounded-none'>Login</Link>)        
                }
                
            </div>
        </div>
    );
};

export default Navbar;