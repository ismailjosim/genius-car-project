import React from 'react';
import Services from '../Services/Services';
import AboutUs from './AboutUs';
import Banner from './Banner';
;

const Home = () => {
    return (
        <div>
            <Banner />
            <AboutUs />
            <Services />
        </div>
    );
};

export default Home;
