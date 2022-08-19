import React from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';

const Home = () => {
    return (
        <div className='home_Content'>
            <div className="bg-darkc">
                <Header />
                <Hero />
            </div>
        </div>
    );
};

export default Home;