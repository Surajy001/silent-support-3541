/*import React from 'react'

const Footer = () => {
  return (
    <div>Footer</div>
  )
}

export default Footer;
*/
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
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

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
      color={useColorModeValue('white')} mt={5}>
      <Container as={Stack} maxW={'8xl'} py={10}>
      <Flex direction='row' gap={4}  justifyContent="flex-start" p={2} >
            <Text fontSize="xl" fontWeight="500" >Download Apps</Text>
            <Image  w="100px" h="45px"  src="https://e7.pngegg.com/pngimages/384/968/png-clipart-google-play-app-store-android-mobile-app-android-text-logo.png" />
            <Image  w="100px" h="45px"  src="https://www.seekpng.com/png/full/22-227594_download-on-the-app-store-badge-available-on.png" />
           
            {/* <AppStoreBadge /> */}
            {/* <ReactAppStoreBadge
  textHeading="Available on the"
  textStoreName="App Store"
  url="https://apps.apple.com/us/app/cheerswipe/id1468158095?ls=1"
  /> */}
  {/* <Box data-app-store-url="https://apps.apple.com/us/app/cheerswipe/id1468158095?ls=1"></Box> */}
            {/* <PlayStoreBadge /> */}
        
          </Flex>
          <Flex gap={6}>
             <Link href={'#'}>About US</Link> |
             <Link href={'#'}>Help Center</Link> |
             <Link href={'#'}>Privacy Policy </Link> |
             <Link href={'#'}>Terms of Use</Link>
           </Flex> <br/><br/>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 6 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Popular TV Shows</ListHeader>
            <Link href={'#'}>About Us</Link>
            <Link href={'#'}>Blog</Link>
            <Link href={'#'}>Careers</Link>
            <Link href={'#'}>Contact Us</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader fontSize="sm" >Premium Movies</ListHeader>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Safety Center</Link>
            <Link href={'#'}>Community Guidelines</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <Text fontSize="md" fontWeight="600">Popular LIVE TV Channels</Text>
            <Link href={'#'}>Cookies Policy</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Law Enforcement</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Popular Web Series</ListHeader>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Safety Center</Link>
            <Link href={'#'}>Community Guidelines</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Bollywood Top Celebrities</ListHeader>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Safety Center</Link>
            <Link href={'#'}>Community Guidelines</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Game & News</ListHeader>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Safety Center</Link>
            <Link href={'#'}>Community Guidelines</Link>
          </Stack>
          
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>© 2022 Chakra Templates. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}