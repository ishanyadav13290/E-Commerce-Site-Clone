import { Box } from "@chakra-ui/react"
import Nav1 from "./nav1"
import Nav2 from "./nav2"
import Nav3 from "./nav3"

export default function Navbar() {

    return (
        <Box w={"100vw"} bg={"white"} zIndex={"10"} position={["fixed","fixed","static","static"]}>
            <Nav1 />
            <Nav2 />
            <Nav3/>
        </Box>

    )
}
