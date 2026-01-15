import React from 'react';
import HeroSection from './HeroSection';
import Details from '../Details/Details';
import Movies from './Movies';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <Movies />
            <Details />
        </div>
    );
};

export default Home;