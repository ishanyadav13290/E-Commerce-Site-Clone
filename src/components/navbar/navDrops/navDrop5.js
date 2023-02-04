import { Flex, VStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Navdrop5() {
    return (
        <Flex padding="10px 0" justify="space-evenly" zIndex="10" display="none" id="navHo5" bg="white" right="-70px" top="40px" position="absolute" w="800px" minH="200px">
            <Flex flexDirection="column" gap="5px">
                <NavLink>TYPE</NavLink>
                <NavLink>Necklace Sets</NavLink>
                <NavLink>Necklaces</NavLink>
                <NavLink>Bangles & Bracelets</NavLink>
                <NavLink>Earrings</NavLink>
                <NavLink>Anklets</NavLink>
                <NavLink>Pendants</NavLink>
                <NavLink>Silk Thread</NavLink>
            </Flex>
            <Flex flexDirection="column" gap="5px">
                <NavLink>WORK</NavLink>
                <NavLink>Temple Jewellery</NavLink>
                <NavLink>Antique Jewellery</NavLink>
                <NavLink>Kundan Jewellery</NavLink>
                <NavLink>South Indian Jewellery</NavLink>
                <NavLink>Pearl Jewellery</NavLink>
                <NavLink>Handmade Jewellery</NavLink>
            </Flex>
            <Flex flexDirection="column" gap="5px">
                <NavLink>WEDDING</NavLink>
                <NavLink>Bridal Jewellery</NavLink>
                <NavLink>Bridal Sets</NavLink>
                <NavLink>Mangalsutra</NavLink>
                <NavLink>Maang Tikka</NavLink>
                <NavLink>Rings</NavLink>
                <NavLink>Toe Rings</NavLink>
                <NavLink>Baju Band</NavLink>
                <NavLink> Nose Rings</NavLink>
            </Flex>
            <Flex flexDirection="column" gap="5px">
                <NavLink>FEATURED</NavLink>
                <NavLink>Silk Thread Earrings</NavLink>
                <NavLink>Brooch</NavLink>
                <NavLink>Silk Thread Bangles</NavLink>
                <NavLink>Studs</NavLink>
                <NavLink>Jhumkas</NavLink>
                <NavLink>Choker Necklace</NavLink>
                <NavLink>Danglers & Drops</NavLink>

            </Flex>
            <Flex flexDirection="column" gap="5px">
                <NavLink>COLLECTIONS</NavLink>
                <NavLink>Gemstones</NavLink>
                <NavLink>Ear Cuffs</NavLink>
                <NavLink>Designer Jewellery</NavLink>
                <NavLink>Hair Accessories</NavLink>
                <NavLink>Oxidised Jewellery</NavLink>
                <NavLink>Jewellery Box</NavLink>
                <NavLink>Ethnic Jewellery</NavLink>
            </Flex>
        </Flex>
    )
}