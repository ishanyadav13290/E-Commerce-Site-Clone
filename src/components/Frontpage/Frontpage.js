
import { Box } from "@chakra-ui/react"
import axios from "axios"
import Carousel from "../Features/Carousel/Carousel"
import { SearchBar } from "../navbar/nav2"
import {BigGrid} from "./BigPicGrid/BigGrid"
import Cards from "./Cards Grid/Cards"
import Expand from "./Expanding Section/expand"
import MobileCards from "./mobile-view cards/MobileCards"

export default function Frontpage() {
    return (
        <>
        <MobileCards />
            <Box display={["none","none","none", "block", "block"]}>
            <Carousel />
            </Box>
            <BigGrid />
            <Cards />
            <Expand />
            
        </>
    )
}

