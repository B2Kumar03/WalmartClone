import {
  Box,
  Button,
  Circle,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { GoPlus } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { Scrollbars } from "react-custom-scrollbar";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { AuthContext } from "../AuthContext/AuthProvider";

const Product4 = () => {
  const {counter,calculatePrice}=useContext(AuthContext)


  return (
    <HStack>
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
            <Button border={"1px solid black"} borderRadius={20} bg="white" onClick={()=>{
              counter()
              calculatePrice(16.99)
            }}>
              <GoPlus />
              Add
            </Button>
          </Box>
        </Box>
        <Box>
          <Box display={"flex"} justifyContent={"flex-end"} fontSize={30}>
            <Circle>
              <CiHeart />
            </Circle>
          </Box>

          <Box height={"200px"}>
            <Image
              src="https://i5.walmartimages.com/seo/CeraVe-SPF-50-Face-Body-Mineral-Sunscreen-Stick-for-Sensitive-Skin-Kids-Adults-0-47-oz_7477ff50-6886-4ef3-a944-2e628423e47a.7d8a5ce533d3d1c9885fabfa09465e5f.png?odnHeight=117&odnWidth=117&odnBg=FFFFFF"
              alt="image1"
              h="100%"
            />
          </Box>
          <Box>
            <Text fontSize={13} className="rotobo-regular">
              Sponcered
            </Text>
            <Flex fontSize={20} alignItems={"center"}>
              <Box> $16.99</Box>
            </Flex>
            <Text>
              Electric sever for Men <br /> Women,for in Rechargeable...
            </Text>
            <Button border={"1px solid black"} borderRadius={20} bg="white" onClick={()=>{
              counter()
              calculatePrice(16.99)
            }}>
              <GoPlus />
              Add
            </Button>
          </Box>
        </Box>
        <Box>
          <Box display={"flex"} justifyContent={"flex-end"} fontSize={30} onClick={()=>{
              counter()
              calculatePrice(16.99)
            }}>
            <Circle>
              <CiHeart />
            </Circle>
          </Box>

          <Box height={"200px"}>
            <Image
              src="https://i5.walmartimages.com/seo/b-tan-tanned-AF-intensifier-tanning-oil-8-fl-0z_4997e399-34ad-4b01-b630-34258298e205.801cb944716fdeefefd8ce74c7f0948f.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF"
              alt="image1"
              h="100%"
            />
          </Box>
          <Box>
            <Flex fontSize={20} alignItems={"center"}>
              <Box>$16.99</Box>
            </Flex>
            <Text>
              Electric sever for Men <br /> Women,for in Rechargeable...
            </Text>
            <Button border={"1px solid black"} borderRadius={20} bg="white" onClick={()=>{
              counter()
              calculatePrice(16.99)
            }}>
              <GoPlus />
              Add
            </Button>
          </Box>
        </Box>
        <Box>
          <Box display={"flex"} justifyContent={"flex-end"} fontSize={30}>
            <Circle>
              <CiHeart />
            </Circle>
          </Box>

          <Box height={"200px"}>
            <Image
              src="https://i5.walmartimages.com/seo/Bullfrog-Mosquito-Coast-SPF50-Continuous-Spray-5-5oz_85c584f5-9c7b-4c0b-adea-d28a50898f3e.f797e3a24f34bfff71f99d6b7681a87c.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF"
              alt="image1"
              h="100%"
            />
          </Box>
          <Box>
            <Text fontSize={13} className="rotobo-regular">
              Sponcered
            </Text>
            <Flex fontSize={20} alignItems={"center"}>
              <Box> $16.99</Box>
            </Flex>
            <Text>
              Electric sever for Men <br /> Women,for in Rechargeable...
            </Text>
            <Button border={"1px solid black"} borderRadius={20} bg="white" onClick={()=>{
              counter()
              calculatePrice(16.99)
            }}>
              <GoPlus />
              Add
            </Button>
          </Box>
        </Box>
        <Box>
          <Box display={"flex"} justifyContent={"flex-end"} fontSize={30}>
            <Circle>
              <CiHeart />
            </Circle>
          </Box>

          <Box height={"200px"}>
            <Image
              src="https://i5.walmartimages.com/seo/The-Doux-One-Press-Pass-Heat-Protectant-Dry-Oil-Spray-4-oz-Moisturizing-Unisex_4ae3c484-d00d-4bd5-a85c-678ea6fb3649.054dc0f4a1f2de322da87ce0ef285504.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF"
              alt="image1"
              h="100%"
            />
          </Box>
          <Box>
            <Flex fontSize={20} alignItems={"center"}>
              <Box> $16.99</Box>
            </Flex>
            <Text>
              Electric sever for Men <br /> Women,for in Rechargeable...
            </Text>
            <Button border={"1px solid black"} borderRadius={20} bg="white">
              Options
            </Button>
          </Box>
        </Box>
        <Box>
          <Box display={"flex"} justifyContent={"flex-end"} fontSize={30}>
            <Circle>
              <CiHeart />
            </Circle>
          </Box>

          <Box height={"200px"}>
            <Image
              src="https://i5.walmartimages.com/seo/L-Oreal-Paris-Voluminous-Panorama-Smudge-Resistant-Mascara-Blackest-Black_8f9ce131-4c80-4666-8eff-3396ee4c0f12.1d9c85d7975f715edce5ae0a4c594bc2.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF"
              alt="image1"
              h="100%"
            />
          </Box>
          <Box>
            <Flex fontSize={20} alignItems={"center"}>
              <Box> $16.99</Box>
            </Flex>
            <Text>
              Electric sever for Men <br /> Women,for in Rechargeable...
            </Text>
            <Button border={"1px solid black"} borderRadius={20} bg="white">
              Options
            </Button>
            <Box display={"flex"} justifyContent={"flex-end"} fontSize={30}>
              <Button
                fontSize={30}
                border={"1px solid black"}
                borderRadius={"100%"}
              >
                <LiaGreaterThanSolid />
              </Button>
            </Box>
          </Box>
        </Box>
      </Flex>
    </HStack>
  );
};

export default Product4;
