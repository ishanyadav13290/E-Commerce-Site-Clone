import {
  Flex,
  Box,
  Grid,
  Button,
  Spacer,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import { useCallback, useContext, useEffect, useState } from "react";
import ProductCard from "./productCards";
import MainProductfilter from "./ProductFilter/mainFilterProduct";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import Skeleteon from "../Features/Carousel/skeleton";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { AuthContext } from "../AuthContext/context";

export default function Products() {
  let [page, setPage] = useState(1);
  let [pageLimit, setPageLimit] = useState(0);
  let [proData, setProDta] = useState([]);
  let [loading, setLoading] = useState(false);
  let { sortBasis, setSortBasis, activeSearch, setActiveSearch, searchValue,searchProductId,setSearchProductId } =
    useContext(AuthContext);
  let da = useParams();
  const FetchData = async (param) => {
    setLoading(true);
    let data;
    //
    if (activeSearch) {
      if (sortBasis == "Default")
      data = await axios.get(
        `https://e-commerce-api-sncm.onrender.com/allproducts/?q=${searchValue}&_page=${page}&_limit=35`
      );
    else if (sortBasis == "HighToLow")
      data = await axios.get(
        `https://e-commerce-api-sncm.onrender.com/allproducts/?q=${searchValue}&_sort=effective-price&_order=desc&_page=${page}&_limit=35`
      );
    else
      data = await axios.get(
        `https://e-commerce-api-sncm.onrender.com/allproducts/?q=${searchValue}&_sort=effective-price&_order=asc&_page=${page}&_limit=35`
      );
      // data = await axios.get(`https://e-commerce-api-sncm.onrender.com/saree?q=${searchValue}&_page=${page}&_limit=35`);
    } 
    
    else {
      if (sortBasis == "Default")
        data = await axios.get(
          `https://e-commerce-api-sncm.onrender.com/${param}?_page=${page}&_limit=35`
        );
      else if (sortBasis == "HighToLow")
        data = await axios.get(
          `https://e-commerce-api-sncm.onrender.com/${param}?_sort=effective-price&_order=desc&_page=${page}&_limit=35`
        );
      else
        data = await axios.get(
          `https://e-commerce-api-sncm.onrender.com/${param}?_sort=effective-price&_order=asc&_page=${page}&_limit=35`
        );
    }
    setPageLimit(data.headers["x-total-count"]);
    setProDta(data.data);
    setLoading(false);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    FetchData(da.pro);
  }, [page, sortBasis, da.pro, searchValue]);
  return (
    <>
      <Flex justify="center" width="100vw" p="0 20px">
        <Spacer />
        <Flex align="center" width="80%">
          <Flex align="center">
            <NavLink to="/">Home</NavLink> <Box margin="2px">/</Box>
          </Flex>
          <Flex align="center">
            {da.pro} <Box margin="2px">/</Box>
          </Flex>
        </Flex>
        <Spacer />
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            display={["block", "block", "block", "none"]}
          >
            Filter
          </MenuButton>
          <MenuList>
            <Accordion allowMultiple={true}>
              {/* Price */}
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Sort by Price
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <MenuItem
                    onClick={() => {
                      setSortBasis("Default");
                    }}
                  >
                    Default
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setSortBasis("HighToLow");
                    }}
                  >
                    High to Low
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setSortBasis("LowToHigh");
                    }}
                  >
                    Low to High
                  </MenuItem>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </MenuList>
        </Menu>
        <Spacer />
      </Flex>
      <Flex width="100vw" justify="center">
        {/* Side Filter */}
        <MainProductfilter />
        <Grid
          templateColumns={[
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap="10px"
          p="10px"
          w={["95vw", "90vw", "65vw"]}
          minH="200vh"
        >
          {loading ? (
            <Skeleteon />
          ) : (
            proData.map((data) => {
              if (
                data["lazy src"] != "" &&
                data["lazy src"] !=
                  "https://www.mirraw.com/assets/11-335ed79f82b843135faf5fb751a71911e4512e5999837641a2914b270f7e6935.png" &&
                data["lazy src"] !=
                  "https://assets0.mirraw.com/images/5827882/139-a_long.jpg?1518529004"
              ) {
                return (
                  <ProductCard
                    loop={`/products/${da.pro || "allproducts"}/${data["listing-title"]}/${data.id}`}
                    key={data.id}
                    title={data["listing-title"]}
                    img={data["lazy src"]}
                    price={data["effective-price"]}
                    discount={data["red-discount-percentage"]}
                    
                  />
                );
              } else if (
                data["lazy-custom src"] != "" &&
                data["lazy-custom src"] !=
                  "https://www.mirraw.com/assets/11-335ed79f82b843135faf5fb751a71911e4512e5999837641a2914b270f7e6935.png" &&
                data["lazy-custom src"] !=
                  "https://assets0.mirraw.com/images/5827882/139-a_long.jpg?1518529004"
              ) {
                return (
                  <ProductCard
                    loop={`/products/${da.pro || "allproducts"}/${data["listing-title"]}/${data.id}`}
                    key={data.id}
                    title={data["listing-title"]}
                    img={data["lazy-custom src"]}
                    price={data["effective-price"]}
                    discount={data["red-discount-percentage"]}
                  />
                );
              }
            })
          )}
        </Grid>
      </Flex>
      <Flex>
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Button
          isDisabled={page <= 1}
          fontSize="2xl"
          fontWeight={700}
          onClick={() => {
            setPage(page - 1);
          }}
        >
          -
        </Button>
        <Button isDisabled={true} fontSize="2xl" fontWeight={700} m="0 10px">
          {page}
        </Button>
        <Button
          fontSize="2xl"
          fontWeight={700}
          onClick={() => {
            setPage(page + 1);
          }}
          isDisabled={page >= pageLimit / 35}
        >
          +
        </Button>
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
      </Flex>
    </>
  );
}
