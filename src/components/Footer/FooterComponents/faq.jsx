import {
  Image,
  Box,
  Flex,
  Input,
  Spacer,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Divider,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";

export default function FAQ() {
  return (
    <Box w="70%" m="10px auto auto auto">
      <Flex>
        <Text fontSize={"3xl"} fontWeight="bold">
          Mirraw FAQs
        </Text>
        <Spacer />
        <Input placeholder="How can I help you?" w="sm" size={"sm"}></Input>
      </Flex>
      <Divider />
      <Flex>
        <Box width="80%">
          <Text fontSize={"xl"} mt="3" mb="3">Queries Related To</Text>
          <Tabs orientation="vertical" size="lg" w="100%">
            <TabList w={"40%"}>
              <Tab fontSize={"sm"} fontWeight="600" pl="0" pr="0">
                <Flex align="center" w="100%">
                  <Image
                    src="https://www.mirraw.com/assets/order_faq-e513f1c6a57e4ae657c1eb35b5069d35500ff2011963640be376a5b8b5ced448.png"
                    bg="rgb(103, 11, 25)"
                    h="30px"
                    p="5px"
                    m="0 5px"
                  />{" "}
                  Order <Spacer />
                </Flex>
              </Tab>
              <Tab fontSize={"sm"} fontWeight="600" pl="0" pr="0">
                <Flex align="center" w="100%">
                  <Image
                    src="https://www.mirraw.com/assets/return_faq-114e411cb29f8de849e822ed8d3a651482feef146a83fcd6ac726c061080cb94.png"
                    bg="rgb(103, 11, 25)"
                    h="30px"
                    p="5px"
                    m="0 5px"
                  />{" "}
                  Cancellations & Returns <Spacer />
                </Flex>
              </Tab>
              <Tab fontSize={"sm"} fontWeight="600" pl="0" pr="0">
                <Flex align="center" w="100%">
                  <Image
                    src="https://www.mirraw.com/assets/payment_faq-544279bb5350a944a3d9315e68e530bf1e70789dfcb7b2e6bf30e640ec0fca3d.png"
                    bg="rgb(103, 11, 25)"
                    h="30px"
                    p="5px"
                    m="0 5px"
                  />{" "}
                  Payments <Spacer />{" "}
                </Flex>
              </Tab>
              <Tab fontSize={"sm"} fontWeight="600" pl="0" pr="0">
                <Flex align="center" w="100%">
                  <Image
                    src="https://www.mirraw.com/assets/wallet_faq-aeb6c2bef2ad04a7ffee3db7c18a550ea6c944b8c9cc187ea3d878646676f1c8.png"
                    bg="rgb(103, 11, 25)"
                    h="30px"
                    p="5px"
                    m="0 5px"
                  />{" "}
                  Wallet <Spacer />{" "}
                </Flex>
              </Tab>
              <Tab fontSize={"sm"} fontWeight="600" pl="0" pr="0">
                <Flex align="center" w="100%">
                  <Image
                    src="https://www.mirraw.com/assets/shipping_faq-fb7b384b006cb76d2f1efa5da74139b08bfe7f7db36ea068c238ce02730ff973.png"
                    bg="rgb(103, 11, 25)"
                    h="30px"
                    p="5px"
                    m="0 5px"
                  />{" "}
                  Shipping <Spacer />{" "}
                </Flex>{" "}
              </Tab>
              <Tab fontSize={"sm"} fontWeight="600" pl="0" pr="0">
                <Flex align="center" w="100%">
                  <Image
                    src="https://www.mirraw.com/assets/disclaimer_faq-2218d3642c8eed28ef5aa3ce67b627f495d3d2750d2d766e0176f0197790447a.png"
                    bg="rgb(103, 11, 25)"
                    h="30px"
                    p="5px"
                    m="0 5px"
                  />{" "}
                  Disclaimer <Spacer />{" "}
                </Flex>{" "}
              </Tab>
              <Tab fontSize={"sm"} fontWeight="600" pl="0" pr="0">
                <Flex align="center" w="100%">
                  <Image
                    src="https://www.mirraw.com/assets/other_faq-b85440b36e86c070bfeb4ed7d66bb644e3fee2c78f7e0263737ee7f716b1a451.png"
                    bg="rgb(103, 11, 25)"
                    h="30px"
                    p="5px"
                    m="0 5px"
                  />{" "}
                  Others <Spacer />{" "}
                </Flex>
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Text fontSize={"2xl"}>Order</Text>
                <Divider />
                <Accordion defaultIndex={[false]} allowMultiple fontSize={"xs"}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          How to place an order?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text>Shopping from us is easy!</Text>
                      <Text>
                        Select the product you’d like to buy. Create a login or
                        proceed with guest login:
                      </Text>
                      <Text>
                        Add products to your cart or just hit Buy Now.
                      </Text>
                      <Text>Choose or Add delivery address.</Text>
                      <Text>Add a working phone number and email address.</Text>
                      <Text>
                        Use a preferred payment mode and confirm the order.
                      </Text>
                      <Text>www.mirraw.com</Text>
                      Happy shopping.
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          How to place an order on Android/IOS?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text>
                        So you are stuck in a traffic jam, or you are relaxing
                        on a lazy Sunday afternoon. You don't feel like booting
                        up your laptop in your free time. We have a great idea,
                        listen to your playlist, relax and also shop for your
                        favorite products on-the-go on our mobile app. Just
                        download our app and your shopping is on.
                      </Text>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          What is 'My Account'? How do I update my information?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text>
                        It is easy to update your Mirraw.com account and view
                        your orders any time through 'My Account'.
                      </Text>
                      <Text>
                        'My Account' allows you complete control over your
                        transactions on Mirraw.com
                      </Text>
                      <Text>
                        Manage/edit your personal data like address, phone
                        numbers, email ids Change your password
                      </Text>
                      <Text>Track the status of your orders</Text>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          How to track my order?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text>
                        You can view the status of your order by going on your
                        Order Acknowledgement page.
                      </Text>
                      <Text>
                        1. Please visit this link:
                        http://www.mirraw.com/pages/track
                      </Text>
                      <Text>2. Enter Your Order Number and Click Track</Text>
                      <Text>
                        You will be redirected to your Order Acknowledgement
                        Page. Please find below the status definitions for your
                        order.
                      </Text>
                      <Text fontWeight={700}>Status of Order</Text>
                      <Flex>
                        <Text fontWeight="700">a) NEW-</Text> Your order hasn't
                        been processed yet.
                      </Flex>
                      <Flex>
                        <Text fontWeight="700">b) PENDING-</Text> Your order has
                        been processed and is waiting on the designer to
                        dispatch your order.
                      </Flex>
                      <Flex>
                        <Text fontWeight="700" w="200px">
                          c) DISPATCH -
                        </Text>{" "}
                        Your order has been dispatched. You should receive or
                        should have received an email at this point with the
                        tracking Information. Please visit Courier partners
                        website to get latest update on where your courier has
                        reached.
                      </Flex>
                      <Flex>
                        <Text fontWeight="700" w="200px">
                          d) COMPLETE -
                        </Text>{" "}
                        This is an estimate that you have received your package
                        and order has been marked as complete by the designer.
                        Please contact us immediately in case you have not yet
                        received the item
                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </TabPanel>
              <TabPanel>
                <Text fontSize={"2xl"}>Cancellation & Returns</Text>
                <Divider />
                <Accordion defaultIndex={[false]} allowMultiple fontSize={"xs"}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          How to place an order?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text>Shopping from us is easy!</Text>
                      <Text>
                        Select the product you’d like to buy. Create a login or
                        proceed with guest login:
                      </Text>
                      <Text>
                        Add products to your cart or just hit Buy Now.
                      </Text>
                      <Text>Choose or Add delivery address.</Text>
                      <Text>Add a working phone number and email address.</Text>
                      <Text>
                        Use a preferred payment mode and confirm the order.
                      </Text>
                      <Text>www.mirraw.com</Text>
                      Happy shopping.
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          How to place an order on Android/IOS?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text>
                        So you are stuck in a traffic jam, or you are relaxing
                        on a lazy Sunday afternoon. You don't feel like booting
                        up your laptop in your free time. We have a great idea,
                        listen to your playlist, relax and also shop for your
                        favorite products on-the-go on our mobile app. Just
                        download our app and your shopping is on.
                      </Text>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          What is 'My Account'? How do I update my information?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text>
                        It is easy to update your Mirraw.com account and view
                        your orders any time through 'My Account'.
                      </Text>
                      <Text>
                        'My Account' allows you complete control over your
                        transactions on Mirraw.com
                      </Text>
                      <Text>
                        Manage/edit your personal data like address, phone
                        numbers, email ids Change your password
                      </Text>
                      <Text>Track the status of your orders</Text>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          How to track my order?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text>
                        You can view the status of your order by going on your
                        Order Acknowledgement page.
                      </Text>
                      <Text>
                        1. Please visit this link:
                        http://www.mirraw.com/pages/track
                      </Text>
                      <Text>2. Enter Your Order Number and Click Track</Text>
                      <Text>
                        You will be redirected to your Order Acknowledgement
                        Page. Please find below the status definitions for your
                        order.
                      </Text>
                      <Text fontWeight={700}>Status of Order</Text>
                      <Flex>
                        <Text fontWeight="700">a) NEW-</Text> Your order hasn't
                        been processed yet.
                      </Flex>
                      <Flex>
                        <Text fontWeight="700">b) PENDING-</Text> Your order has
                        been processed and is waiting on the designer to
                        dispatch your order.
                      </Flex>
                      <Flex>
                        <Text fontWeight="700" w="200px">
                          c) DISPATCH -
                        </Text>{" "}
                        Your order has been dispatched. You should receive or
                        should have received an email at this point with the
                        tracking Information. Please visit Courier partners
                        website to get latest update on where your courier has
                        reached.
                      </Flex>
                      <Flex>
                        <Text fontWeight="700" w="200px">
                          d) COMPLETE -
                        </Text>{" "}
                        This is an estimate that you have received your package
                        and order has been marked as complete by the designer.
                        Please contact us immediately in case you have not yet
                        received the item
                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </TabPanel>
              <TabPanel>
                <Text fontSize={"2xl"}>Payments</Text>
                <Divider />
                <Accordion defaultIndex={[false]} allowMultiple fontSize={"xs"}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          How to place an order?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text>Shopping from us is easy!</Text>
                      <Text>
                        Select the product you’d like to buy. Create a login or
                        proceed with guest login:
                      </Text>
                      <Text>
                        Add products to your cart or just hit Buy Now.
                      </Text>
                      <Text>Choose or Add delivery address.</Text>
                      <Text>Add a working phone number and email address.</Text>
                      <Text>
                        Use a preferred payment mode and confirm the order.
                      </Text>
                      <Text>www.mirraw.com</Text>
                      Happy shopping.
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          How to place an order on Android/IOS?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text>
                        So you are stuck in a traffic jam, or you are relaxing
                        on a lazy Sunday afternoon. You don't feel like booting
                        up your laptop in your free time. We have a great idea,
                        listen to your playlist, relax and also shop for your
                        favorite products on-the-go on our mobile app. Just
                        download our app and your shopping is on.
                      </Text>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          What is 'My Account'? How do I update my information?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text>
                        It is easy to update your Mirraw.com account and view
                        your orders any time through 'My Account'.
                      </Text>
                      <Text>
                        'My Account' allows you complete control over your
                        transactions on Mirraw.com
                      </Text>
                      <Text>
                        Manage/edit your personal data like address, phone
                        numbers, email ids Change your password
                      </Text>
                      <Text>Track the status of your orders</Text>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          How to track my order?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text>
                        You can view the status of your order by going on your
                        Order Acknowledgement page.
                      </Text>
                      <Text>
                        1. Please visit this link:
                        http://www.mirraw.com/pages/track
                      </Text>
                      <Text>2. Enter Your Order Number and Click Track</Text>
                      <Text>
                        You will be redirected to your Order Acknowledgement
                        Page. Please find below the status definitions for your
                        order.
                      </Text>
                      <Text fontWeight={700}>Status of Order</Text>
                      <Flex>
                        <Text fontWeight="700">a) NEW-</Text> Your order hasn't
                        been processed yet.
                      </Flex>
                      <Flex>
                        <Text fontWeight="700">b) PENDING-</Text> Your order has
                        been processed and is waiting on the designer to
                        dispatch your order.
                      </Flex>
                      <Flex>
                        <Text fontWeight="700" w="200px">
                          c) DISPATCH -
                        </Text>{" "}
                        Your order has been dispatched. You should receive or
                        should have received an email at this point with the
                        tracking Information. Please visit Courier partners
                        website to get latest update on where your courier has
                        reached.
                      </Flex>
                      <Flex>
                        <Text fontWeight="700" w="200px">
                          d) COMPLETE -
                        </Text>{" "}
                        This is an estimate that you have received your package
                        and order has been marked as complete by the designer.
                        Please contact us immediately in case you have not yet
                        received the item
                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </TabPanel>
              <TabPanel>
                <Text fontSize={"2xl"}>Wallet</Text>
                <Divider />
                <Accordion defaultIndex={[false]} allowMultiple fontSize={"xs"}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          How to place an order?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text>Shopping from us is easy!</Text>
                      <Text>
                        Select the product you’d like to buy. Create a login or
                        proceed with guest login:
                      </Text>
                      <Text>
                        Add products to your cart or just hit Buy Now.
                      </Text>
                      <Text>Choose or Add delivery address.</Text>
                      <Text>Add a working phone number and email address.</Text>
                      <Text>
                        Use a preferred payment mode and confirm the order.
                      </Text>
                      <Text>www.mirraw.com</Text>
                      Happy shopping.
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          How to place an order on Android/IOS?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text>
                        So you are stuck in a traffic jam, or you are relaxing
                        on a lazy Sunday afternoon. You don't feel like booting
                        up your laptop in your free time. We have a great idea,
                        listen to your playlist, relax and also shop for your
                        favorite products on-the-go on our mobile app. Just
                        download our app and your shopping is on.
                      </Text>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          What is 'My Account'? How do I update my information?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text>
                        It is easy to update your Mirraw.com account and view
                        your orders any time through 'My Account'.
                      </Text>
                      <Text>
                        'My Account' allows you complete control over your
                        transactions on Mirraw.com
                      </Text>
                      <Text>
                        Manage/edit your personal data like address, phone
                        numbers, email ids Change your password
                      </Text>
                      <Text>Track the status of your orders</Text>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          How to track my order?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text>
                        You can view the status of your order by going on your
                        Order Acknowledgement page.
                      </Text>
                      <Text>
                        1. Please visit this link:
                        http://www.mirraw.com/pages/track
                      </Text>
                      <Text>2. Enter Your Order Number and Click Track</Text>
                      <Text>
                        You will be redirected to your Order Acknowledgement
                        Page. Please find below the status definitions for your
                        order.
                      </Text>
                      <Text fontWeight={700}>Status of Order</Text>
                      <Flex>
                        <Text fontWeight="700">a) NEW-</Text> Your order hasn't
                        been processed yet.
                      </Flex>
                      <Flex>
                        <Text fontWeight="700">b) PENDING-</Text> Your order has
                        been processed and is waiting on the designer to
                        dispatch your order.
                      </Flex>
                      <Flex>
                        <Text fontWeight="700" w="200px">
                          c) DISPATCH -
                        </Text>{" "}
                        Your order has been dispatched. You should receive or
                        should have received an email at this point with the
                        tracking Information. Please visit Courier partners
                        website to get latest update on where your courier has
                        reached.
                      </Flex>
                      <Flex>
                        <Text fontWeight="700" w="200px">
                          d) COMPLETE -
                        </Text>{" "}
                        This is an estimate that you have received your package
                        and order has been marked as complete by the designer.
                        Please contact us immediately in case you have not yet
                        received the item
                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </TabPanel>
              <TabPanel>
                <Text fontSize={"2xl"}>Shipping</Text>
                <Divider />
                <Accordion defaultIndex={[false]} allowMultiple fontSize={"xs"}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          How to place an order?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text>Shopping from us is easy!</Text>
                      <Text>
                        Select the product you’d like to buy. Create a login or
                        proceed with guest login:
                      </Text>
                      <Text>
                        Add products to your cart or just hit Buy Now.
                      </Text>
                      <Text>Choose or Add delivery address.</Text>
                      <Text>Add a working phone number and email address.</Text>
                      <Text>
                        Use a preferred payment mode and confirm the order.
                      </Text>
                      <Text>www.mirraw.com</Text>
                      Happy shopping.
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          How to place an order on Android/IOS?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text>
                        So you are stuck in a traffic jam, or you are relaxing
                        on a lazy Sunday afternoon. You don't feel like booting
                        up your laptop in your free time. We have a great idea,
                        listen to your playlist, relax and also shop for your
                        favorite products on-the-go on our mobile app. Just
                        download our app and your shopping is on.
                      </Text>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          What is 'My Account'? How do I update my information?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text>
                        It is easy to update your Mirraw.com account and view
                        your orders any time through 'My Account'.
                      </Text>
                      <Text>
                        'My Account' allows you complete control over your
                        transactions on Mirraw.com
                      </Text>
                      <Text>
                        Manage/edit your personal data like address, phone
                        numbers, email ids Change your password
                      </Text>
                      <Text>Track the status of your orders</Text>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          How to track my order?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text>
                        You can view the status of your order by going on your
                        Order Acknowledgement page.
                      </Text>
                      <Text>
                        1. Please visit this link:
                        http://www.mirraw.com/pages/track
                      </Text>
                      <Text>2. Enter Your Order Number and Click Track</Text>
                      <Text>
                        You will be redirected to your Order Acknowledgement
                        Page. Please find below the status definitions for your
                        order.
                      </Text>
                      <Text fontWeight={700}>Status of Order</Text>
                      <Flex>
                        <Text fontWeight="700">a) NEW-</Text> Your order hasn't
                        been processed yet.
                      </Flex>
                      <Flex>
                        <Text fontWeight="700">b) PENDING-</Text> Your order has
                        been processed and is waiting on the designer to
                        dispatch your order.
                      </Flex>
                      <Flex>
                        <Text fontWeight="700" w="200px">
                          c) DISPATCH -
                        </Text>{" "}
                        Your order has been dispatched. You should receive or
                        should have received an email at this point with the
                        tracking Information. Please visit Courier partners
                        website to get latest update on where your courier has
                        reached.
                      </Flex>
                      <Flex>
                        <Text fontWeight="700" w="200px">
                          d) COMPLETE -
                        </Text>{" "}
                        This is an estimate that you have received your package
                        and order has been marked as complete by the designer.
                        Please contact us immediately in case you have not yet
                        received the item
                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </TabPanel>
              <TabPanel>
                <Text fontSize={"2xl"}>Disclaimer</Text>
                <Divider />
                <Accordion defaultIndex={[false]} allowMultiple fontSize={"xs"}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          How to place an order?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text>Shopping from us is easy!</Text>
                      <Text>
                        Select the product you’d like to buy. Create a login or
                        proceed with guest login:
                      </Text>
                      <Text>
                        Add products to your cart or just hit Buy Now.
                      </Text>
                      <Text>Choose or Add delivery address.</Text>
                      <Text>Add a working phone number and email address.</Text>
                      <Text>
                        Use a preferred payment mode and confirm the order.
                      </Text>
                      <Text>www.mirraw.com</Text>
                      Happy shopping.
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          How to place an order on Android/IOS?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text>
                        So you are stuck in a traffic jam, or you are relaxing
                        on a lazy Sunday afternoon. You don't feel like booting
                        up your laptop in your free time. We have a great idea,
                        listen to your playlist, relax and also shop for your
                        favorite products on-the-go on our mobile app. Just
                        download our app and your shopping is on.
                      </Text>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          What is 'My Account'? How do I update my information?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text>
                        It is easy to update your Mirraw.com account and view
                        your orders any time through 'My Account'.
                      </Text>
                      <Text>
                        'My Account' allows you complete control over your
                        transactions on Mirraw.com
                      </Text>
                      <Text>
                        Manage/edit your personal data like address, phone
                        numbers, email ids Change your password
                      </Text>
                      <Text>Track the status of your orders</Text>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          How to track my order?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text>
                        You can view the status of your order by going on your
                        Order Acknowledgement page.
                      </Text>
                      <Text>
                        1. Please visit this link:
                        http://www.mirraw.com/pages/track
                      </Text>
                      <Text>2. Enter Your Order Number and Click Track</Text>
                      <Text>
                        You will be redirected to your Order Acknowledgement
                        Page. Please find below the status definitions for your
                        order.
                      </Text>
                      <Text fontWeight={700}>Status of Order</Text>
                      <Flex>
                        <Text fontWeight="700">a) NEW-</Text> Your order hasn't
                        been processed yet.
                      </Flex>
                      <Flex>
                        <Text fontWeight="700">b) PENDING-</Text> Your order has
                        been processed and is waiting on the designer to
                        dispatch your order.
                      </Flex>
                      <Flex>
                        <Text fontWeight="700" w="200px">
                          c) DISPATCH -
                        </Text>{" "}
                        Your order has been dispatched. You should receive or
                        should have received an email at this point with the
                        tracking Information. Please visit Courier partners
                        website to get latest update on where your courier has
                        reached.
                      </Flex>
                      <Flex>
                        <Text fontWeight="700" w="200px">
                          d) COMPLETE -
                        </Text>{" "}
                        This is an estimate that you have received your package
                        and order has been marked as complete by the designer.
                        Please contact us immediately in case you have not yet
                        received the item
                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </TabPanel>
              <TabPanel>
                <Text fontSize={"2xl"}>Others</Text>
                <Divider />
                <Accordion defaultIndex={[false]} allowMultiple fontSize={"xs"}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          How to place an order?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text>Shopping from us is easy!</Text>
                      <Text>
                        Select the product you’d like to buy. Create a login or
                        proceed with guest login:
                      </Text>
                      <Text>
                        Add products to your cart or just hit Buy Now.
                      </Text>
                      <Text>Choose or Add delivery address.</Text>
                      <Text>Add a working phone number and email address.</Text>
                      <Text>
                        Use a preferred payment mode and confirm the order.
                      </Text>
                      <Text>www.mirraw.com</Text>
                      Happy shopping.
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          How to place an order on Android/IOS?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text>
                        So you are stuck in a traffic jam, or you are relaxing
                        on a lazy Sunday afternoon. You don't feel like booting
                        up your laptop in your free time. We have a great idea,
                        listen to your playlist, relax and also shop for your
                        favorite products on-the-go on our mobile app. Just
                        download our app and your shopping is on.
                      </Text>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          What is 'My Account'? How do I update my information?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text>
                        It is easy to update your Mirraw.com account and view
                        your orders any time through 'My Account'.
                      </Text>
                      <Text>
                        'My Account' allows you complete control over your
                        transactions on Mirraw.com
                      </Text>
                      <Text>
                        Manage/edit your personal data like address, phone
                        numbers, email ids Change your password
                      </Text>
                      <Text>Track the status of your orders</Text>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          How to track my order?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text>
                        You can view the status of your order by going on your
                        Order Acknowledgement page.
                      </Text>
                      <Text>
                        1. Please visit this link:
                        http://www.mirraw.com/pages/track
                      </Text>
                      <Text>2. Enter Your Order Number and Click Track</Text>
                      <Text>
                        You will be redirected to your Order Acknowledgement
                        Page. Please find below the status definitions for your
                        order.
                      </Text>
                      <Text fontWeight={700}>Status of Order</Text>
                      <Flex>
                        <Text fontWeight="700">a) NEW-</Text> Your order hasn't
                        been processed yet.
                      </Flex>
                      <Flex>
                        <Text fontWeight="700">b) PENDING-</Text> Your order has
                        been processed and is waiting on the designer to
                        dispatch your order.
                      </Flex>
                      <Flex>
                        <Text fontWeight="700" w="200px">
                          c) DISPATCH -
                        </Text>{" "}
                        Your order has been dispatched. You should receive or
                        should have received an email at this point with the
                        tracking Information. Please visit Courier partners
                        website to get latest update on where your courier has
                        reached.
                      </Flex>
                      <Flex>
                        <Text fontWeight="700" w="200px">
                          d) COMPLETE -
                        </Text>{" "}
                        This is an estimate that you have received your package
                        and order has been marked as complete by the designer.
                        Please contact us immediately in case you have not yet
                        received the item
                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </Box>
  );
}
