import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  // Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';


import React, { useState } from "react";
 import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const loggeduser= JSON.parse(localStorage.getItem("user"));
   if(input.email===loggeduser.email && input.password===loggeduser.password){
    localStorage.setItem("loggedin" , true);
    navigate("/");
   }else{
    alert("Wrong Email or Password");
   }
    console.log(loggeduser);
  };

  const [input , setInput] = useState({
    email:"",
    password:""
  })

  const handleChange = (e) => {
    console.log(e.target);
    setInput({ ...input, [e.target.name]: e.target.value });
  };


  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Login to your account</Heading>
          {/* <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text> */}
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" name="email"
              placeholder="Enter Email"
              value={input.email}
              onChange={handleChange} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" name="password"
              value={input.password}
              onChange={handleChange}
              placeholder="Enter Password" />
            </FormControl>
            <Stack spacing={10}>
              {/* <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack> */}
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleLogin} 
                >
                Login
              </Button>
            </Stack>
            <Text align={'center'}>
            Don't have an account? <Link to="/register" color={'blue.400'}>Register Here</Link>
              </Text>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
