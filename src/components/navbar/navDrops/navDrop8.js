import { Flex, VStack,Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Navdrop8() {
    return (
        <Flex padding="10px 0" justify="space-evenly" zIndex="10" display="none" id="navHo8" bg="white" right="-70px" top="40px" position="absolute" w="800px" minH="200px">
            <Flex flexDirection="column" gap="5px">
                <NavLink>FURNISHING</NavLink>
                <NavLink> Bed Sheets</NavLink>
                <NavLink>Quilts</NavLink>
                <NavLink>Curtains</NavLink>
                <NavLink>Cushion Covers</NavLink>
                <NavLink>Carpets & Rugs</NavLink>
            </Flex>
            <Flex flexDirection="column" gap="5px">
                <NavLink> DECOR</NavLink>
                <NavLink> Sculptures</NavLink>
                <NavLink>Candles</NavLink>
                <NavLink>Vases</NavLink>
                <NavLink>Door Hangings</NavLink>
                <NavLink>Decorative Plates</NavLink>
            </Flex>
            <Flex flexDirection="column" gap="5px">
                <NavLink>WALL ACCENTS</NavLink>
                <NavLink> Paintings</NavLink>
                <NavLink>Wall Art</NavLink>
                <NavLink>Wall Clocks</NavLink>
                <NavLink>Photo Frames</NavLink>
            </Flex>
            <Flex flexDirection="column" gap="5px">
                <NavLink>KITCHEN & DINING</NavLink>
                <NavLink>Cookware</NavLink>
                <NavLink>Utensils</NavLink>
                <NavLink>Coasters</NavLink>
                <NavLink>Trays</NavLink>
            </Flex>
            <Image src="https://assets0.mirraw.com/menus/21/home-furnishing_main.jpg?1526285139"/>
        </Flex>
    )
}