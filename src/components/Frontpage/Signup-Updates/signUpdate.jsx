import { Box, Center, Text, VStack,Input, Button, Flex} from "@chakra-ui/react";
export default function SignUpdate(){
    return <Box  p="20px">
        <Center >
            <VStack>
            <Text fontSize="xl" fontWeight="600" letterSpacing={3}>SIGN UP TO RECIEVE OUR UPDATES</Text>
            <Text fontStyle="italic">Be the first to know about latest offers and discounts on Mirraw</Text>
      <Flex>
      <Input border="1px solid black" fontStyle="italic" placeholder="Enter your Email Address" borderRadius="0" size="lg" w="70%" m="10px 0"></Input>
                    <Button variant="solid" color="white" bg="#670b19" borderRadius="0" size="lg" m="10px 0">SUBSCRIBE</Button>
      </Flex>
            </VStack>
        </Center>
    </Box>
}