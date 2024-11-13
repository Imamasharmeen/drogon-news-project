import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';

const MainLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto px-3 py-2 bg-gray-200'>
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav></nav>
            <main></main>
        </div>
    );
};

export default MainLayout;
