import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import Banner from './Banner';
import Info from './Info';
import Review from './Review';
import Reviews from './Reviews';
import Stats from './Stats';
import Tools from './Tools';
import Video from './Video';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Tools></Tools>
            <Reviews></Reviews>
            <Stats></Stats>
            <Video></Video>
            <Info></Info>


        </div>
    );
};

export default Home;