import { Box, Grid, GridItem, Skeleton, SkeletonText } from "@chakra-ui/react";

export default function Skeleteon(){
    let arr= new Array(36)
    // w={["160px","220px","220px","200px"]}
    for(let i=0;i<arr.length;i++){
        arr[i]=<GridItem w={["80%","80%","80%","100%"]} key={i}>
        <Box padding='6' boxShadow='lg' bg='white' w="100%" h={["200px","250px","300px"]}>
    <Skeleton height='100%' />
    {/* <SkeletonText mt='4' noOfLines={2} spacing='2' skeletonHeight='6' /> */}
    </Box>
        </GridItem>
    }
    return <Grid templateColumns={[
        "repeat(2, 1fr)",
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
        "repeat(4, 1fr)",
      ]}
      gap="10px"
      p="10px"
      w={["90vw", "85vw", "60vw"]}
      minH="200vh"
      templateRows={"repeat(9,1fr)"}>
        {arr}
        </Grid>
}