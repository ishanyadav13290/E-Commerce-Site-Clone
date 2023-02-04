import { Flex, VStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Navdrop3() {
    return (
        <Flex padding="10px 0" justify="space-evenly" zIndex="10" display="none" id="navHo3" bg="white" right="-70px" top="40px" position="absolute" w="800px" minH="200px">
            <Flex flexDirection="column" gap="5px">
                <NavLink>STYLE</NavLink>
                <NavLink>Anarkali Suits</NavLink>
                <NavLink>Straight Suits</NavLink>
                <NavLink>Churidar Suits</NavLink>
                <NavLink>Punjabi Suits</NavLink>
                <NavLink>Dress Material</NavLink>
                <NavLink>Abaya Suits</NavLink>
                <NavLink>Pakistani Suits</NavLink>
                <NavLink>Sharara Suits</NavLink>
                <NavLink>Patiala Suits</NavLink>
            </Flex>
            <Flex flexDirection="column" gap="5px">
                <NavLink>FABRIC</NavLink>
                <NavLink>Cotton</NavLink>
                <NavLink>Georgette</NavLink>
                <NavLink>Chanderi</NavLink>
                <NavLink>Silk</NavLink>
                <NavLink>Net</NavLink>
                <NavLink>Crepe</NavLink>
                <NavLink>Cotton Silk</NavLink>
            </Flex>
            <Flex flexDirection="column" gap="5px">
                <NavLink>OCCASION</NavLink>
                <NavLink>Party Wear</NavLink>
                <NavLink>Wedding Salwar</NavLink>
                <NavLink>Festive</NavLink>
            </Flex>
            <Flex flexDirection="column" gap="5px">
                <NavLink>COLLECTION</NavLink>
                <NavLink>Plus Size Suits</NavLink>
                <NavLink>Best Sellers</NavLink>
                <NavLink>New Arrivals</NavLink>
                <NavLink>Combo Salwar</NavLink>
                <NavLink>Ready to Ship</NavLink>
                <NavLink>Collar Neck Designs</NavLink>
                <NavLink>Ethnic Suits</NavLink>
                <NavLink>Patiala Combo</NavLink>
                <NavLink>Bollywood Salwars</NavLink>
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
            <Flex flexDirection="column" gap="5px">
                <NavLink>STITCHING</NavLink>
                <NavLink>Readymade Suits</NavLink>
                <NavLink>Semi Stitched Suits</NavLink>
            </Flex>
        </Flex>
    )
}