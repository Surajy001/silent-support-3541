import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Movies from '../Pages/Movies';
import Subscription from '../Pages/Subscription';

const AllRoutes = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/subscription' element={<Subscription />}  />
        </Routes>
    </div>
  )
}

export default AllRoutes;
