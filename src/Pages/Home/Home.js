import React from 'react';
import Navbar from '../Shared/Navbar';
import Banner from './Banner';
import Review from './Review';
import Tools from './Tools';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Tools></Tools>
            <Review></Review>

        </div>
    );
};

export default Home;