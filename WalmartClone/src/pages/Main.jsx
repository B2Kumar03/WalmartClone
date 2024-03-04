import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SkeletonCircle,
  SkeletonText,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Heading1 from "./Heading1";

export const Main = () => {
  const [isLoading,setLoading]=useState(true)
  useEffect(()=>{
    setTimeout(()=>{
         setLoading((prev)=>!prev)
    },2000)
  },[])

if(isLoading){
  return <Box padding='6' boxShadow='lg' bg='white'>
  <SkeletonCircle size='10' />
  <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
  <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
  <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
  <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
  <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
  <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
</Box>
}


  return (
    <Flex w="100%" justifyContent={"space-evenly"} mt={5}>
      <Box w="20%">
        <Box height="250px" bg="#E6CFA7" borderRadius={8}>
          <Box ml={10} display={"flex"} flexDirection={"column"}>
            <Text fontSize={20} className="roboto-bold" mt={5}>
              Floor care for so much less
            </Text>
            <Link textAlign="center">
              <u>Shop now</u>
            </Link>
          </Box>
          <Flex justifyContent={"flex-end"}>
            <Image
              src="https://github.com/B2Kumar03/homepageImage/blob/main/shark-removebg-preview.png?raw=true"
              alt="logo"
              w={230}
            />
          </Flex>
        </Box>
        <Box bg="#D9E4F5" mt={8}>
          <Box ml={5} display={"flex"} flexDirection={"column"}>
            <Text fontSize={20} className="roboto-bold" mt={5}>
              Top styles-low,low <br />
              Prices
            </Text>
          </Box>
          <Flex>
            <Box>
              <Box ml={5}>
                <Link textAlign="center">
                  <u>Shop now</u>
                </Link>
              </Box>

              <Box mt={100} ml={5}>
                <Heading>
                  <sup>$</sup>22<sup>43</sup>
                </Heading>
              </Box>
            </Box>
            <Box overflow={"hidden"} ml={5}>
              <Image
                src="https://github.com/B2Kumar03/homepageImage/blob/main/woman-removebg-preview.png?raw=true"
                alt="woman"
                w="100%"
              />
            </Box>
          </Flex>
        </Box>
        <Box bg="#95BBF9" mt={8} borderRadius={8}>
          <Flex justifyContent={"space-around"}>
            <Box>
              <Text fontSize={20} className="roboto-bold" mt={8} ml={5}>
                Let's play under $25
              </Text>
              <Box mt={8} ml={5}>
                <Link>
                  <u>Shop toys</u>
                </Link>
              </Box>
            </Box>
            <Image
              src="https://github.com/B2Kumar03/homepageImage/blob/main/toys-removebg-preview.png?raw=true"
              alt="toys"
              w="60%"
            />
          </Flex>
        </Box>
      </Box>
      <Box w="50%">
        <Box height="370px" bg="#B3CEFE" borderRadius={8}>
          <Flex justifyContent={"space-evenly"}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              <Box mt={8}>
                <Heading color="black" size="4xl" mb={5}>
                  Springs
                </Heading>
                <Heading color="black" size="2xl" mt="-5">
                  Savings
                </Heading>
              </Box>
              <Box mt={10}>
                <Button border={"1px solid black"} borderRadius={20}>
                  Shop all
                </Button>
              </Box>
              <Box>
                <Text
                  textOverflow={"ellipsis"}
                  overflow={"hidden"}
                  whiteSpace={"nowrap"}
                  className="text-truncate"
                >
                  <Image
                    src="https://github.com/B2Kumar03/homepageImage/blob/main/price-removebg-preview.png?raw=true"
                    ml={-10}
                  />
                </Text>
              </Box>
            </Box>
            <Box>
              <Box>
                <Image
                  src="https://github.com/B2Kumar03/homepageImage/blob/main/samsungTv-removebg-preview.png?raw=true"
                  alt="tv"
                  w={450}
                />
              </Box>
            </Box>
          </Flex>
        </Box>
        <Box mt={8} borderRadius={8}>
          <Flex justifyContent={"space-between"}>
            <Box
              w="47%"
              height={"250px"}
              bg="#D0CCC0"
              h="100%"
              bgImage={
                "https://i5.walmartimages.com/seo/Better-Homes-Gardens-Oaklee-2-Drawer-Nightstand-for-bedroom-Charcoal-Finish_4daaa94e-a1d5-45ec-8893-092a1289c2dd.3e44901795490ec5efab0fc6859d5192.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF"
              }
              backgroundSize="cover"
              borderRadius={8}
            >
              <Box height={"280px"} ml={5} borderRadius={8}>
                <Box>
                  <Heading>
                    Budget friendly <br /> furniture
                  </Heading>
                </Box>
                <Box>
                  <Link>
                    <u>Shop now</u>
                  </Link>
                </Box>
                <Box mt={15}>
                  <Text>From</Text>
                  <Heading>
                    <sup>$</sup>78
                  </Heading>
                </Box>
              </Box>
            </Box>
            <Box w="47%" bg="#FDE77F" h="100%" borderRadius={8}>
              <Box ml={5} display={"flex"} flexDirection={"column"}>
                <Text fontSize={20} className="roboto-bold" mt={10}>
                  Up to 40% off
                  <br />
                </Text>
              </Box>
              <Flex>
                <Box>
                  <Box ml={5}>
                    <Link textAlign="center">
                      <u>Shopow</u>
                    </Link>
                  </Box>

                  <Box mt={100} ml={5}>
                    <Heading>
                      Flase <br />
                      Deals
                    </Heading>
                  </Box>
                </Box>
                <Box overflow={"hidden"} ml={5}>
                  <Image
                    src="https://github.com/B2Kumar03/homepageImage/blob/main/lamp-removebg-preview.png?raw=true"
                    alt="woman"
                    w="100%"
                  />
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Box bg="#FFC21F" mt={8} borderRadius={8}>
          <Flex>
            <Box w={"70%"} p={10}>
              <Text fontSize={20}>
                Enjoy Free Same-day delivery low prices !{" "}
              </Text>
              <Text>Apply tearm</Text>
              <Box mt={8}>
                {" "}
                <Link>
                  <u>Join walmart+</u>
                </Link>
              </Box>
            </Box>
            <Box w={"30%"} bg="white" color="#0170DA" borderLeftRadius={50}>
              <Image src="https://github.com/B2Kumar03/homepageImage/blob/main/walmartlogo.png?raw=true" />
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box w="20%">
        <Box height="250px" bg="#E7EDF6" borderRadius={8}>
          <Box>
            <Text fontSize={25} className="roboto-bold" p={5}>
              Save on personal care
            </Text>
          </Box>
          <Flex p={5}>
            <Box className="roboto-regular">
              <Link>
                <u>Shop now</u>
              </Link>
            </Box>
            <Box>
              <Image src="https://github.com/B2Kumar03/homepageImage/blob/main/savingss-removebg-preview.png?raw=true" />
            </Box>
          </Flex>
        </Box>
        <Box height="250px" bg="#FEEABF" mt={5}>
          <Box>
            <Text fontSize={18} className="roboto-bold" p={5}>
              Apple savings up to $150 off
            </Text>
          </Box>
          <Flex p={5}>
            <Box className="roboto-regular">
              <Link>
                <u>Shop now</u>
              </Link>
            </Box>
            <Box ml={10}>
              <Image
                src="https://github.com/B2Kumar03/homepageImage/blob/main/smartphone2-removebg-preview.png?raw=true"
                w="70%"
              />
            </Box>
          </Flex>
        </Box>
        <Box height="350px" bg="#A5CBEE" mt={8} borderRadius={8}>
          <Image src="https://github.com/B2Kumar03/homepageImage/blob/main/wholeContent.png?raw=true" alt="image" h={"100%"} borderRadius={8} cursor={"pointer"}/>
        </Box>
      </Box>
    </Flex>
  );
};
