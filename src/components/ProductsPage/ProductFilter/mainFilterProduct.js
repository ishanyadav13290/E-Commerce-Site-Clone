import ProductFilter1 from "./ProductFilter1";
import { Flex } from "@chakra-ui/react";
import ProductFilter3 from "./ProductFilter3";
import ProductFilter2 from "./ProductFilter2";
import ProductFilter4 from "./ProductFilter4";
import ProductFilter5 from "./ProductFilter5";
import ProductFilter6 from "./ProductFilter6";
import ProductFilter7 from "./ProductFilter7";
import ProductFilter8 from "./ProductFilter8";
import ProductFilter9 from "./ProductFilter9";
import ProductFilter10 from "./ProductFilter10";
import ProductFilter11 from "./ProductFilter11";

export default function MainProductfilter(){

    return(
        <Flex display={["none","none","none","flex"]} flexDir="column" gap="10px" overflowY="scroll" p="10px" w="15vw" top="0" position="sticky" h="100vh" >
            <ProductFilter1/>
        </Flex>
    )
}