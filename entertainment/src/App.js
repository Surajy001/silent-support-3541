import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import AllRoutes from './Routes/AllRoutes';

// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App" >
      <ChakraProvider>
        <Navbar />
      </ChakraProvider>
       <AllRoutes />
       <ChakraProvider>
       <Footer />
      </ChakraProvider>
       
    </div>
  );
}

export default App;
