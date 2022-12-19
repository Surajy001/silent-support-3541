import React, { useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from '@chakra-ui/react';
import { MdLocalShipping } from 'react-icons/md';

const MainpartDetails = () => {

  const [moviesData , setMoviesData]=useState([])

  const {id}=useParams();
  console.log(id);

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=a390a2f1033c8a75b6556ff75a58b155&language=en-US`)
    .then((res)=>{
      setMoviesData(res.data)
    }).catch((err)=>console.log(err));
},[]);

console.log(moviesData);

const {poster_path,name,vote_average,first_air_date,overview,popularity,production_companies,number_of_episodes,number_of_seasons }=moviesData

  return (
    <Container maxW={'7xl'} color="#fff" textAlign="start">
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={"https://image.tmdb.org/t/p/w500"+poster_path}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
              // fontSize={{ base: '16px', lg: '18px' }}
              fontWeight={'400'}
              textTransform={'uppercase'}
              mb={'4'}
                lineHeight={1.1}
                
                 fontSize={{ base: '2xl', sm: '4xl', lg: '4xl' }}
                ><span style={{color:"#D69E2E"}}>Name : </span>
               {name}
              </Heading>
              <Text
                // color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={200}
                fontSize={'2xl'}><span style={{color:"#D69E2E", fontWeight:"400"}}> Overview : </span>
              {overview}
              </Text>

              <Text 
                  // color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'400'}>
                  <span style={{color:"#D69E2E",fontWeight:"400"}}> Release :  </span>{first_air_date}
                </Text>

                <Text 
                  // color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'400'}>
                  <span style={{color:"#D69E2E",fontWeight:"400"}}> Rating :  </span>{Math.floor(vote_average)}
                </Text>

                <Text 
                  // color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'400'}>
                  <span style={{color:"#D69E2E",fontWeight:"400"}}> Popularity :  </span>{Math.floor(popularity)}
                </Text>

                <Text 
                  // color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'400'}>
                  <span style={{color:"#D69E2E",fontWeight:"400"}}> Seasons :  </span>{number_of_seasons}
                </Text>

                <Text 
                  // color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'400'}>
                  <span style={{color:"#D69E2E",fontWeight:"400"}}>  Episodes :  </span>{number_of_episodes} 
                </Text>
            </Box>
            </Stack>
        </SimpleGrid>
      </Container>
  )
}

export default MainpartDetails;
