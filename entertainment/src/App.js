import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
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
