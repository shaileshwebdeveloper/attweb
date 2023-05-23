import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
  
  export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);

    const [payload, setPayload] = useState({
        
        firstname: "",
        mobile : "",
        email: "",
        designation : "",
        shift : "",
        password: "",

    })

    const navigate = useNavigate()

    const handleChange = (e) => {

        const { name, value } = e.target;
    
        setPayload({ ...payload, [name]: value });
      };

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(firstname, mobile, email, designation, shift,password)

        // axios
        // .post("https://dummyecom.onrender.com/signup", payload)
        // .then((r) => console.log(r.data);
    }; 

    
     
    const { firstname,mobile, email, designation, shift, password } = payload;

    
  
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>

             {/* FORM SUBMISSION */}

        <form onSubmit={handleSubmit}>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstname" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text"  onChange={handleChange} name='firstname' value={firstname}/>
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="mobile" isRequired>
                <FormLabel>Mobile</FormLabel>
                <Input type="number"  onChange={handleChange} name='mobile' value={mobile}/>
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email"  onChange={handleChange} name='email' value={email}/>
              </FormControl>
              <FormControl id="designation" isRequired>
                <FormLabel>Designation</FormLabel>
                <Input type="designation"  onChange={handleChange} name='designation' value={designation}/>
              </FormControl>
              <FormControl id="shift" isRequired>
                <FormLabel>Shift</FormLabel>
                <Input type="shift"  onChange={handleChange} name='shift' value={shift} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'}  onChange={handleChange}
                  name='password' value={password} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <FormControl isRequired>
                  <Input type="submit" value="Sign Up" />
                </FormControl>
                {/* <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign up
                </Button> */}
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link color={'blue.400'}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
          </form>
        </Stack> 
      </Flex>
    );
  }