import { Flex, VStack,Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
export default function Navdrop2() {
    return (
        <Flex padding="10px 0" justify="space-evenly" zIndex="10" display="none" id="navHo2" bg="white" right="-70px" top="40px" position="absolute" w="800px">
            <Flex flexDirection="column" gap="5px">
                <NavLink>FABRIC</NavLink>
                <NavLink>Net</NavLink>
                <NavLink>Silk</NavLink>
                <NavLink>Georgette</NavLink>
                <NavLink>Velvet</NavLink>
            </Flex>
            <Flex flexDirection="column" gap="5px">
                <NavLink>OCCASION</NavLink>
                <NavLink>Party Wear</NavLink>
                <NavLink>Bridal</NavLink>
                <NavLink>Casual</NavLink>
            </Flex>
            <Flex flexDirection="column" gap="5px">
                <NavLink>STYLE</NavLink>
                <NavLink>Ghagra Choli</NavLink>
                <NavLink>Lehenga Choli</NavLink>
                <NavLink>Crop Top</NavLink>
                <NavLink>Readymade</NavLink>
            </Flex>
            <Flex flexDirection="column" gap="5px">
                <NavLink>COLLECTION</NavLink>
                <NavLink>Ethnic</NavLink>
                <NavLink>Pakistani</NavLink>
                <NavLink>Lehenga Saree</NavLink>
                <NavLink>Floral</NavLink>
            </Flex>
            <Image src="https://assets0.mirraw.com/menus/7/stylish-lehengas_main.jpg?1525255951"/>
        </Flex>
    )
}