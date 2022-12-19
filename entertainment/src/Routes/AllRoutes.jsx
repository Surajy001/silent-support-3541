import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Logout from "../Pages/Logout";
import MainpartDetails from "../Pages/MainpartDetails";
import Movies from "../Pages/Movies";
import MoviesDetails from "../Pages/MoviesDetails";
import Payment from "../Pages/Payment";
import Register from "../Pages/Register";
import Subscription from "../Pages/Subscription";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  
  const privateRoutes = [
    {
      path: "/movies/:id",
      element: <MoviesDetails />,
    },
    {
      path: "/subscription",
      element: <Subscription />,
    },
    {
      path: "/payment",
      element: <Payment />,
    },
    {
      path: "/mainpart/:id",
      element: <MainpartDetails />,
    },
  ];

  const nonChakraRoutes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/movies",
      element: <Movies />,
    },
    {
      path: "/logout",
      element: <Logout />,
    },
  ];

  const authRoutes = [
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ];

  return (
    <div>
      <Routes>
        {nonChakraRoutes.map((ele, key) => (
          <Route key={key} path={ele.path} element={ele.element} />
        ))}
        {authRoutes.map((ele, key) => (
          <Route
            key={key}
            path={ele.path}
            element={<ChakraProvider> {ele.element} </ChakraProvider>}
          />
        ))}
        {privateRoutes.map((ele, key) => (
          <Route
            key={key}
            path={ele.path}
            element={
              <ChakraProvider>
                <PrivateRoute>{ele.element}</PrivateRoute>
              </ChakraProvider>
            }
          />
        ))}
        {/* <Route path='/' element={<Home />} />
          <Route path='/login' element={<ChakraProvider> <Login /> </ChakraProvider>} />
          <Route path='/register' element={ <ChakraProvider> <Register /> </ChakraProvider> } />
          <Route path='/movies/:id' element={<ChakraProvider> <MoviesDetails /> </ChakraProvider>} />
          <Route path='/movies/:id' element={<ChakraProvider><PrivateRoute><MoviesDetails /></PrivateRoute>  </ChakraProvider>} />
          <Route path='/mainpart/:id' element={<ChakraProvider> <MainpartDetails /> </ChakraProvider>} />
          <Route path='/subscription' element={ <ChakraProvider> <Subscription /></ChakraProvider>}  />
          <Route path='/payment' element={ <ChakraProvider> <Payment /></ChakraProvider>}  />
          <Routes path='/movies' element={<Movies />} /> */}
      </Routes>
    </div>
  );
};

export default AllRoutes;
