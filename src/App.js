import './App.css';
import Home from './component/Home/Home';
import { Routes, Route, } from 'react-router-dom'
import Booking from './component/Booking/Booking';
import { createContext, useState } from 'react';
import BookingComplete from './component/BokkingComplete/BookingComplete';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Login from './component/LogIn/Login';
export const UserContext = createContext();

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState({})
  return (
    <UserContext.Provider value={[userLoggedIn, setUserLoggedIn]}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/bookingComplete' element={<PrivateRoute><BookingComplete /></PrivateRoute>} />
        <Route path='/place/:id' element={<Booking />} />

      </Routes>
    </UserContext.Provider>
  );
}

export default App;
