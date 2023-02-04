import {
  Flex,
  Box,
  FormControl,
  Checkbox,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Link,
  Divider,
  Image,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { Navigate, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthContext/context';
import { useContext } from 'react';

export default function SignupCard() {
  let { setUserCreated, setUserExists, setWrongEmail, setWrongPassword } = useContext(AuthContext)
  const [showPassword, setShowPassword] = useState(false);
  let [isValid, setValid] = useState(false)
  let mail = useRef(null);
  let pass = useRef(null);
  let conPass = useRef(null);


  function isValidPassword(password) {
    // Minimum password length
    let minLength = 8;

    // Regular expression to check for at least one letter and one number
    let letterNumber = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/;

    // Regular expression to check for at least one special character
    let specialChar = /[!@#$%^&*(),.?":{}|<>]/;

    // Check password length
    if (password.length < minLength) {
      return false;
    }

    // Check for letter and number
    if (!password.match(letterNumber)) {
      return false;
    }

    // Check for special character
    if (!password.match(specialChar)) {
      return false;
    }

    // If all checks pass, return true
    return true;
  }
  function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) return false;

    // Check for consecutive dots in the local part
    if (/\.{2,}/.test(email.split("@")[0])) return false;

    // Check for dots at the beginning or end of the local part
    if (/^\.|\.$/.test(email.split("@")[0])) return false;

    // Check for a minimum length of 2 for the top-level domain
    if (email.split(".")[email.split(".").length - 1].length < 2) return false;

    return true;
  }

  async function CreateUser() {
    let condition = true
    if (isValidPassword(pass.current.value) && isValidEmail(mail.current.value) && pass.current.value == conPass.current.value) {
      let user = {
        email: mail.current.value,
        pass: pass.current.value,
        conPass: conPass.current.value,
        cart: []
      }
      let data = await axios.get("https://festive-candle-fontina.glitch.me/shop")

      let users = data.data

      users.forEach(el => {
        if (el.email == user.email) {
          condition = false
          setUserExists(true)
          setTimeout(() => setUserExists(false), 3000)
        }
      });
      if (condition) {
        axios.post("https://festive-candle-fontina.glitch.me/shop", user)
      }

      setUserCreated(true)
      setTimeout(() => setUserCreated(false), 3000)
      setValid(true)
    }
    else{
      if (!isValidEmail(mail.current.value)) {
        setWrongEmail(true)
        setTimeout(() => setWrongEmail(false), 3000)
        return
      }
      else if (!isValidPassword(pass.current.value)) {
        setWrongPassword(true)
        setTimeout(() => setWrongPassword(false), 3000)
        return
      }
    }
  }
  if (isValid) {
    return <Navigate to="/signin" />
  }
  return (
    <Flex
      minH={'50vh'}
      align={'center'}
      justify={'center'}
      bg={'gray.50'}>
      <Stack spacing={8} mx={'auto'} w={'xl'} py={12} px={6}>

        <Box
          rounded={'lg'}
          bg={'white'}
          boxShadow={'0 1px 20px rgb(0 0 0 / 19%), 0px 0px 6px rgb(0 0 0 / 23%)'}
          w="80%"
          m="auto"
          p={8}>
          <Stack align={'center'} pb="10px">
            <Heading fontSize={'3xl'} textAlign={'center'} fontWeight="400">
              Sign up
            </Heading>
          </Stack>
          <Stack spacing={4}>

            <FormControl id="email" isRequired>
              {/* Email address*/}
              <Input ref={mail} type="email" placeholder='Email Address' />
            </FormControl>
            {/* Password  */}
            <FormControl id="password" isRequired>
              <InputGroup>
                <Input ref={pass} type={showPassword ? 'text' : 'password'} placeholder="Password" />
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
            <FormControl id="Confirmpassword" isRequired>
              {/* Confirm Password */}
              <InputGroup>
                <Input ref={conPass} isRequired type={showPassword ? 'text' : 'password'} placeholder="Confirm Password" />
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
              {/* News Letter */}
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                p="10px 0"
                justify={'space-between'}>
                <Checkbox>I agree to the receive news letters from Mirraw</Checkbox>
              </Stack>
            </FormControl>.
            {/* Sign up Button */}
            <Stack spacing={10}>

              <Button
                loadingText="Submitting"
                size="sm"
                w="30%"
                m="auto"
                bg={'rgb(103, 11, 25)'}
                color={'white'}
                onClick={() => { CreateUser() }}
                _hover={{
                  bg: 'rgb(103, 11, 25)',
                }}>
                Sign up
              </Button>
            </Stack>

            <Divider borderBottom={"1px solid black"} />

            {/* Login with other medium */}
            {/* Paypal */}
            <Link><Box w="50%" m="auto"><Image src="https://www.mirraw.com/assets/sign_in_paypal-a7e67035ea1461ada1fc96bf69697552340e3c9fb1969f7e9ef0c52eb7ed05d6.png" /></Box></Link>
            <Stack>
              {/* Facebook and Google */}
              <HStack p="0">
                <Link><Box ><Image src="https://www.mirraw.com/assets/facebook_sign_in-e998b55d7d821ba819897132537e42149cee923ea215a5eaf0e2a6335efe6c67.png" /></Box></Link>
                <Link><Box ><Image src="https://www.mirraw.com/assets/google_sing_in-3426a2d2b760db2be7127653d216d7578e499c5e7df25fea1f861a56108d7d5b.png" /></Box></Link>
              </HStack>
              <Text align={'center'}>
                Have an Account? <NavLink to="/signin" color={'blue.400'}>Sign In</NavLink>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}