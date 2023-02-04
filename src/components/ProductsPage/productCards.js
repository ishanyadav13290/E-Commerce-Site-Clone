import { Image, Card, CardBody, Text, Box, Stack, StackDivider, Heading, Flex } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

export default function ProductCard(props) {
    let data = props.loop;
    return (
        <NavLink to={data}>
            <Card _hover={{ boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px", cursor: "pointer" }}>
                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                <Image width={"100%"} src={props.img}></Image>
                            </Heading>
                        </Box>
                        <Box>
                            <Text pt='2' fontSize='sm'>
                                {props.title}
                            </Text>
                            <Heading size='xs' textTransform='uppercase'>
                                <Flex gap={"10px"}>
                                    <Box>$ {props.price}</Box>
                                    <Box color={"red"}>{props.discount}</Box>
                                </Flex>

                            </Heading>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
        </NavLink>

    )
}