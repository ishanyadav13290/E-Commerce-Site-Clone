import { Flex, VStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Navdrop9() {
    return (
        <Flex padding="10px 0" justify="space-evenly" zIndex="10" display="none" id="navHo9" bg="white" right="-70px" top="40px" position="absolute" w="800px" minH="200px">
            <Flex flexDirection="column" gap="5px">
                <NavLink> WOMEN</NavLink>
                <NavLink> Sarees</NavLink>
                <NavLink> Lehengas</NavLink>
                <NavLink> Anarkali</NavLink>
                <NavLink> Gowns</NavLink>
                <NavLink> Kurta</NavLink>
                <NavLink> Palazzo Set</NavLink>
                <NavLink>Pant Set</NavLink>
                <NavLink> Kaftan</NavLink>
                <NavLink>Dresses</NavLink>
                <NavLink>Dresses</NavLink>
            </Flex>
            <Flex flexDirection="column" gap="5px">
                <NavLink>KIDS</NavLink>
                <NavLink>Girls Lehenga Set</NavLink>
                <NavLink>Girls Kurta Set</NavLink>
                <NavLink>Girls Frocks</NavLink>
                <NavLink>Boys Kurta Pajama</NavLink>
                <NavLink>Boys Sherwani</NavLink>
                <NavLink>Boys Nehru Jackets</NavLink>
                <NavLink>Boys Blazer</NavLink>
            </Flex>
            <Flex flexDirection="column" gap="5px">
                <NavLink>MEN</NavLink>
                <NavLink>Kurta Sets</NavLink>
                <NavLink>Kurtas</NavLink>
                <NavLink>Nehru Jacket</NavLink>
                <NavLink>Sherwani</NavLink>
                <NavLink>Blazers</NavLink>
                <NavLink>Accessories</NavLink>
            </Flex>
            <Flex flexDirection="column" gap="5px">
                <NavLink>JEWELLERY</NavLink>
                <NavLink>Jewellery Set</NavLink>
                <NavLink>Earrings</NavLink>
                <NavLink>Rings</NavLink>
                <NavLink>Bangles & Bracelet</NavLink>
                <NavLink>Maang Tikka</NavLink>
            </Flex>
            <Flex flexDirection="column" gap="5px">
                <NavLink>ACCESSORIES</NavLink>
                <NavLink>Scarves</NavLink>
                <NavLink>Hard Clutch</NavLink>
                <NavLink>Potli</NavLink>
                <NavLink>Hair Accessories</NavLink>
                <NavLink>Footwear</NavLink>
            </Flex>
            <Flex flexDirection="column" gap="5px">
                <NavLink>OCCASION</NavLink>
                <NavLink>Festive</NavLink>
                <NavLink>Casual</NavLink>
                <NavLink>Wedding</NavLink>
            </Flex>
        </Flex>
    )
}