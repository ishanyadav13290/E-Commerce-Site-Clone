import { Box, Center } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import {
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue
} from '@chakra-ui/react';
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../AuthContext/context";

async function addToCart(userID, newItem, cartItems, setCartItems,setCartLength) {
    if (userID == undefined) return;
    // let data = await axios.get(`https://e-commerce-api-sncm.onrender.com/users/${userID}`);
    // let cartItems = data.data.cart;


    // axios.patch(`https://e-commerce-api-sncm.onrender.com/users/${userID}`, {
    //     cart: [...cartItems, newItem]
    // })
    let tempCartItems = [...cartItems];
    for (let i = 0; i < tempCartItems.length; i++) {
        if (tempCartItems[i].name == newItem.name) {
            tempCartItems[i].qty = tempCartItems[i].qty + 1;
            setCartItems(tempCartItems);
            axios.patch(`https://festive-candle-fontina.glitch.me/shop/${userID}`, {
                cart: tempCartItems
            })
            return
        }
    }
    setCartItems([...tempCartItems, newItem]);
    axios.patch(`https://festive-candle-fontina.glitch.me/shop/${userID}`, {
        cart: [...tempCartItems, newItem]
    })
    setCartLength((prev) => prev + 1)

}
export default function BigProduct(props) {
    let { loginUserID, setCartLength, cartItems, setCartItems } = useContext(AuthContext);
    window.scrollTo(0, 0)
    let [apiData, setApiData] = useState({})
    let data = useParams();
    async function getData() {
        let fet = await axios.get(`https://e-commerce-api-sncm.onrender.com/${data.categories}/${data.id}`);
        setApiData(fet.data)
    }
    let img = apiData["lazy-custom src"] == "" ? apiData["lazy src"] : apiData["lazy-custom src"];
    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <Container maxW={'7xl'}>
                <SimpleGrid
                    columns={{ base: 1, lg: 2 }}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 18, md: 24 }}>
                    <Flex justify={"center"}>
                        <Image
                            rounded={'md'}
                            alt={'product image'}
                            src={
                                img
                            }
                            fit={'cover'}
                            align={'center'}
                            h={{ base: '100%', sm: '400px', lg: '500px' }}
                        />
                    </Flex>
                    <Stack spacing={{ base: 6, md: 10 }}>
                        <Box as={'header'}>
                            <Heading
                                lineHeight={1.1}
                                fontWeight={600}
                                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                                {data.name.toUpperCase()}
                            </Heading>
                            <Flex
                                color={useColorModeValue('gray.900', 'gray.400')}
                                fontWeight={700}
                                fontSize={'2xl'}>
                                    $ 
                                {apiData["effective-price"] || "0.00"} 
                                <Text color={"red"} fontWeight={"600"} ml={"10px"}>{apiData["red-discount-percentage"]}</Text>
                            </Flex>
                        </Box>

                        <Stack
                            spacing={{ base: 4, sm: 6 }}
                            direction={'column'}
                            divider={
                                <StackDivider
                                    borderColor={useColorModeValue('gray.200', 'gray.600')}
                                />
                            }>
                            <VStack spacing={{ base: 4, sm: 6 }}>
                                <Text
                                    color={useColorModeValue('gray.500', 'gray.400')}
                                    fontSize={'2xl'}
                                    fontWeight={'300'}>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                    diam nonumy eirmod tempor invidunt ut labore
                                </Text>
                                <Text fontSize={'lg'}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                                    aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                                    maxime modi nam officiis porro, quae, quisquam quos
                                    reprehenderit velit? Natus, totam.
                                </Text>
                            </VStack>
                            <Box>
                                <Text
                                    fontSize={{ base: '16px', lg: '18px' }}
                                    color={useColorModeValue('yellow.500', 'yellow.300')}
                                    fontWeight={'500'}
                                    textTransform={'uppercase'}
                                    mb={'4'}>
                                    Product Details
                                </Text>
                                <Flex flexDir={"column"}>

                                </Flex>

                            </Box>
                        </Stack>

                        <Button
                            rounded={'none'}
                            w={'full'}
                            mt={8}
                            size={'lg'}
                            py={'7'}
                            bg={useColorModeValue('gray.900', 'gray.50')}
                            color={useColorModeValue('white', 'gray.900')}
                            textTransform={'uppercase'}
                            onClick={async () => {
                                let data1 = {
                                    img,
                                    name: data.name.toUpperCase(),
                                    price: apiData["effective-price"],
                                    qty: 1,
                                    id: data.id
                                }
                                // setCartLength((prev) => prev + 1)
                                // setCartItems([...cartItems, data1]);
                                addToCart(loginUserID?.id, data1, cartItems, setCartItems,setCartLength);
                            }}
                            _hover={{
                                transform: 'translateY(2px)',
                                boxShadow: 'lg',
                            }}>
                            Add to cart
                        </Button>

                        <Stack direction="row" alignItems="center" justifyContent={'center'}>
                            <Text>2-3 business days delivery</Text>
                        </Stack>
                    </Stack>
                </SimpleGrid>
            </Container>
        </>
    )
}