import './App.css';
import Home from './component/Home/Home';
import { Routes, Route, } from 'react-router-dom'
import Booking from './component/Booking/Booking';
import { createContext, useState } from 'react';
import BookingComplete from './component/BokkingComplete/BookingComplete';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Login from './component/LogIn/Login';
import Destination from './component/Destination/Destination';
import Blog from './component/Blog/Blog';
import Contract from './component/Contact/Contact'
export const UserContext = createContext();

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState({});
  // console.log(userLoggedIn);
  return (
    <UserContext.Provider value={[userLoggedIn, setUserLoggedIn]}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contract />} />
        <Route path='/login' element={<Login />} />
        <Route path='/bookingComplete/:key' element={<PrivateRoute><BookingComplete /></PrivateRoute>} />
        <Route path='/place/:id' element={<Booking />} />

      </Routes>
    </UserContext.Provider>
  );
}

export default App;
