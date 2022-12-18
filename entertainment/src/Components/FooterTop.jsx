import React from 'react'
import { ReactNode } from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Image,
  Flex,
} from '@chakra-ui/react';

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function FooterTop() {
  return (
    <Box
      bg={useColorModeValue('#0f0617')}
      color={useColorModeValue('white')} 
      borderTop="1px solid rgb(49, 54, 61)"
      marginTop={8} >
      <Container as={Stack} maxW={'8xl'} py={6} marginTop={6}> 
        <SimpleGrid columns={{ base: 1, sm: 2, md: 6 }} spacing={8}>
          <Stack align={'flex-start'}  color="#D9D9D980" fontSize="sm">
            <Text fontSize="md" fontWeight="600" color="#fff">Movies By Language</Text>
            <Link href={'#'}>Hindi Movies</Link>
            <Link href={'#'}>Telugu Movies</Link>
            <Link href={'#'}>Tamil Movies</Link>
            <Link href={'#'}>Kannada Movies</Link>
            <Link href={'#'}>Marathi Movies</Link>
            <Link href={'#'}>Bengali Movies</Link>
          </Stack>

          <Stack align={'flex-start'}  color="#D9D9D980" fontSize="sm">
            <Text fontSize="md" fontWeight="600" color="#fff">Movies By Genre</Text>
            <Link href={'#'}>Action Movies </Link> {/* Gupta Bewafa Hai */}
            <Link href={'#'}>Comedy Movies</Link>
            <Link href={'#'}>Romantic Movies</Link>
            <Link href={'#'}>Horror Movies</Link>
            <Link href={'#'}>Crime Movies</Link>
            <Link href={'#'}>Thriller Movies</Link>
          </Stack>

          <Stack align={'flex-start'}  color="#D9D9D980" fontSize="sm">
            <Text fontSize="md" fontWeight="600" color="#fff">Movies By Celeb</Text>
            <Link href={'#'}>Salman Khan Movies</Link>
            <Link href={'#'}>Suraj Yadav</Link>
            <Link href={'#'}>Amitabh Bachchan Movies</Link>
            <Link href={'#'}>Vicky Kaushal Movies</Link>
            <Link href={'#'}>Nawazuddin Siddiqui Movies</Link>
            <Link href={'#'}>Akshay Kumar Movies</Link>
          </Stack>

          <Stack align={'flex-start'}  color="#D9D9D980" fontSize="sm">
            <Text fontSize="md" fontWeight="600" color="#fff">Movies By Year</Text>
            <Link href={'#'}>New Movies</Link>
            <Link href={'#'}>2022 Movies</Link>
            <Link href={'#'}>2021 Movies</Link>
            <Link href={'#'}>2020 Movies</Link>
            <Link href={'#'}>2019 Movies</Link>
            <Link href={'#'}>2018 Movies</Link>
          </Stack>

          <Stack align={'flex-start'}  color="#D9D9D980" fontSize="sm">
            <Text fontSize="md" fontWeight="600" color="#fff">Top Bollywood  Movies</Text>
            <Link href={'#'}>The Kashmir Files</Link>
            <Link href={'#'}>Dream Girl</Link>
            <Link href={'#'}>Kedarnath</Link>
            <Link href={'#'}>Suraj Pe Mangal Bhari</Link>
            <Link href={'#'}>Commando 3</Link>
            <Link href={'#'}>Judgementall Hai Kya</Link>
          </Stack>

          <Stack align={'flex-start'} color="#D9D9D980" fontSize="sm">
            <Text fontSize="md" fontWeight="600" color="#fff">Top South Movies</Text>
            <Link href={'#'}>RRR</Link>
            <Link href={'#'}>Aravinda Sametha Veera Raghava </Link>
            <Link href={'#'}>Dikkiloona</Link>
            <Link href={'#'}>Anando Brahma</Link>
            <Link href={'#'}>Valimai</Link>
            <Link href={'#'}>Bangarraju</Link>
          </Stack>
          
        </SimpleGrid>
        <br/>
      </Container>

      
    </Box>
  );
}