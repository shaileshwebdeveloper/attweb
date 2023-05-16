import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { TopForm } from './TopForm'

export const TopSection = () => {


  return (
 
        <Flex m="auto" w="100%" textAlign={"left"}>

            <Box border={"1px solid red"} w="48%" m="auto" h="700px" p="5%">
               
            <Text fontSize='4xl' as='b'> Real-Time Attendance Management App</Text>

<Text align="left" p="2% 0 2% 0" fontSize='2xl' pb="2rem"> Intelligent cloud-based attendance management Mobile App that enables real-time tracking and provides automated inputs for payroll processing in few minutes without any manual interventions. </Text>

<Flex fontSize='xl' pb="5px">
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
  <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
  <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
</svg><Text align="left"> Best suited for Hybrid Work Mode</Text>
</Flex>

<Flex fontSize='xl' pb="5px">
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
  <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
  <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
</svg>   <Text align="left">Easy time offs, flexible shift management</Text>
</Flex>

<Flex fontSize='xl' pb="5px">
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
  <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
  <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
</svg>     <Text align="left" >Real time data synced with Payroll</Text>
</Flex>
           
             
             

            </Box>

            <Box border={"1px solid red"} w="50%">
                 
             <TopForm />
                


            </Box>
        </Flex>


  )
}
