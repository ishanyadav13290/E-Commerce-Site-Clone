import {Checkbox, Flex, Radio, RadioGroup, Spacer } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext/context";
import styles from "./filter.module.css"
import FilterReusable from "./filterResuseable";

export default function ProductFilter1() {
    let {sortBasis,setSortBasis} = useContext(AuthContext)
    return (
        <FilterReusable name="SORT">
            <Flex align="center" flexDir="column" w="100%">
                <Flex gap="5px" h="70%" position="absolute" top="45px" overflowY="scroll" w="80%" flexDir="column">
                    <RadioGroup display={"flex"} flexDir={"column"} gap={"5px"} defaultValue="Default" onChange={val=>setSortBasis(val)}>
                        <Radio value="Default">Recommended</Radio>
                        <Radio value="HighToLow">High to Low</Radio>
                        <Radio value="LowToHigh">Low To High</Radio>
                    </RadioGroup>
                </Flex>
            </Flex>
        </FilterReusable>
    )
}