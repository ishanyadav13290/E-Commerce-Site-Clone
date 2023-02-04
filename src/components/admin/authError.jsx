import { Box, Center, Heading, Text } from "@chakra-ui/react";

export default function AuthError(){
    return  <Center h={["50vw","30vw"]} p="40px">
        <Heading>You're not authorised to access this page.</Heading>
        </Center>
}