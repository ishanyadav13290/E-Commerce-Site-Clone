import { Flex, Image, VStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Navdrop6() {
    return (
        <Flex padding="10px 0" justify="space-evenly" zIndex="10" display="none" id="navHo6" bg="white" right="-70px" top="40px" position="absolute" w="800px" minH="200px">
            <Flex flexDirection="column" gap="5px">
                <NavLink>GIRLS</NavLink>
                <NavLink>Lehenga</NavLink>
                <NavLink>Salwar Suits</NavLink>
                <NavLink>Gowns</NavLink>
                <NavLink> Sarees</NavLink>
                <NavLink>Frocks</NavLink>
                <NavLink>Dresses</NavLink>
                <NavLink>Girls Jackets</NavLink>
            </Flex>
            <Flex flexDirection="column" gap="5px">
                <NavLink>BOYS</NavLink>
                <NavLink>Kurta Pyjamas</NavLink>
                <NavLink>Indo Western</NavLink>
                <NavLink>Sherwani</NavLink>
                <NavLink>Dhoti Kurta</NavLink>
                <NavLink>Nehru Jacket</NavLink>
            </Flex>
            <Flex flexDirection="column" gap="5px">
                <NavLink>COLLECTIONS</NavLink>
                <NavLink>Jewellery</NavLink>
            </Flex>
            <Image src="https://assets0.mirraw.com/menus/20/kids-wear_main.jpg?1524812808"/>
        </Flex>
    )
}