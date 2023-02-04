import { Flex, VStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Navdrop11() {

    return (
        <Flex padding="10px 0" justify="space-evenly" zIndex="10" display="none" id="navHo11" bg="white" right="70px" top="40px" position="absolute" w="800px" minH="200px">
            <Flex flexDirection="column" gap="5px">
            <NavLink>ROOTS</NavLink>
            <NavLink>Sarees</NavLink>
            <NavLink>Kurtas & Suits</NavLink>
            <NavLink>Dress Material</NavLink>
            <NavLink>Blouses</NavLink>
            <NavLink>Dupattas</NavLink>
            <NavLink>Bottoms</NavLink>
            <NavLink>Jewellery</NavLink>
            </Flex>
            <Flex flexDirection="column" gap="5px">
            <NavLink>WESTERN WEAR</NavLink>
            <NavLink>Tops</NavLink>
            <NavLink>Dresses</NavLink>
            <NavLink>Tunics</NavLink>
            <NavLink>Gowns</NavLink>
            <NavLink>Indowestern</NavLink>
            <NavLink>Palazzos</NavLink>
            <NavLink>Leggings</NavLink>
            <NavLink>Skirts</NavLink>
            </Flex>
            <Flex flexDirection="column" gap="5px">
            <NavLink>ACCESSORIES</NavLink>
            <NavLink>Stoles & Dupattas</NavLink>
            <NavLink>Shawls</NavLink>
            <NavLink>Bags</NavLink>
            <NavLink> Footwear</NavLink>
            </Flex>
            <Flex flexDirection="column" gap="5px">
            <NavLink>BEAUTY</NavLink>
            <NavLink>Makeup</NavLink>
            <NavLink>Face Care</NavLink>
            <NavLink>Hair Care</NavLink>
            <NavLink>Body Care</NavLink>
            <NavLink>Female Hygiene</NavLink>
            <NavLink>Personal Hygiene</NavLink>
            </Flex>
            <Flex flexDirection="column" gap="5px">
            <NavLink>FOOD</NavLink>
            <NavLink>Packaged Food</NavLink>
            <NavLink>Beverages</NavLink>
            <NavLink>Baby Food</NavLink>
            </Flex>
            <Flex flexDirection="column" gap="5px">
            <NavLink>ISLAMIC</NavLink>
            <NavLink>Abaya</NavLink>
            <NavLink>Hijab</NavLink>
            <NavLink>Burka</NavLink>
            <NavLink>Tunics</NavLink>
            <NavLink>Kaftans</NavLink>
            <NavLink>Kids Abaya</NavLink>
            </Flex>
            <Flex flexDirection="column" gap="5px">
            <NavLink>COMBOS</NavLink>
            <NavLink>Sarees</NavLink>
            <NavLink>Dress Material</NavLink>
            <NavLink>Kurtis</NavLink>
            <NavLink>Jewellery</NavLink>
            <NavLink>Leggings</NavLink>
            <NavLink>Patiala Pants</NavLink>
            </Flex>
        </Flex>
    )
}