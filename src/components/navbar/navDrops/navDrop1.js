import { Flex, VStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";


export default function Navdrop1() {
    return (
            <Flex padding="10px 0" justify="space-evenly" zIndex="10" display="none"  id="navHo1" bg="white" right="-70px" top="40px" position="absolute" w="800px">
                {/* <VStack className="dropdown" justify="flex-start"> */}
                    <Flex flexDirection="column" gap="5px">
                    <NavLink>ROOTS</NavLink>
                    <NavLink>Kanchipuram Silk</NavLink>
                    <NavLink>Bhagalpuri Silk</NavLink>
                    <NavLink>Mysore Silk</NavLink>
                    <NavLink>Manipuri Silk</NavLink>
                    <NavLink>Kota Silk</NavLink>
                    <NavLink>Bandhani</NavLink>
                    <NavLink>Paithani</NavLink>
                    <NavLink>Kota</NavLink>
                    <NavLink>Patola</NavLink>
                    <NavLink>Jamdani</NavLink>
                    <NavLink>Kerala Kasavu</NavLink>
                    <NavLink>Bengali</NavLink>
                    <NavLink>Uppada</NavLink>
                    <NavLink>Nauvari</NavLink>
                    </Flex>
                {/* </VStack> */}
                <VStack>
                <Flex flexDirection="column" gap="5px"><NavLink>FABRIC</NavLink>
                    <NavLink>Georgette</NavLink>
                    <NavLink>Art Silk</NavLink>
                    <NavLink>Cotton</NavLink>
                    <NavLink>Pure Silk</NavLink>
                    <NavLink>Net</NavLink>
                    <NavLink>Velvet</NavLink>
                    <NavLink>Chiffon</NavLink>
                    <NavLink>Brasso</NavLink>
                    <NavLink>Chanderi</NavLink>
                    <NavLink>Organza Sarees</NavLink>
                    <NavLink>Tussar Silk</NavLink>
                    <NavLink>Crepe</NavLink>
                    <NavLink>Satin</NavLink>
                    </Flex>
                </VStack>
                <Flex flexDirection="column" gap="5px">
                    <NavLink>OCCASION</NavLink>
                    <NavLink>Party Wear</NavLink>
                    <NavLink>Wedding</NavLink>
                    <NavLink>EID</NavLink>
                    <NavLink>Diwali</NavLink>
                </Flex>
                <Flex flexDirection="column" gap="5px">
                    <NavLink>WORK</NavLink>
                    <NavLink>Embroidered</NavLink>
                    <NavLink>Printed</NavLink>
                    <NavLink>Heavy Work Sarees</NavLink>
                    <NavLink>Handloom Sarees</NavLink>
                    <NavLink>Hand Woven Sarees</NavLink>
                    <NavLink>Chikankari</NavLink>
                    <NavLink>Kalamkari</NavLink>
                    <NavLink>Ikat</NavLink>
                </Flex>
                <Flex flexDirection="column" gap="5px">
                    <NavLink>COLLECTIONS</NavLink>
                    <NavLink>Exclusive</NavLink>
                    <NavLink>Bridal Sarees</NavLink>
                    <NavLink>Half Saree</NavLink>
                    <NavLink>Pre Stitched Sarees</NavLink>
                    <NavLink>Traditional Sarees</NavLink>
                    <NavLink>South Indian Sarees</NavLink>
                    <NavLink>Bollywood Sarees</NavLink>
                    <NavLink>Best Sellers</NavLink>
                    <NavLink>New Arrivals</NavLink>
                </Flex>
                <Flex flexDirection="column" gap="5px">
                    <NavLink>MORE</NavLink>
                    <NavLink>Blouses</NavLink>
                    <NavLink>Readymade Blouse</NavLink>
                    <NavLink>Blouse Fabric​</NavLink>
                    <NavLink>Sleeveless blouse</NavLink>
                    <NavLink>Bridal Blouses</NavLink>
                    <NavLink>Petticoats</NavLink>
                    <NavLink>Blouse Neck Designs</NavLink>
                </Flex>
            </Flex>
    )
}