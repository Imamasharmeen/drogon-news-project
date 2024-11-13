import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div>
            <div className='flex gap-4'>
                <p className='bg-red-500 px-3 py-2'>Latest</p>
                <Marquee pauseOnHover={true} speed={100}  className='speed-'>
                    <Link to='/news'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab voluptatum optio repudiandae consectetur quis molestia</Link>
                    <Link to='/news'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab voluptatum optio repudiandae consectetur quis molestia</Link>
                    <Link to='/news'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab voluptatum optio repudiandae consectetur quis molestia</Link>
                </Marquee>

            </div>
        </div>
    );
};

export default LatestNews;