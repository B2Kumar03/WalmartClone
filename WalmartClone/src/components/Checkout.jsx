import {
  Box,
  Button,
  Circle,
  Flex,
  HStack,
  Heading,
  Image,
  Input,
  Text,
  Toast,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { CiHeart } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { AuthContext } from "../AuthContext/AuthProvider";


export const Checkout = () => {
  const { setSign } = useContext(AuthContext);
  const { auth } = useContext(AuthContext);
  const toast = useToast();
  const navigate=useNavigate()
  const {counter,count,totalPrice,calculatePrice}=useContext(AuthContext)


  useEffect(() => {
    setSign();
    return setSign;
  }, []);

  return (
    <VStack>
      <Box
        bg="#004F9A"
        w="100%"
        display={"flex"}
        justifyContent={"center"}
        p={8}
        fontSize={20}
        color="white"
        className="roboto-bold"
      >
        Checkout
      </Box>
      <Flex
        minWidth="max-content"
        alignItems="center"
        gap="4"
        w="80%"
        margin="auto"
        mt={20}
      >
        <Box w="65%">
          <Box>
            <Accordion allowToggle border={"0px solid white"}>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" textAlign="left">
                      <Text fontSize={30} className="roboto-bold">
                        Pickup and delivery options <AccordionIcon />
                      </Text>
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Flex w="90%">
                    <Box
                      w={250}
                      h={100}
                      display="flex"
                      alignItems="center"
                      border="1px solid #ccc"
                      flexDirection="column"
                      justifyContent="center"
                      borderRadius={5}
                    >
                      <Image src="https://i5.walmartimages.com/dfw/4ff9c6c9-71e5/k2-_c68396aa-eafa-422b-ac41-0df7142d29cb.v1.svg" />
                      <Text fonctSize={2} color="#ccc">
                        Shipping
                      </Text>
                      <Text fonctSize={2} color="#ccc">
                        Not Available{" "}
                      </Text>
                    </Box>
                    <Box
                      w={250}
                      h={100}
                      display="flex"
                      alignItems="center"
                      border="1px solid black"
                      flexDirection="column"
                      justifyContent="center"
                      borderRadius={5}
                      ml={5}
                    >
                      <Image src="https://i5.walmartimages.com/dfw/63fd9f59-1b5e/5452ae02-a31f-4ef1-9a45-62ac0b06c13b/v1/mci-pickup.svg" />
                      <Text fonctSize={2}>Pickup</Text>
                      <Text fonctSize={2} color="#ccc">
                        Available{" "}
                      </Text>
                    </Box>
                    <Box
                      w={250}
                      h={100}
                      display="flex"
                      alignItems="center"
                      border="1px solid #ccc"
                      flexDirection="column"
                      justifyContent="center"
                      borderRadius={5}
                      ml={5}
                    >
                      <Image src="https://i5.walmartimages.com/dfw/63fd9f59-1b5e/5452ae02-a31f-4ef1-9a45-62ac0b06c13b/v1/mci-delivery.svg" />
                      <Text fonctSize={2} color="#ccc">
                        Delivery
                      </Text>
                      <Text fonctSize={2} color="#ccc">
                        Available{" "}
                      </Text>
                    </Box>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          <Box h={400} borderRadius={8} className="cart2">
            <Box h={100} bg="#F2F8FD" borderRadius={8}>
              <Box display={"flex"} alignItems={"center"} p={5}>
                <Image src="https://i5.walmartimages.com/dfw/63fd9f59-1b5e/5452ae02-a31f-4ef1-9a45-62ac0b06c13b/v1/mci-shipping.svg" />
                <Text fontSize={20} ml={5} className="roboto-bold">
                  Shipping, arrives byTue, Mar 5 <br /> <u>95829</u>
                </Text>
              </Box>
              <Box ml={10}>
                <label className="roboto-bold" fontSize={10}>
                  Address (line 1)
                </label>
                <br />
                <Input border="1px solid black" w={400} h={20} />
                <br />
                <br />
                <label className="roboto-bold" fontSize={10}>
                  Address (line 2)
                </label>
                <br />
                <Input border="1px solid black" w={400} h={20} />
                <br />
                <br />
              </Box>
            </Box>
            <Box></Box>
          </Box>
          <Box borderRadius={8} className="cart2" mt={10} p={10}>
            <Text fontSize={20} className="roboto-bold">
              Recommended with your ,order
            </Text>
            <Flex w="100%" justifyContent={"space-evenly"} mt={5}>
              <Box>
                <Box display={"flex"} justifyContent={"flex-end"} fontSize={30}>
                  <Circle>
                    <CiHeart />
                  </Circle>
                </Box>
                <Box height={"200px"}>
                  <Image
                    src="https://i5.walmartimages.com/seo/Kristin-Ess-Hair-Deep-Clean-Clarifying-Shampoo-for-Build-Up-Dirt-Detox-Oily-Hair-10oz_a4d0c569-a548-439f-a988-ee187bec377a.b9e33e272e58ee5c6e49bd805935c924.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFFhttps://i5.walmartimages.com/seo/CeraVe-SPF-50-Face-Body-Mineral-Sunscreen-Stick-for-Sensitive-Skin-Kids-Adults-0-47-oz_7477ff50-6886-4ef3-a944-2e628423e47a.7d8a5ce533d3d1c9885fabfa09465e5f.png?odnHeight=117&odnWidth=117&odnBg=FFFFFF"
                    alt="image1"
                    h="100%"
                  />
                </Box>
                <Box>
                  <Text fontSize={13} className="rotobo-regular">
                    Sponcered
                  </Text>
                  <Flex fontSize={20} alignItems={"center"}>
                    <Box>$16.99</Box>
                  </Flex>
                  <Text>
                    Electric sever for Men <br /> Women,for in Rechargeable...
                  </Text>
                  <Button
                    border={"1px solid black"}
                    borderRadius={20}
                    bg="white"
                    onClick={()=>{
                      counter()
                      calculatePrice(16.99)
                    }}
                  >
                    <GoPlus />
                    Add
                  </Button>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
        <Box w="35%" mt={-600} className="cart2" p={10} borderRadius={20}>
          <Box>
            {" "}
            
              <Button w="100%" bg="#004F9A" borderRadius={20} color="white" onClick={() => {
              const examplePromise = new Promise((resolve, reject) => {
                setTimeout(() => {
                 
                  navigate("/");

                  resolve(200);
                }, 5000);
              });

              toast
                .promise(examplePromise, {
                  success: {
                    title: "Order placed successfully .",
                    description: `Thank you.`,
                  },
                  error: {
                    title: "Promise rejected",
                    description: "Something wrong",
                  },
                  loading: {
                    title: "Placing order ...",
                    description: "Please wait",
                  },
                })
                .then(() => {})
                .catch((error) => {
                  console.error("Error:", error);
                });
            }}>
                Place order
              </Button>
            
          </Box>
          <Box mt={5}>
            <Text textAlign={"center"}>
              For the best sh0pping experience <u>sign in</u>{" "}
            </Text>
          </Box>
          <br />
          <hr />
          <Box>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Box display={"flex"}>
                <Box>
                  <Text className="roboto-bold">Subtotal</Text>
                </Box>
                <Box>({count}item)</Box>
              </Box>
              <Box>
                <Text className="roboto-bold" color="green">
                  ${totalPrice}
                </Text>
              </Box>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Box>
                <Text className="roboto-bold">Savings</Text>
              </Box>
              <Box>
                <Text className="roboto-bold" color="green">
                  $0.00
                </Text>
              </Box>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Box></Box>
              <Box>
                <Text className="roboto-bold" color="green">
                  $0.00
                </Text>
              </Box>
            </Box>
          </Box>
          <br />
          <hr />
          <Box display={"flex"} justifyContent={"space-between"}>
            <Box>
              <Text>Shipping (below $35 minium)</Text>
            </Box>
            <Box>
              <Text>$0.00</Text>
            </Box>
          </Box>
          <br />
          <Box display={"flex"} justifyContent={"space-between"}>
            <Box>
              <Text className="roboto-bold">Texes</Text>
            </Box>
            <Box>
              <Text>Calculated at checkout</Text>
            </Box>
          </Box>
          <br />
          <hr />
          <Box display={"flex"} justifyContent={"space-between"}>
            <Box>
              <Text className="roboto-bold">Estimated total</Text>
            </Box>
            <Box>
              <Text className="roboto-bold" color="green">
                ${totalPrice}
              </Text>
            </Box>
          </Box>
        </Box>
      </Flex>
    </VStack>
  );
};
