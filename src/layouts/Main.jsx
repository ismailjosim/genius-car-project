import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Nav from './Nav';

const Main = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Nav />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;
