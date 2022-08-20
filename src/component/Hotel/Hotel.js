import React from 'react';
import { FaStar } from 'react-icons/fa';
import './Hotel.css'
const HotelFound = (props) => {
    const { name, price, image, pricepernight, stars, rating, description } = props.room;
    return (
        <>
            <div className="col-6 room-image">
                <img src={image} alt={name} />
            </div>
            <div className="col-6 room-info">
                <h1>{name}</h1>
                <p>4 guests 2 bedroom 2 bed 2 baths</p>
                <p>{description}</p>
                <div className="ratingandPrice">
                    <p><FaStar /> {stars}({rating}) </p>
                    <h5><span>${pricepernight}</span>/night ${price}/total</h5>
                </div>
            </div>
        </>
    );
};

export default HotelFound;