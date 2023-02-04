import FilterReusable from "./filterResuseable"
import { Text , Flex, Box, Button } from "@chakra-ui/react"
import {
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
} from '@chakra-ui/react'
import { useState } from "react"
export default function ProductFilter2() {
    let [val1, setVal1] = useState(1)
    let [val2, setVal2] = useState(100)
    return (
        <FilterReusable name="PRICE">
            <Flex position="absolute" top="45px" align="center" flexDir="column" w="100%">
                <Text>
                    Select A Price Range
                </Text>
                <RangeSlider
                    w="80%"
                    defaultValue={[1, 100]}
                    aria-label={['min', 'max']}
                    onChange={(val) => {
                        setVal1(val[0]);
                        setVal2(val[1]);
                    }}
                >
                    <RangeSliderTrack>
                        <RangeSliderFilledTrack />
                    </RangeSliderTrack>
                    <RangeSliderThumb index={0} />
                    <RangeSliderThumb index={1} />
                </RangeSlider>
                <Box w="80%" position="relative">
                    <Text position="absolute">₹ {val1}</Text>
                    <Text right="0" position="absolute">₹ {val2}</Text>
                </Box>
            </Flex>
            <Flex align="center" justify="center" width="100%" position="absolute" top="120px">
                <input defaultValue={val1}></input>
                <Box m="5px"> - </Box>
                <input defaultValue={val2}></input>
                <Button>GO</Button>
            </Flex>
        </FilterReusable>
    )
}