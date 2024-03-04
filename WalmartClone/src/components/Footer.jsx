import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

export const Footer = () => {
  return (
    <>
      <VStack>
        <Box w="100%" mt={100}>
          <Box
            h={150}
            bg="#E6F1FC"
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={"column"}
          >
            <Text className="roboto-regular">
              We’d love to hear what you think!
            </Text>
            <Button
              border={"1px solid black"}
              borderRadius={20}
              bg="white"
              mt={5}
            >
              Give feedback
            </Button>
          </Box>
          <Box
            h={150}
            bg="#004F9A"
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={"column"}
            color={"white"}
          >
            <Box w="80%" display={"flex"} justifyContent={"center"}>
              <Box ml={{"base":"0","sm":0,"md":0,"lg":4,"xl":4}}>All Departments</Box>
              <Box ml={{"base":"0","sm":0,"md":0,"lg":4,"xl":4}}>Store Directory</Box>
              <Box ml={{"base":"0","sm":0,"md":0,"lg":4,"xl":4}}>Careers</Box>
              <Box ml={{"base":"0","sm":0,"md":0,"lg":4,"xl":4}}>Our Company</Box>
              <Box ml={{"base":"0","sm":0,"md":0,"lg":4,"xl":4}}>Sell on Walmart.com</Box>
              <Box ml={{"base":"0","sm":0,"md":0,"lg":4,"xl":4}}>Help</Box>
              <Box ml={{"base":"0","sm":0,"md":0,"lg":4,"xl":4}}>Product Recalls</Box>
              <Box ml={{"base":"0","sm":0,"md":0,"lg":4,"xl":4}}>Accessibility</Box>
              <Box ml={{"base":"0","sm":0,"md":0,"lg":4,"xl":4}}>Tax Exempt Program</Box>
              <Box ml={{"base":"0","sm":0,"md":0,"lg":4,"xl":4}}>Get the Walmart App</Box>
            </Box>
            <Box
              w="80%"
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              className="rotobo-regular'
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx02"
            >
              <Box ml={{"base":"0","sm":0,"md":0,"lg":4,"xl":4}}>Sign-up for Email</Box>
              <Box ml={{"base":"0","sm":0,"md":0,"lg":4,"xl":4}}>Safety Data Sheet</Box>
              <Box ml={{"base":"0","sm":0,"md":0,"lg":4,"xl":4}}>Terms of Use</Box>
              <Box ml={{"base":"0","sm":0,"md":0,"lg":4,"xl":4}}>Privacy & Security</Box>
              <Box ml={{"base":"0","sm":0,"md":0,"lg":4,"xl":4}}>California Supply Chain Act</Box>
              <Box >
                <Image
                  src="https://i5.walmartimages.com/dfwrs/76316474-f70e/k2-_67001355-c576-4ca2-989d-260a2673c41a.v1.png"
                  w={8}
                />
              </Box>
              <Box ml={{"base":"0","sm":0,"md":0,"lg":4,"xl":4}}>Your Privacy Choices</Box>
              <Box ml={{"base":"0","sm":0,"md":0,"lg":4,"xl":4}}>Notice at Collection</Box>
            </Box>
            <Box
              w="80%"
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box ml={{"base":"0","sm":0,"md":0,"lg":4,"xl":4}}>Request My Personal Information</Box>
              <Box ml={{"base":"0","sm":0,"md":0,"lg":4,"xl":4}}>Brand Shop Directory</Box>
              <Box ml={{"base":"0","sm":0,"md":0,"lg":4,"xl":4}}>Pharmacy</Box>
              <Box ml={{"base":"0","sm":0,"md":0,"lg":4,"xl":4}}>Walmart Business</Box>
              <Box ml={{"base":"0","sm":0,"md":0,"lg":4,"xl":4}}>#IYWYK</Box>
            </Box>
            <Box mt={10}>
              <Text>© 2024 Walmart. All Rights Reserved.</Text>
            </Box>
          </Box>
        </Box>
      </VStack>
    </>
  );
};
