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
import { FaTwitter, FaYoutube, FaInstagram ,FaFacebook} from 'react-icons/fa';

// import AppStoreBadge from '@/components/AppStoreBadge';
import ReactAppStoreBadge from 'react-app-store-badge';
// import PlayStoreBadge from '@/components/PlayStoreBadge';

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

export default function LargeWithAppLinksAndSocial() {
  return (
    <Box
      bg={useColorModeValue('#0f0617')}
      color={useColorModeValue('white')} 
      borderTop="1px solid rgb(49, 54, 61)">
      <Container as={Stack} maxW={'8xl'} py={6}>
      <Flex justifyContent={'space-between'}>
      <Stack direction='row' gap={4}  justifyContent="flex-start" p={1} >
            <Text fontSize="xl" fontWeight="500" >Download Apps</Text>
            <Image  w="100px" h="45px" borderRadius={5} src="https://w7.pngwing.com/pngs/91/37/png-transparent-google-play-android-app-store-android-text-logo-microsoft-store.png" />
            <Image  w="100px" h="45px"  src="https://www.seekpng.com/png/full/22-227594_download-on-the-app-store-badge-available-on.png" />
           
            {/* <AppStoreBadge /> */}
            {/* <ReactAppStoreBadge
  textHeading="Available on the"
  textStoreName="App Store"
  url="https://apps.apple.com/us/app/cheerswipe/id1468158095?ls=1"
  /> */}
  {/* <Box data-app-store-url="https://apps.apple.com/us/app/cheerswipe/id1468158095?ls=1"></Box> */}
            {/* <PlayStoreBadge /> */}
        
          </Stack>
           {/* <Stack> */}
           <Box
        // borderTopWidth={1}
        // borderStyle={'solid'}
        // borderColor={useColorModeValue('gray.200', 'gray.700')}
        >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>Connect with us</Text>
          <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Facebook'} href={'#'} borderStyle={'solid'}>
              <FaFacebook />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            
          </Stack>
        </Container>
      </Box>
            {/* </Stack>  */}
          </Flex> <br /> 
          <Flex gap={6} color="#D9D9D999">
             <Link href={'#'}>About US</Link> |
             <Link href={'#'}>Help Center</Link> |
             <Link href={'#'}>Privacy Policy </Link> |
             <Link href={'#'}>Terms of Use</Link>
           </Flex> <br/><br/>
        
        <SimpleGrid columns={{ base: 1, sm: 2, md: 6 }} spacing={8}>
          <Stack align={'flex-start'}  color="#D9D9D980" fontSize="sm">
            <Text fontSize="md" fontWeight="600" color="#fff">Popular TV Shows</Text>
            <Link href={'#'}>Kumkum Bhagya</Link>
            <Link href={'#'}>Kundali Bhagya</Link>
            <Link href={'#'}>Bhagya Lakshmi</Link>
            <Link href={'#'}>Tujhse Hai Raabta</Link>
            <Link href={'#'}>Kyun Rishton Mein katti Ba</Link>
          </Stack>

          <Stack align={'flex-start'}  color="#D9D9D980" fontSize="sm">
            <Text fontSize="md" fontWeight="600" color="#fff">Premium Movies</Text>
            <Link href={'#'}>Kya Meri Sonam Gupta Bewafa </Link> {/* Gupta Bewafa Hai */}
            <Link href={'#'}>Helmet</Link>
            <Link href={'#'}>200 Halla Ho</Link>
            <Link href={'#'}>14 Phere</Link>
            <Link href={'#'}>Dial 100</Link>
          </Stack>

          <Stack align={'flex-start'}  color="#D9D9D980" fontSize="sm">
            <Text fontSize="md" fontWeight="600" color="#fff">Popular LIVE TV Channels</Text>
            <Link href={'#'}>Aaj Tak</Link>
            <Link href={'#'}>Zee News</Link>
            <Link href={'#'}>Zee TV HD</Link>
            <Link href={'#'}>&TV HD</Link>
            <Link href={'#'}>Zee Marathi HD</Link>
          </Stack>

          <Stack align={'flex-start'}  color="#D9D9D980" fontSize="sm">
            <Text fontSize="md" fontWeight="600" color="#fff">Popular Web Series</Text>
            <Link href={'#'}>SunFlower</Link>
            <Link href={'#'}>Jeet KI Zid</Link>
            <Link href={'#'}>Bicchoo Ka Khel</Link>
            <Link href={'#'}>State of Siege: 26/11</Link>
            <Link href={'#'}>Naxalbari</Link>
            <Link href={'#'}>Tripling</Link>
          </Stack>

          <Stack align={'flex-start'}  color="#D9D9D980" fontSize="sm">
            <Text fontSize="md" fontWeight="600" color="#fff">Bollywood Top Celebrities</Text>
            <Link href={'#'}>Sunny Leone</Link>
            <Link href={'#'}>Disha Patani</Link>
            <Link href={'#'}>Suraj Yadav</Link>
            <Link href={'#'}>Salman Khan</Link>
            <Link href={'#'}>Nora Fatehi</Link>
          </Stack>

          <Stack align={'flex-start'} color="#D9D9D980" fontSize="sm">
            <Text fontSize="md" fontWeight="600" color="#fff">Game & News</Text>
            <Link href={'#'}>Play</Link>
            <Link href={'#'}>Stories</Link>
            <Link href={'#'}>Articles</Link>
          </Stack>
          
        </SimpleGrid>
        <br/><br/><br/>

        <Stack align={'flex-start'} color="#D9D9D980" fontSize="sm">
          <Text>Best viewed on Google Chrome 80+, Microsoft Edge 81+, Mozilla Firefox 75+, Safari 5.1.5+</Text>
          <Text>Copyright © 2022 Zee Entertainment Enterprises Ltd. All rights reserved.</Text>
        </Stack>
      </Container>

      
    </Box>
  );
}