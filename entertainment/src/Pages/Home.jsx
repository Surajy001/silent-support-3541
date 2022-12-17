import React from 'react'
import TopCarousel from '../Components/TopCarousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Box, ChakraProvider } from '@chakra-ui/react';
import Mainpart from '../Components/Mainpart';

const Home = () => {
  return (
    <>
     <Box marginTop={30}>
      <TopCarousel /><br /><br />
      {/* <ChakraProvider> */}
      <Mainpart />
      {/* </ChakraProvider> */}
     
      </Box>
    </>
  )
}

export default Home