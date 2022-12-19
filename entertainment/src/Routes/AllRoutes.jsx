import { ChakraProvider } from '@chakra-ui/react';
import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Movies from '../Pages/Movies';
import MoviesDetails from '../Pages/MoviesDetails';
import Payment from '../Pages/Payment';
import Register from '../Pages/Register';
import Subscription from '../Pages/Subscription';

const AllRoutes = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<ChakraProvider> <Login /> </ChakraProvider>} />
          <Route path='/register' element={ <ChakraProvider> <Register /> </ChakraProvider> } />
          <Route path='/movies' element={<Movies />} />
          <Route path='/movies/:id' element={<ChakraProvider> <MoviesDetails /> </ChakraProvider>} />
          <Route path='/subscription' element={ <ChakraProvider> <Subscription /></ChakraProvider>}  />
          <Route path='/payment' element={ <ChakraProvider> <Payment /></ChakraProvider>}  />

        </Routes>
    </div>
  )
}

export default AllRoutes;
