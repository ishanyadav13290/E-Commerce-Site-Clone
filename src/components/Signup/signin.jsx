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
    Spacer,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Navigate, NavLink } from 'react-router-dom';
import axios from 'axios';
import { useRef, useContext } from 'react';
import { AuthContext } from '../AuthContext/context';
  
async function Id(name,func){
  let data = await axios.get("https://festive-candle-fontina.glitch.me/shop");
  data.data.forEach(el => {
    if(el.email==name){
      let id = el.id;
      let email = el.email;
      func({id,email});
      localStorage.setItem("loginUserID",JSON.stringify({id,email}))
    }
  });
}

  export default function SigninCard() {
    const [showPassword, setShowPassword] = useState(false);
    const {Login, state,setAlertVal, setSignInSuccessfull} = useContext(AuthContext)
    const {loginUserID,setLoginUserID} = useContext(AuthContext)
    let email = useRef(null)
    let password = useRef(null)
    
    async function checkUser(){
      let data = await axios.get("https://festive-candle-fontina.glitch.me/shop");
      let users=data.data;
      let success = false;
      users.map(el=>{
        if(el.email== email.current.value && el.pass == password.current.value){
          Login();
          success = true;
          Id(email.current.value,setLoginUserID)
          setSignInSuccessfull(true);
      setTimeout(()=>setSignInSuccessfull(false),3000)
        }
      })
      if(success) return;
      setAlertVal(true);
      setTimeout(()=>setAlertVal(false),3000)

    }
    if(state){
      return <Navigate to="/" />
    }
    return (
      <Flex
        minH={'50vh'}
        align={'center'}
        justify={'center'}
        bg={('gray.50')}>
        <Stack spacing={8} mx={'auto'} w={'xl'} py={12} px={6}>
          
          <Box
            rounded={'lg'}
            bg={('white')}
            boxShadow={'0 1px 20px rgb(0 0 0 / 19%), 0px 0px 6px rgb(0 0 0 / 23%)'}
            w="80%"
            m="auto"
            p={8}>
            <Stack align={'center'} pb="10px">
            <Heading fontSize={'3xl'} textAlign={'center'} fontWeight="400">
              SIGN IN
            </Heading>
          </Stack>
            <Stack spacing={4}>
        
              <FormControl id="email" isRequired>
                {/* Email address*/}
                <Input type="email" placeholder='Email Address' ref={email} />
              </FormControl>
              {/* Password  */}
              <FormControl id="password" isRequired>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} placeholder="Password" ref={password} />
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
              {/* Sign up Button */}
              <Stack spacing={10}>
                <Button
                  loadingText="Submitting"
                  size="sm"
                  w="30%"
                  m="auto"
                  bg={'rgb(103, 11, 25)'}
                  color={'white'}
                  onClick={()=>{
                    checkUser()
                  }}
                  _hover={{
                    bg: 'rgb(103, 11, 25)',
                  }}>
                  SIGN IN
                </Button>
              </Stack>

              {/* Remember Me */}
              <Flex fontSize={"xs"}>
                <Checkbox size={"sm"} />
                <Text pl="2px">REMEMBER ME</Text>
                <Spacer />
                <Link>Forgot Password?</Link>
              </Flex>

              <Box>
              <Text align={'center'} fontSize="xs">
                  Don't have an Account? <NavLink to="/signup" style={{color:"blue",textDecoration:"underline"}}>Create account</NavLink>
                </Text>
              <Text align={'center'} fontSize="xs">
                  Didn't received confirmation? <NavLink style={{color:"blue", textDecoration:"underline"}}>Resend confirmation link</NavLink>
                </Text>
              </Box>

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
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }