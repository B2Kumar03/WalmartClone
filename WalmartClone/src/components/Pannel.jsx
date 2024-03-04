import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Modal,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { IoGridOutline } from "react-icons/io5";
import Modalhome from "./Modalhome";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { motion } from "framer-motion";

import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink} from "@chakra-ui/react";

export const Pannel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [pannelButton, setpannelButton] = useState(false);

  function handle() {
    setpannelButton((prev) => !prev);
  }

  const handleDrawerOpen = () => {
    setpannelButton((prev) => !prev);
    onOpen();
  };
  const handleDrawerclose = () => {
    setpannelButton((prev) => !prev);
    onClose();
  };

  return (
    <HStack borderTop={"1px solid white"}>
      <Flex
        justifyContent="space-between"
        w="100%"
        // p={0.5}
        bg="#0071DC"
        color="white"
        alignItems="center"
      >
        <Box w={{
  base: "48%",
  sm: "100%",
  md: "100%",
  lg: "48%",
  xl: "48%",
  
}} display={"flex"} >
          <Box
            display={"flex"}
            alignItems={"center"}
            // border={"1px solid black"}
            p={3}
          >
            <Box>
              <Image
                borderRadius="full"
                boxSize="30px"
                src="https://i5.walmartimages.com/dfw/4ff9c6c9-ad46/k2-_0a671c38-d307-447c-835e-7904ab143c26.v1.png"
                alt="logo"
              />
            </Box>
            <Box ml={2} display="flex" alignItems={"center"} >
              How do you want to your items ?{" "}
              {!pannelButton ? (
                <Box ml={{
  base: 0,
  sm: 100,
  md: 0,
  lg: 0,
  xl: 0,
  
}}><SlArrowDown onClick={handleDrawerOpen}  /></Box>
              ) : (
                <Box ml={{
                  base: 0,
                  sm: 100,
                  md: 0,
                  lg: 0,
                  xl: 0,
                  
                }}> <SlArrowUp onClick={handleDrawerclose} /></Box>
              )}
            </Box>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            // border={"1px solid black"}
            p={3}
            className="department1"
          >
            <Box ml={2} display={{
  base: "none",
  sm: "none",
  md: "flex",
  lg: "flex",
  xl: "flex",
  
}} alignItems={"center"}>
              <Box border="1px solid white" w={0} height={4}></Box>
              <Box>
                <CiLocationOn />
              </Box>
              <Box >Scramento 95829</Box>
            </Box>
          </Box>
          <Box
            display={{
              base: "none",
              sm: "none",
              md: "flex",
              lg: "flex",
              xl: "flex",
              
            }}
            alignItems={"center"}
            // border={"1px solid black"}
            p={1}
            className="department1"
          >
            <Box ml={2} display={"flex"} alignItems={"center"}>
              <Box>
                <IoHomeOutline />
              </Box>
              <Box>Scramento Supercenter</Box>
            </Box>
          </Box>
        </Box>
        <Spacer />
        <Box  w="45%" className="roboto-bold" display={{
  base: "block",
  sm: "none",
  md: "none",
  lg: "block",
  xl: "block",
  
}}>
          <Flex justifyContent={"space-evenly"}>
            <Box>
              <ChakraLink as={ReactRouterLink} >
                Deals
              </ChakraLink>
            </Box>
            <Box>
              <ChakraLink as={ReactRouterLink} >
                Grocery & Essentials
              </ChakraLink>
            </Box>
            <Box>
              <ChakraLink as={ReactRouterLink} >
                Ester
              </ChakraLink>
            </Box>
            <Box >
              <ChakraLink as={ReactRouterLink} >
                Walmart Style
              </ChakraLink>
              
            </Box>
            <Box>
              <ChakraLink as={ReactRouterLink} >
                Baby Days
              </ChakraLink>
            </Box>
            
            
          </Flex>
        </Box>

        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
        >
          <Modalhome isOpen={isOpen} onClose={onClose}  />
        </motion.div>
      </Flex>
    </HStack>
  );
};
