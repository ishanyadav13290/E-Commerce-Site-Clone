import { Flex, VStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Navdrop4() {
    return (
        <Flex padding="10px 0" justify="space-evenly" zIndex="10" display="none" id="navHo4" bg="white" right="-70px" top="40px" position="absolute" w="800px" minH="200px">
            <Flex flexDirection="column" gap="5px">
                <NavLink>STYLE</NavLink>
                <NavLink>Kurta Sets</NavLink>
                <NavLink>Long Kurtis</NavLink>
                <NavLink>Short Kurtis</NavLink>
                <NavLink>Sleeveless Kurtis</NavLink>
                <NavLink>Anarkali Kurtis</NavLink>
                <NavLink>Kaftans</NavLink>
                <NavLink>Plus Size Kurtis</NavLink>
            </Flex>
            <Flex flexDirection="column" gap="5px">
                <NavLink>FABRIC</NavLink>
                <NavLink> Silk</NavLink>
                <NavLink>Chiffon</NavLink>
                <NavLink>Georgette</NavLink>
                <NavLink>Cotton</NavLink>
                <NavLink>Rayon</NavLink>
                <NavLink>Crepe</NavLink>
                <NavLink>Chanderi</NavLink>

            </Flex>
            <Flex flexDirection="column" gap="5px">
                <NavLink>OCCASION</NavLink>
                <NavLink>Party Wear</NavLink>
                <NavLink>Festive</NavLink>
                <NavLink>Casual</NavLink>
                <NavLink>Wedding</NavLink>
            </Flex>
            <Flex flexDirection="column" gap="5px">
                <NavLink>WORK</NavLink>
                <NavLink>Printed</NavLink>
                <NavLink>Embroidered</NavLink>
                <NavLink>Plain</NavLink>
                <NavLink>Chikankari</NavLink>
                <NavLink>Stone Work</NavLink>
                <NavLink>Heavy Work</NavLink>
                <NavLink>Mirror Work</NavLink>
            </Flex>
            <Flex flexDirection="column" gap="5px">
                <NavLink>BOTTOM WEAR</NavLink>
                <NavLink>Palazzos</NavLink>
                <NavLink>Harem Pants</NavLink>
                <NavLink>Leggings</NavLink>
                <NavLink>Patiala Pants</NavLink>
                <NavLink>Skirts</NavLink>
                <NavLink>Trousers</NavLink>
            </Flex>
        </Flex>
    )
}