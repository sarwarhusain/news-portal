import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import NavBar from '../components/NavBar';
import LeftNavbar from '../components/layout-components/LeftNavbar';
import RightNav from '../components/layout-components/RightNav';

const HomeLayout = () => {
    return (
        <div className='font-poppins'>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto'>
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className='w-11/12 mx-auto'>
                <NavBar></NavBar></nav>
            <main className='w-11/12 mx-auto pt-5 grid grid-cols-12'>
                <aside className='left col-span-3'><LeftNavbar></LeftNavbar></aside>
                <section className='main col-span-6'><Outlet /></section>
                <aside className='right col-span-3'><RightNav></RightNav></aside>
            </main>
        </div>
    );
};

export default HomeLayout;