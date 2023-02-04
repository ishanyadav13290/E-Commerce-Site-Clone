import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Spacer,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useStatStyles,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../AuthContext/context";
import ProductCard from "../ProductsPage/productCards";

export default function Admin() {
  let { loginUserID } = useContext(AuthContext);
  let [data, setData] = useState([]);

  useEffect(() => {
    (async function fetch() {
      let temp = await axios.get("https://purple-fog-period.glitch.me/users");
      setData(temp.data);
    })();
  }, []);
  return (
    <Box>
      <Box>
        <Text fontSize={"xl"} fontWeight={"700"} textAlign={"center"}>
          Welcome {loginUserID.email}
        </Text>
      </Box>
      <Box w="100%">
        <Tabs variant="enclosed" orientation={"vertical"} w={"100%"}>
          <TabList mb="1em" w={"30%"}>
            <Tab>Orders</Tab>
            <Tab>Others</Tab>
          </TabList>
          <TabPanels
            textAlign={"center"}
            display={["block","flex","flex"]}
            w={"full"}
            overflowY={"scroll"}
          >
            <TabPanel h="100%" display={"block"} w={"100%"}>
              {data.map((el, j) => {
                return (
                  <Box display={["block","flex","flex"]} key={j} w="100%" mb={["10%","7%","3%"]}>
                    <Box overflowY={"scroll"} maxH={["130px", "full"]} w={["100%","60%","30%"]} border={"1px solid grey"} textAlign="left" p="10px">
                      <Flex fontWeight={700} >Name:<Text ml={"5px"} fontWeight={400}> {el.fullName}</Text></Flex>
                      <Flex fontWeight={700} >Address:<Text ml={"5px"} fontWeight={400}> {el.streetAddress}</Text></Flex>
                      <Flex fontWeight={700} >City:<Text ml={"5px"} fontWeight={400}> {el.city}</Text></Flex>
                      <Flex fontWeight={700} >Email:<Text ml={"5px"} fontWeight={400}> {el.emailAddress}</Text></Flex>
                    </Box>
                    <Flex
                      overflowX={"scroll"}
                      overflowY="hidden"
                      w={"100%"}
                      maxH={"300px"}
                      border={"1px solid grey"}
                    >
                      {el.orderedProducts.map((prod, i) => {
                        return (
                            <Card minW={["90%","50%","30%"]} key={i}>
                              <CardBody >
                                <Box maxW={"100px"} h={["auto","80%"]} m="auto" 
                                  overflow={"hidden"}>
                                <Image
                                  src={prod.img}
                                  alt="Green double couch with wooden legs"
                                  borderRadius="lg"
                                  maxW={"100%"}
                                  m="auto"
                                />
                                </Box>
                                  <Text fontSize={["xs","sm","md"]} maxW={"100%"}>{prod.name}</Text>
                              </CardBody>
                            </Card>
                        );
                      })}
                    </Flex>
                  </Box>
                );
              })}
            </TabPanel>
            <TabPanel h="100%" display={"block"} w={"100%"}>
            <Box display={["block","flex","flex"]} w="100%" mb={["10%","7%","3%"]} >
                <Text textAlign="center" w={"100%"} fontSize="2xl" fontWeight={700}>In Future</Text>
            </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}
