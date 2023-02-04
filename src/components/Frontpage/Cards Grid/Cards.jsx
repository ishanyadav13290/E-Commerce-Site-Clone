import { Card, Image, Stack, Button, CardBody,  Grid, GridItem, Link } from '@chakra-ui/react'
import Styles from "./Cards.module.css"


let cardImgs=["https://assets0.mirraw.com/tag_sliders/1360/j_main_m.jpg?1668169780","https://assets0.mirraw.com/tag_sliders/1361/rt_main_m.jpg?1668405095","https://assets0.mirraw.com/tag_sliders/1362/lk_main_m.jpg?1668405003","https://assets0.mirraw.com/tag_sliders/1363/io_main_m.jpg?1668405063","https://assets0.mirraw.com/tag_sliders/1364/e_main_m.jpg?1668169761","https://assets0.mirraw.com/tag_sliders/1365/f_main_m.jpg?1668169738","https://assets0.mirraw.com/tag_sliders/1366/gf_main_m.jpg?1668405134","https://assets0.mirraw.com/tag_sliders/1382/08_main_m.jpg?1668169385"
]
let cardImgsTitle=["Saree","Salwar","Lehenga","Kurti","Jewellery","Kids Wear","Mens Wear","Home & Living"]

let links = ["products/saree","products/SalwarKameez","products/Lehengas","products/kurtis","products/jewellary","products/kids","products/mens","products/homeLiving","products/saree","products/SalwarKameez","products/Lehengas","products/kurtis","products/jewellary","products/kids","products/mens","products/homeLiving"]
export default function Cards(){
    return  <Grid templateColumns={["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]} gap={6} w="100%" m="auto">
    {cardImgs.map((pics,i)=>{
        return <GridItem w='100%' h="auto" key={i} overflow="hidden">
        <Link href={links[i]} >
        <Card w='100%'>
    <CardBody className={Styles.cardBody}>
      <Image
        src={pics}
        alt='Green double couch with wooden legs'
        borderRadius='lg'
        // w={["xs","sm","lg", "full", "full"]}
        maxW={["auto", "auto", "full"]}
      />
      <Stack mt="-5" spacing='3'>
      <Button variant='outline' colorScheme='black' bg="rgba(0,0,0,0.5)" color="white" fontSize={["2xs","xs","sm"]} textAlign="left" maxW={["auto", "auto", "full"]}>
          {cardImgsTitle[i]}
        </Button>
      </Stack>
        
    </CardBody>
  </Card> 
        </Link>
  </GridItem>
    })}
  </Grid>
}