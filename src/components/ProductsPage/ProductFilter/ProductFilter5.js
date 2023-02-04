import { Box, Button, Flex, Stack } from "@chakra-ui/react";
import { useState } from "react";
import styles from "./filter.module.css"
import FilterReusable from "./filterResuseable";
import { Radio, RadioGroup } from '@chakra-ui/react'
export default function ProductFilter5() {
    const [value, setValue] = useState('1')
    return (
        <FilterReusable name="DISCOUNTS">
            <Flex className={styles.firstSty}>
            <Flex align="center" justify="center" width="100%" position="absolute" top="0px">
                <input ></input>
                <Box m="5px"> - </Box>
                <input ></input>
                <Button>GO</Button>
            </Flex>
            </Flex>
            <Flex align="center" flexDir="column" w="100%">
                <Flex gap="5px" h="70%" position="absolute" top="85px" overflowY="scroll" w="80%" flexDir="column">

                    <RadioGroup onChange={setValue} value={value}>
                        <Stack direction='column'>
                            <Radio value='1'>0 - 10%</Radio>
                            <Radio value='2'>10 - 20%</Radio>
                            <Radio value='3'>20 - 30%</Radio>
                            <Radio value='4'>30 - 40%</Radio>
                            <Radio value='5'>40 - 50%</Radio>
                            <Radio value='6'>50 - 60%</Radio>
                            <Radio value='7'>66 - 70%</Radio>
                            <Radio value='8'>70 - 80%</Radio>
                            <Radio value='9'>80 - 90%</Radio>
                            <Radio value='10'>90 - 100%</Radio>

                        </Stack>
                    </RadioGroup>
                </Flex>
            </Flex>
        </FilterReusable>
    )
}