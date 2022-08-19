import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from "react-router-dom";
const Place = (props) => {
    const { name, description, id } = props.place;
    return (
        <div className='hero-car'>
            <h2>{name}</h2>
            <p>{description}</p>
            <Link to={`/place/${id}`}>
                <button className='mainBtn'>Booking <BsArrowRight /></button>
            </Link>
        </div >
    );
};

export default Place;