import { Flex, VStack, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Navdrop10() {
  return (
    <Flex
      padding="10px 0"
      justify="space-evenly"
      zIndex="10"
      display="none"
      id="navHo10"
      bg="white"
      right="-70px"
      top="40px"
      position="absolute"
      w="800px"
      minH="200px"
    >
      <Flex flexDirection="column" gap="5px">
        <NavLink>GOD STATUES</NavLink>
        <NavLink>Ganesha</NavLink>
        <NavLink>Krishna</NavLink>
        <NavLink>Hanuman</NavLink>
        <NavLink>Shiva</NavLink>
        <NavLink>Saibaba</NavLink>
        <NavLink>Maa Durga</NavLink>
        <NavLink>Buddha</NavLink>
        <NavLink>Shiv Ling</NavLink>
        <NavLink>Other Deities</NavLink>
      </Flex>
      <Flex flexDirection="column" gap="5px">
        <NavLink>POOJA ITEMS</NavLink>
        <NavLink>Diyas</NavLink>
        <NavLink>Pooja Thali</NavLink>
        <NavLink>Japa Mala</NavLink>
        <NavLink>Pooja Bell</NavLink>
        <NavLink>Chowki</NavLink>
        <NavLink>Jhula</NavLink>
        <NavLink>Pooja Kalash</NavLink>
      </Flex>
      <Flex flexDirection="column" gap="5px">
        <NavLink>OTHERS</NavLink>
        <NavLink>Yantra</NavLink>
        <NavLink>Mandir</NavLink>
        <NavLink>Vastu Items</NavLink>
        <NavLink>Rudraksha</NavLink>
      </Flex>
      <Image src="https://assets0.mirraw.com/menus/56/spiritual-vastu-items_main.jpg?1656070751" />
    </Flex>
  );
}
