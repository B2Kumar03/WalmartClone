import {
  Box,
  Button,
  Circle,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
  border,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { GoPlus } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { Scrollbars } from "react-custom-scrollbar";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { AuthContext } from "../AuthContext/AuthProvider";
import { useNavigate } from "react-router-dom";

const Products1 = () => {
  const { counter, calculatePrice } = useContext(AuthContext);
  const { setDetails } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <HStack>
      <Flex w="100%" justifyContent={"space-evenly"} mt={5}>
        <Box
          className="product"
          onClick={()=>navigate("/product/details")}
          
        >
          <Box display={"flex"} justifyContent={"flex-end"} fontSize={30}>
            <Circle>
              <CiHeart />
            </Circle>
          </Box>
          <Box height={"200px"}>
            <Image
              src="https://i5.walmartimages.com/seo/Electric-Shaver-Men-Women-4-1-Rechargeable-Razor-Waterproof-Painless-Epilator-Nose-Hair-Removal-Remover-Facial-Body-Bikini-Eyebrow-Beard-Sideburn-Mus_048f2612-82aa-400b-9169-567099c8e89c.f2dec29f5c99bab88dd706023c55419a.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF"
              alt="image1"
              h="100%"
            />
          </Box>
          <Box>
            <Text fontSize={13} className="rotobo-regular">
              Sponcered
            </Text>
            <Flex fontSize={20} alignItems={"center"}>
              <Box style={{ color: "green" }}>Now $16.99</Box>
              <Box fontSize={40}>
                <RxCross2 />
              </Box>
              <Box ml={-10}>$52.99</Box>
            </Flex>
            <Text>
              Electric sever for Men <br /> Women,for in Rechargeable...
            </Text>
            <Button
              border={"1px solid black"}
              borderRadius={20}
              bg="white"
              onClick={() => {
                counter();
                calculatePrice(16.99);
              }}
            >
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
              src="https://i5.walmartimages.com/seo/KingSo-22-inch-Wood-Burning-Fire-Pit-Camping-Picnic-Bonfire-Patio-Outside-Backyard-Garden-Small-Steel-Firepit-Bowl-Spark-Screen-Log-Grate-Poker_fa1c9c62-d182-468b-8f17-6624ac721b3e.d317b2c08cf5ba62ca1c48cb4efb76f1.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF"
              alt="image1"
              h="100%"
            />
          </Box>
          <Box>
            <Text fontSize={13} className="rotobo-regular">
              Sponcered
            </Text>
            <Flex fontSize={20} alignItems={"center"}>
              <Box style={{ color: "green" }}>Now $16.99</Box>
              <Box fontSize={40}>
                <RxCross2 />
              </Box>
              <Box ml={-10}>$52.99</Box>
            </Flex>
            <Text>
              Electric sever for Men <br /> Women,for in Rechargeable...
            </Text>
            <Button
              border={"1px solid black"}
              borderRadius={20}
              bg="white"
              onClick={() => {
                counter();
                calculatePrice(16.99);
              }}
            >
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
              src="https://i5.walmartimages.com/seo/LEGO-Speed-Champions-2-Fast-Furious-Nissan-Skyline-GT-R-R34-76917-Race-Car-Toy-Model-Building-Kit-Collectible-Racer-Minifigure-2023-Set-Kids_1078c4bd-27ad-49f8-8757-7336d6887d69.587429381fb543fdf9f69cf12c616532.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF"
              alt="image1"
              h="100%"
            />
          </Box>
          <Box>
            <Text fontSize={13} className="rotobo-regular">
              Sponcered
            </Text>
            <Flex fontSize={20} alignItems={"center"}>
              <Box style={{ color: "green" }}>Now $16.99</Box>
              <Box fontSize={40}>
                <RxCross2 />
              </Box>
              <Box ml={-10}>$52.99</Box>
            </Flex>
            <Text>
              Electric sever for Men <br /> Women,for in Rechargeable...
            </Text>
            <Button
              border={"1px solid black"}
              borderRadius={20}
              bg="white"
              onClick={() => {
                counter();
                calculatePrice(16.99);
              }}
            >
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
              src="https://i5.walmartimages.com/seo/LEGO-Classic-LEGO-Medium-Creative-Brick-Box-10696_f7af88f3-04c1-4c77-8237-e5cccc466ab4.2422f9b4d28481d4ffbc684d1357be85.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF"
              alt="image1"
              h="100%"
            />
          </Box>
          <Box>
            <Text fontSize={13} className="rotobo-regular">
              Sponcered
            </Text>
            <Flex fontSize={20} alignItems={"center"}>
              <Box style={{ color: "green" }}>Now $16.99</Box>
              <Box fontSize={40}>
                <RxCross2 />
              </Box>
              <Box ml={-10}>$52.99</Box>
            </Flex>
            <Text>
              Electric sever for Men <br /> Women,for in Rechargeable...
            </Text>
            <Button
              border={"1px solid black"}
              borderRadius={20}
              bg="white"
              onClick={() => {
                counter();
                calculatePrice(16.99);
              }}
            >
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
              src="https://i5.walmartimages.com/seo/Fisher-Price-Laugh-Learn-Wake-Up-Learn-Coffee-Mug-Baby-Toddler-Toy-with-Music-Lights_04856f59-6129-4e43-aa3f-ff839bc67fab.93bc2a4f8cee212664e7434f55c1b091.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF"
              alt="image1"
              h="100%"
            />
          </Box>
          <Box>
            <Text fontSize={13} className="rotobo-regular">
              Sponcered
            </Text>
            <Flex fontSize={20} alignItems={"center"}>
              <Box style={{ color: "green" }}>Now $16.99</Box>
              <Box fontSize={40}>
                <RxCross2 />
              </Box>
              <Box ml={-10}>$52.99</Box>
            </Flex>
            <Text>
              Electric sever for Men <br /> Women,for in Rechargeable...
            </Text>
            <Button
              border={"1px solid black"}
              borderRadius={20}
              bg="white"
              onClick={() => {
                counter();
                calculatePrice(16.99);
              }}
            >
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
              src="https://i5.walmartimages.com/seo/Better-Homes-Gardens-Oaklee-2-Drawer-Nightstand-for-bedroom-Charcoal-Finish_4daaa94e-a1d5-45ec-8893-092a1289c2dd.3e44901795490ec5efab0fc6859d5192.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF"
              alt="image1"
              h="100%"
            />
          </Box>
          <Box>
            <Text fontSize={13} className="rotobo-regular">
              Sponcered
            </Text>
            <Flex fontSize={20} alignItems={"center"}>
              <Box style={{ color: "green" }}>Now $16.99</Box>
              <Box fontSize={40}>
                <RxCross2 />
              </Box>
              <Box ml={-10}>$52.99</Box>
            </Flex>
            <Text>
              Electric sever for Men <br /> Women,for in Rechargeable...
            </Text>
            <Button
              border={"1px solid black"}
              borderRadius={20}
              bg="white"
              onClick={() => {
                counter();
                calculatePrice(16.99);
              }}
            >
              <GoPlus />
              Add
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

export default Products1;
