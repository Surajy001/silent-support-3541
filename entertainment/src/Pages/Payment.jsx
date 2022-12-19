import React, { useState } from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Text,
    Input,
    Button,
  } from '@chakra-ui/react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Payment = () => {

    const navigate=useNavigate();

    const successful=()=>{
         Swal.fire({
            title:'Your Payment Successful ',
            icon:'success',
            showConfirmButton: false,
            timer: 2000
         }) 
         navigate("/"); 
    }

    return(
    <div style={{marginTop:"20px"}}>
        <Text color="#fff" fontSize="4xl" fontWeight="500">Make Payment</Text>
            <FormControl w={350} m="auto" mb={20} mt={5} border="1px solid " bg="white" p={10}>
            <FormLabel>Card Number</FormLabel>
            <Input variant='flushed' type="number" placeholder='Enter card number' /> 
            {/* <FormHelperText>We'll never share your </FormHelperText> */}
            <FormLabel mt={5}>Expiry</FormLabel>
            <Input variant='flushed' type="date" size="md" placeholder='Select Date' />
            <FormLabel mt={5} >CVV</FormLabel>
            <Input variant='flushed' type="number" placeholder='CVV' />
            <Button bg="#8230C6" mt={10}  p="5px 25px" onClick={()=>successful()}>Pay Now</Button>
            </FormControl>
     </div>
  )
}

export default Payment