import React, { useEffect, useState } from 'react';
import Header2 from '../Header2/Header2';
import { getDatabase } from '../utilities/fakeDb';
import fakeData from '../../fakeData'
import Hotel from '../../hotel';
import { useParams } from 'react-router-dom';
import travelPlace from '../../fakeData';
import HotelFound from '../Hotel/Hotel';
const BookingComplete = () => {
    const { key } = useParams()
    const { name, category } = travelPlace.find(place => place.id === Number(key));
    const [hotel, setHotel] = useState([]);

    useEffect(() => {
        const hotelall = Hotel.filter(room => room.category === category)
        setHotel(hotelall)
    }, [category])
    const mapurl = `https://maps.google.com/maps?q=${category}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
    return (
        <div>
            <Header2 />
            <div className="container row mx-auto booking-conatiner mt-5">
                <div className="col-12 col-md-12 col-lg-6 col-xl-6 bookin-details">
                    <div className="row hotel-room" >
                        <h2>Stay in {name}</h2>
                        {
                            hotel.map(ht => <HotelFound room={ht} key={ht.id} ></HotelFound>)
                        }
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-6 col-xl-6 bookin-map">
                    <div className="googleMap">
                        <iframe width="540" height="600" id="gmap_canvas" src={mapurl} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingComplete;