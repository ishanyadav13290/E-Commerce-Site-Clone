import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

let Images=["https://assets0.mirraw.com/tag_sliders/1360/j_main_m.jpg?1668169780","https://assets0.mirraw.com/tag_sliders/1361/rt_main_m.jpg?1668405095","https://assets0.mirraw.com/tag_sliders/1362/lk_main_m.jpg?1668405003","https://assets0.mirraw.com/tag_sliders/1363/io_main_m.jpg?1668405063"]
let Names =["Saree", "Salwar", "Lehenga", "Kurti"]

let Images2 = ["https://assets0.mirraw.com/tag_sliders/1364/e_main_m.jpg?1668169761","https://assets0.mirraw.com/tag_sliders/1365/f_main_m.jpg?1668169738","https://assets0.mirraw.com/tag_sliders/1366/gf_main_m.jpg?1668405134","https://assets0.mirraw.com/tag_sliders/1382/08_main_m.jpg?1668169385"]
let Names2= ["Jewellery", "Kids Wear", "Mens Wear", "Home & Living"]

let Routes = ["products/saree","products/SalwarKameez", "products/Lehengas", "products/kurtis"]
let Routes2= ["products/jewellary","products/kids","products/mens","products/homeLiving"]
export default function MobileCards(){
    return <>
    <Flex w="100%" display={["flex","flex","flex","none"]} m="5% 0">
        {Images.map((el,i)=>{
            return <Box key={i} w={"30%"}>
            <NavLink to={Routes[i] } >
            <Box textAlign={"center"} >
                <Center><Image src={Images[i]} w={["80%","70%","70%"]} /></Center>
                {Names[i]}
            </Box>
        </NavLink>
            </Box>
        })}
        </Flex>
        <Flex w="100%" display={["flex","flex","flex","none"]} m="5% 0">
        {Images.map((el,i)=>{
            return <Box key={i} w={"30%"}>
            <NavLink to={Routes2[i] } >
            <Box textAlign={"center"} >
                <Center><Image src={Images2[i]} w={["80%","70%","70%"]} /></Center>
                {Names2[i]}
            </Box>
        </NavLink>
            </Box>
        })}
        </Flex>
    </>
}