import React from 'react';
import Services from '../Services/Services';
import AboutUs from './AboutUs';
import Banner from './Banner';
import Cta from './Cta';
import Featured from './Featured';
import Products from './Products';
import Team from './Team';
;

const Home = () => {
    return (
        <div>
            <Banner />
            <AboutUs />
            <Services />
            <Cta />
            <Products />
            <Team />
            <Featured />
        </div>
    );
};

export default Home;
