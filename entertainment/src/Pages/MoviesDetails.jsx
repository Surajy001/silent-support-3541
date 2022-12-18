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

const MoviesDetails = () => {

  const [moviesData , setMoviesData]=useState([])

  const {id}=useParams();
  console.log(id);

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=a390a2f1033c8a75b6556ff75a58b155&language=en-US`)
    .then((res)=>{
      setMoviesData(res.data)
    }).catch((err)=>console.log(err));
},[]);

console.log(moviesData);

const {poster_path,title,vote_average,release_date,overview,popularity,production_companies,budget,revenue,runtime}=moviesData

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
               {title}
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
                  <span style={{color:"#D69E2E",fontWeight:"400"}}> Release :  </span>{release_date}
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
                  <span style={{color:"#D69E2E",fontWeight:"400"}}>  Budget :  </span>${budget}
                </Text>

                <Text 
                  // color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'400'}>
                  <span style={{color:"#D69E2E",fontWeight:"400"}}>  Revenue :  </span>${revenue}
                </Text>

                <Text 
                  // color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'400'}>
                  <span style={{color:"#D69E2E",fontWeight:"400"}}>  Runtime :  </span>{runtime} Minutes
                </Text>
            </Box>
  
            {/* <Stack  
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }> */}
              {/* <VStack border="1px solid" textAlign="Start">
                <Text 
                  // color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                  <span style={{color:"gold"}}> Release :  </span>{release_date}
                </Text>
                <Text fontSize={'lg'}>
                  
                </Text>
              </VStack> */}
              {/* <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Production Companies
                </Text>
  
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>{production_companies}</ListItem>
                    <ListItem>Master Chronometer Certified</ListItem>{' '}
                    <ListItem>Tachymeter</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>Anti‑magnetic</ListItem>
                    <ListItem>Chronometer</ListItem>
                    <ListItem>Small seconds</ListItem>
                  </List>
                </SimpleGrid>
              </Box> */}
              {/* <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Product Details
                </Text>
  
                <List spacing={2}>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Between lugs:
                    </Text>{' '}
                    20 mm
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Bracelet:
                    </Text>{' '}
                    leather strap
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Case:
                    </Text>{' '}
                    Steel
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Case diameter:
                    </Text>{' '}
                    42 mm
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Dial color:
                    </Text>{' '}
                    Black
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Crystal:
                    </Text>{' '}
                    Domed, scratch‑resistant sapphire crystal with anti‑reflective
                    treatment inside
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Water resistance:
                    </Text>{' '}
                    5 bar (50 metres / 167 feet){' '}
                  </ListItem>
                </List>
              </Box> */}
            </Stack>
  
            {/* <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}>
              Add to cart
            </Button> */}
  
            {/* <Stack direction="row" alignItems="center" justifyContent={'center'}>
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack> */}
          {/* </Stack> */}
        </SimpleGrid>
      </Container>
  )
}

export default MoviesDetails;
