import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './Hero.css'
import travelPlace from '../../fakeData';
import Place from '../Place/Place';
const Hero = () => {
    return (
        <div className='hero-container'>
            <Slider
                customPaging={(i) => {
                    return (
                        <div className='travel-title'>
                            <img src={travelPlace[i].img} alt="" />
                            <h1>{travelPlace[i].name}</h1>
                        </div>)
                }}
                dotsClass='slick-dots custom-ind'
                dots
            >
                {
                    travelPlace.map(place => <Place place={place} key={place.id}></Place>)
                }
            </Slider>
        </div>
    );
};

export default Hero;