import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import Banner from './Banner';
import Review from './Review';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Tools></Tools>
            <Reviews></Reviews>
            <Footer></Footer>

        </div>
    );
};

export default Home;