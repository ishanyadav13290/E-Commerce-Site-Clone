import { NavLink } from "react-router-dom";
import {
  Flex,
  Menu,
  MenuButton,
  MenuList,
  Center,
  Text,
  Box,
  Button,
  MenuItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Image,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import modal from "../database/Imgs/modal.png";
// import {

// } from '@chakra-ui/react'
import styles from "./nav.module.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/context";
import axios from "axios";
export default function Nav1() {
  let { loginUserID } = useContext(AuthContext)
  return (
    <Flex
      id="top"
      className={styles.fill}
      style={{ borderBottom: ".5px solid #eeeeee" }}
      color="#670b19"
      pl="30px"
      justify="space-between"
      height="40px"
      width="100vw"
    >
      <Flex align="center" width="70%">
        <NavLink className={styles.marginNav}>
          Contact Us <span>|</span>
        </NavLink>
        <NavLink className={styles.marginNav}>
          {" "}
          7 Day Returns <span>|</span>{" "}
        </NavLink>
        <NavLink className={styles.marginNav}>
          {" "}
          Track Order <span>|</span>
        </NavLink>
        <NavLink className={styles.marginNav}>
          {" "}
          Return Order <span>|</span>
        </NavLink>
        <NavLink className={styles.marginNav}>
          {" "}
          Sell On Mirraw <span>|</span>
        </NavLink>
        <NavLink className={styles.marginNav}> Survey<span>|</span></NavLink>
        <NavLink className={styles.marginNav}> {loginUserID?.email || "Login"}</NavLink>
      </Flex>

      {/* Login and Cart */}
      <Flex
        fontWeight="600"
        fontSize="13px"
        justify="space-between"
        mr="50px"
        width="200px"
      >
        {/* Log in and Cart */}
        <CartLog />
      </Flex>
    </Flex>
  );
}

export function CartLog() {
  let { loginUserID,setCartLength ,cartLength,cartItems,setCartItems} = useContext(AuthContext)
  let [NumberOfItems, setNumberOfItems] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure();
  async function get(userID) {
    if(!userID) return;
    let data = await axios.get(`https://festive-candle-fontina.glitch.me/shop/${userID}`);
    let apiCartData = data.data.cart;
    setCartLength(apiCartData.length)
    setCartItems(apiCartData)
  }

  useEffect(() => {
    get(loginUserID?.id)
  },[loginUserID?.id])
  return (
    <>
      <Flex>
        <LogInLogOut />

        {/* Cart  */}

        <Flex
          cursor="pointer"
          justify="center"
          align="center"
          width="45%"
          bg="white"
          _hover={{ background: "white" }}
        >
        <NavLink to="/cart">
          <Center>
            <svg
              style={{ height: "15px", margin: "0 0 0 10px" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z" />
            </svg>
            CART{`(${cartLength})`}
          </Center>
        </NavLink>
        </Flex>

      </Flex>
    </>
  );
}

function LogInLogOut() {
  {
    /* Logout */
  }
  let { state, LogOut } = useContext(AuthContext);
  let { loginUserID,setLoginUserID,setCartLength ,cartLength,cartItems,setCartItems} = useContext(AuthContext)
  return state ? (
    <Flex
      fontSize={"xs"}
      className={styles.fill}
      _hover={{ cursor: "pointer" }}
      onClick={() => {
        LogOut();
        setCartItems([])
        setCartLength(0);
        setLoginUserID({})
      }}
    >
      <Center fontWeight={600}>
        <svg
          style={{ display: "block", width: "20px", marginRight: "5px" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96C43 32 0 75 0 128V384c0 53 43 96 96 96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32h64zM504.5 273.4c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22v72H192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32H320v72c0 9.6 5.7 18.2 14.5 22s19 2 26-4.6l144-136z" />
        </svg>
        LOG OUT
      </Center>
    </Flex>
  ) : (
    // LogIn
    <Menu closeOnBlur={true} closeOnSelect={true}>
      <MenuButton fontSize={"xs"} onClick={LogOut}>
        <Flex>
          <Center fontWeight={600}>
            <svg
              style={{ width: "15px", margin: "0 5px 0px 10px" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
            </svg>
            LOG IN
          </Center>
        </Flex>
      </MenuButton>
      <MenuList>
        <MenuItem>
          <Box textAlign="center" m="5px" w="100%">
            <Text mb={"5px"}>Existing User</Text>
            <NavLink
              to="/signin"
              style={{
                backgroundColor: "rgb(103, 11, 25)",
                color: "white",
                marginTop: "5px",
                padding: "3px 30px",
                fontWeight: "600",
              }}
            >
              Login
            </NavLink>
          </Box>
        </MenuItem>
        <MenuItem>
          <Box textAlign="center" m="5px" w="100%">
            <Text>New to Mirraw</Text>
            <NavLink
              to="/signup"
              style={{
                backgroundColor: "rgb(103, 11, 25)",
                color: "white",
                padding: "3px 30px",
                fontWeight: "600",
              }}
            >
              Register
            </NavLink>
          </Box>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
