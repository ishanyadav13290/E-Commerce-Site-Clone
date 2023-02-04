import {
  Box,
  Center,
  Flex,
  Link as ChakLink,
  Grid,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Style from "./Footer.module.css";

import SignUpdate from "../Frontpage/Signup-Updates/signUpdate";
import { ReviewCarousel } from "../Features/Carousel/Carousel";

export default function Footer() {
  let [vis, setVis] = useState(false);
  window.addEventListener("scroll", () => {
    let pos = window.scrollY;
    if (pos > 100) {
      setVis(true);
    } else {
      setVis(false);
    }
  });
  return (
    <>
      <SignUpdate />
      {/* <ReviewCarousel /> */}
      <Box
        bg="url('https://www.mirraw.com/assets/footer_bg.png')"
        h="auto"
        p="20px"
        m="auto"
        color="white"
      >
        <Center>
          <Text
            display={"block"}
            fontWeight={[500, 600, 700]}
            fontSize={["md", "lg", "3xl"]}
          >
            Authors
          </Text>
        </Center>
        <Flex bg={"transparent"} h={["100px","150px"]} w={"100%"} justify={"space-around"}>
          <Box>
            <Text fontWeight={[500, 600, 700]} fontSize={["md", "lg", "3xl"]}>
              Ishan Yadav (MERN Stack)
            </Text>
            <UnorderedList fontSize={["sm","md"]}>
              <ListItem><ChakLink href="https://www.linkedin.com/in/ishan-yadav-5306851ba/">LinkedIn</ChakLink></ListItem>
              <ListItem><ChakLink href="https://github.com/ishanyadav13290">Github</ChakLink></ListItem>
            </UnorderedList>
          </Box>
          <Box>
            <Text fontWeight={[500, 600, 700]} fontSize={["md", "lg", "3xl"]}>
              Raghbir Singh (MERN Stack)
            </Text>
            <UnorderedList fontSize={["sm","md"]}>
              <ListItem><ChakLink href="https://www.linkedin.com/in/raghbir-singh-a1183a219/">LinkedIn</ChakLink></ListItem>
              <ListItem><ChakLink href="https://github.com/RaghbirS">Github</ChakLink></ListItem>
            </UnorderedList>
          </Box>
        </Flex>
      </Box>
      <Box bg="rgb(123, 14, 29)" color="white" fontSize="xs" p="10px 0">
        <Center>Copyright 2023. All Rights Reserved.</Center>
      </Box>
      {vis ? (
        <a href="#">
          <Box
            position="fixed"
            bottom={5}
            right={10}
            bg="white"
            p="10px 20px"
            borderRadius="50%"
            border="2px solid black"
            fontWeight={700}
            fontSize="xl"
          >
            ^
          </Box>
        </a>
      ) : null}
    </>
  );
}
