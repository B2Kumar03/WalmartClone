import { Box, Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import pro from '../assets/pro.png'
import beautyfulGirl from '../assets/beautyfulGirl.png'

const Product7 = () => {
  return (
    <HStack>
      <Flex height={"540px"} mt={10} justifyContent="space-evenly" w="100%">
        <Box w="50%" bg="#3A617B" borderRadius={8}>
          <Flex ml={5}>
            <Box>
              <Text fontSize={200}>New</Text>
              <Text fontSize={100} mt={-20}>
                arrivals
              </Text>
              <Text fontSize={20}>Beauty,home & more.</Text>
              <Button border={"1px solid black"} borderRadius={20} mt={5}>
                Shop now
              </Button>
            </Box>
            <Box ml={10}>
              <Box mt={5}>
                <Image
                  src="https://i5.walmartimages.com/seo/4U-by-Tia-MultiUse-Hair-Oil-with-Vitamin-E-and-Hemi15-2-fl-oz_fb665a23-26d9-4a36-8f5b-af36a4a779e5.d097bc6e1db37bee6bdd2d5bcbdff4ab.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF"
                  w="50%"
                  borderRadius={8}
                />
              </Box>
              <Box mt={5}>
                <Image
                  src="https://i5.walmartimages.com/seo/Better-Homes-Gardens-18oz-Salted-Coconut-Mahogany-Scented-2-Wick-Frosted-Bell-Jar-Candle_9b82bc19-7273-4921-b3c1-51fc7a24afea.758809ac46f1e009b78175c4387412b9.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF"
                  w="50%"
                  borderRadius={8}
                />
              </Box>
              <Box mt={5}>
                <Image
                  src="https://i5.walmartimages.com/seo/Mainstays-16-x-16-Reversible-Daisy-Truck-Decorative-Throw-Pillow-Navy_6ade7ddc-9483-4030-b4d0-0c4d2ad208e1.1c72ddf2dc8210daba0586ece975aa21.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF"
                  w="50%"
                  borderRadius={8}
                />
              </Box>
            </Box>
          </Flex>
        </Box>
        <Box w="24%" >
          <Box w="100%" height={"250px"} bg="#C4D6E9" borderRadius={8}>
            <Flex justifyContent={"space-between"}>
                <Box ml={2}>
                <Text fontSize={17} className="roboto-bold">
                    The Latest thrends style
                  </Text> 
                  <Link>
                    <u>Shop now</u>
                  </Link>
                </Box>
                <Box overflow={"hidden"}>
                    <Image src={beautyfulGirl} w="75%"/>
                </Box>
            </Flex>
          </Box>
          <Box w="100%" height={"270px"}>
            <Flex justifyContent={"space-evenly"}>
              <Box
                w="45%"
                bg="red"
                height={"270px"}
                border="1px solid black"
                bgImage={
                  "https://i5.walmartimages.com/asr/16796e88-c063-4493-94fa-d266f2cb4a80.e8422cb90e33978e365f470b7c1300fa.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF"
                }
                backgroundSize="cover"
                borderRadius={8}
                mt={5}
              >
                <Box mt={5} ml={5}><Text fontSize={20} className="roboto-bold" >
                  Seasonal home scants
                </Text>
                <Link>
                  <u>Shop now</u>
                </Link></Box>
              </Box>
              <Box w="45%" bg="#86ADE4"  borderRadius={8}
                mt={5} >
                <Box>
                  <Box mt={5} ml={5}>
                  <Text fontSize={20} className="roboto-bold">
                    Seasonal home scants
                  </Text>
                  <Link>
                    <u>Shop now</u>
                  </Link>
                  </Box>
                </Box>
                <Box>
                    <Image src={pro} w="80%"/>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
        <Box w="20%" bg="#DCDDE3" borderRadius={8}>
          <Box>
          <Box mt={5} ml={5}>
                <Text>Window curtains</Text>
                  <Text fontSize={25} className="roboto-bold">
                    Just in : easy updates
                  </Text>
                  <Link>
                    <u>Shop now</u>
                  </Link>
                  </Box>
          </Box>
          <Box>
            <Box>
                <Image src="https://i5.walmartimages.com/seo/Better-Homes-Gardens-Boucle-Blackout-Curtain-Panel-50-x-84-Black_386324c6-b25f-4012-a884-01277853b983.d3e204cdaacf43934614ad46a4771c8c.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF"/>
            </Box>
          </Box>
        </Box>
      </Flex>
    </HStack>
  );
};

export default Product7;
