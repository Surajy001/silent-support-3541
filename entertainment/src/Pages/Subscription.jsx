/*import React from 'react'

const Subscription = () => {
  return (
    <div>Subscription</div>
  )
}

export default Subscription
*/



import { ReactNode } from 'react';
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import {Link as RouterLink} from "react-router-dom";


function PriceWrapper({ children }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}
      color="white"
      >
      {children}
    </Box>
  );
}

export default function ThreeTierPricing() {
  return (
    <Box py={12} color="white">
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
        Choose your premium plan
        </Heading>
        {/* <Text fontSize="lg" color={'gray.500'}>
          Start with 14-day free trial. No credit card needed. Cancel at
          anytime.
        </Text> */}
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}>
        
        <PriceWrapper>
        <RouterLink to={`/payment`} >
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Premium HD
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                ₹
              </Text>
              <Text fontSize="4xl" fontWeight="600">
              399
              </Text>
            </HStack>
            <Text fontSize="xl" color="gray.500">
               3 Months
              </Text>
          </Box>
          {/* <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                unlimited build minutes
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Lorem, ipsum dolor.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                5TB Lorem, ipsum dolor.
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="red" variant="outline">
                Start trial
              </Button>
            </Box>
          </VStack> */}
           </RouterLink>
        </PriceWrapper>
     

        <PriceWrapper>
          <RouterLink to={`/payment`} >
          <Box position="relative">
            <Box
              position="absolute"
              top="-30px"
              left="50%"
              style={{ transform: 'translate(-50%)' }}
              >
              <Text
                // textTransform="uppercase"
                bg={useColorModeValue('#5c2ade')}
                px={3}
                py={1}
                color={useColorModeValue('#fff')}
                fontSize="sm"
                fontWeight="600"
                // rounded="xl"
                >
                Suggested
              </Text>
            </Box>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
              Premium HD
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  ₹
                </Text>
                <Text fontSize="4xl" fontWeight="600">
                  699
                </Text>
              </HStack>
              <Text fontSize="xl" color="gray.500">
                 12 Months
                </Text>
            </Box>
          </Box>
          </RouterLink>
        </PriceWrapper>

        <PriceWrapper>
          <RouterLink to={`/payment`} >
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
            Premium 4K
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                ₹
              </Text>
              <Text fontSize="4xl" fontWeight="600">
                1499
              </Text>
            </HStack>
            <Text fontSize="xl" color="gray.500">
              12 Months
              </Text>
          </Box>
          </RouterLink>
        </PriceWrapper>
      </Stack>
    </Box>
  );
}