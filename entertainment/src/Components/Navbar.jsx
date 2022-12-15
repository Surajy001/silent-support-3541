/*import React from 'react'

const Navbar = () => {
  return (
    <div>Navbar</div>
  )
}

export default Navbar
*/

import { ReactNode } from 'react';
import React from 'react';
import {Link as RouterLink} from "react-router-dom";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
  Input,
 
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { CgMenuGridR } from 'react-icons/cg';
import { BiSearch } from 'react-icons/bi';


class Question extends React.Component {
  render() {
    return <h3> Lets go for a <FaBeer />? </h3>
  }
}
const NavLink = ({ children })=> (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('#0f0617')} px={6} py={4} color="white">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          
          <Flex alignItems={'center'} gap={7}>
          <Box><RouterLink to="/"> <img src="../images/Entertainment.png" alt="1" width="50px" /></RouterLink></Box>
          <RouterLink to="/"><Text>Home</Text> </RouterLink>
           <RouterLink to="#"><Text>Tv Shows</Text></RouterLink>
           <RouterLink to="/movies"> <Text>Movies</Text></RouterLink>
           <RouterLink to="#"> <Text>Web Series</Text></RouterLink>
           <RouterLink to="#"> <Text>News</Text></RouterLink>
           {/* <RouterLink> <Button>ert</Button></RouterLink> */}
            <CgMenuGridR size={"22"} />
          </Flex>
           
          <Flex alignItems={'center'}>
            <Box display="flex" alignItems={'center'} border="1px solid grey" marginRight={5} p="0 10px" borderRadius={7} cursor="pointer">
            <BiSearch size={"25"}  />
          <Input placeholder='Search for Movies,Shows etc'  w={300} p={1.5} variant='unstyled'  />
            </Box>
            {/* <BiSearch size={"45"} border="1px solid" />
          <Input  placeholder='Search for Movies,Shows etc' marginRight={5} /> */}
          {/* <input padding="10px" placeholder='Search for Movies,Shows etc'/> */}
          <RouterLink to="/login"><Button  marginRight={5}  colorScheme="purple" >Login</Button></RouterLink>
          <RouterLink to="/subscription">
          <Button border="0px solid" colorScheme='purple' >BUY PLAN</Button>
          </RouterLink>
          
            <Stack direction={'row'} spacing={7} marginLeft={5}>
              <Button onClick={toggleColorMode} colorScheme="orange">
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
                
            </Stack>
           
          </Flex>
        </Flex>
      </Box>
    </>
  );
}