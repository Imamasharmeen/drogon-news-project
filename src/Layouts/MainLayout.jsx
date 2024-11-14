import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftNavbar from '../components/LeftNavbar';
import RightNavbar from '../components/RightNavbar';

const MainLayout = () => {
    return (
        <div className='font-poppins'>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto px-3 py-2 bg-gray-200'>
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className='w-11/12 mx-auto my-10'>
                <Navbar></Navbar>
            </nav>
            <main className='w-11/12 mx-auto grid grid-cols-12'>
                <aside className='col-span-3 border '>
                    <LeftNavbar></LeftNavbar>
                </aside>
                <section className='col-span-6 border'>main</section>
                <aside className='col-span-3 border'><RightNavbar></RightNavbar></aside>
            </main>
        </div>
    );
};

export default MainLayout;
