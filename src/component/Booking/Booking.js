import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import travelPlace from '../../fakeData';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Header from '../Header/Header';
import './Booking.css'
import { Stack } from '@mui/system';
import { DatePicker } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import { useNavigate } from "react-router-dom";
const Booking = () => {
    let navigate = useNavigate();
    const { id } = useParams();
    const { name, description } = travelPlace.find(place => place.id === Number(id));
    const [value, setValue] = useState(new Date());
    const handleSubmit = (e) => {
        navigate("../bookingComplete", { replace: true })

        e.preventDefault()
    }
    return (
        <div className='home_Content'>
            <div className="bg-darkc">
                <Header />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <div className="container row mx-auto booking-form">
                        <div className="col-12 col-md-12 col-lg-6 col-xl-6 place-details">
                            <h2>{name}</h2>
                            <p>{description}</p>
                        </div>
                        <div className="col-12 col-md-12 col-lg-5 col-xl-5 ms-auto">
                            <form className='row form-control' onSubmit={handleSubmit}>
                                <div className="col-12">
                                    <label htmlFor="origin">Origin</label>
                                    <input type="text" name='origin' placeholder='Enter Your Origin' required />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="destination">Destination</label>
                                    <input type="text" name='destination' defaultValue={name} required />
                                </div>

                                <div className="col-12">
                                    <div className="dateandTime">
                                        <Stack spacing={4} >
                                            <div className="row">
                                                <div className="col-6">
                                                    <DatePicker label='From' renderInput={(params) => <TextField {...params} />}
                                                        value={value}
                                                        onChange={(newValue) => {
                                                            setValue(newValue)
                                                        }}
                                                        className='date'
                                                        required
                                                    />
                                                </div>
                                                <div className="col-6">
                                                    <DatePicker label='To' renderInput={(params) => <TextField {...params} />}
                                                        value={value}
                                                        onChange={(newValue) => {
                                                            setValue(newValue)
                                                        }}
                                                        className='date'
                                                    />
                                                </div>
                                            </div>
                                        </Stack>
                                    </div>
                                </div>

                                <input type="submit" value="Start Booking" className='mainBtn' />

                            </form>
                        </div>
                    </div>
                </LocalizationProvider>

            </div>
        </div>
    );
};

export default Booking;