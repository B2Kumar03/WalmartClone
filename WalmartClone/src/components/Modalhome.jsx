import {
  Box,
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { FaGreaterThan } from "react-icons/fa6";

const Modalhome = ({ onClose, isOpen }) => {
  
  return (
    <>
      <Modal blockScrollOnMount={false} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent top="-1px" right={{
  base: 545,
  sm: 10,
  md: 10,
  lg: 545,
  xl: 550,
  
}} bg="#0071DC">
          <Flex mt={100} justifyContent="center">
            <Box>
              <Image
                borderRadius="full"
                boxSize="50px"
                src="https://i5.walmartimages.com/dfw/4ff9c6c9-486e/k2-_4be6f532-b0b2-4480-bb65-d53586e87193.v1.png"
                alt="logo"
              />
              <Text color="white" fontWeight={500}>
                Shipping
              </Text>
            </Box>
            <Box ml={5}>
              <Image
                borderRadius="full"
                boxSize="50px"
                src="https://i5.walmartimages.com/dfw/4ff9c6c9-944a/k2-_333618e2-7327-4081-990e-7870dd062248.v1.png"
                alt="logo"
              />
              <Text color="white" fontWeight={500}>
                Pickup
              </Text>
            </Box>
            <Box ml={5}>
              <Image
                borderRadius="full"
                boxSize="50px"
                src="https://i5.walmartimages.com/dfw/4ff9c6c9-4637/k2-_c8d39665-dac4-474a-9fb7-ab5feeb647b5.v1.png"
                alt="logo"
              />
              <Text color="white" fontWeight={500}>
                Delivery
              </Text>
            </Box>
          </Flex>

          <ModalBody>
            <Flex flexDirection="column">
              <Box
                w="400px"
                bg="white"
                display="flex"
                flexDirection="column"
                alignItems="center"
                borderRadius="7px"
                p="10px"
              >
                <Box display={"flex"} alignItems={"center"}>
                  <Box>
                    <CiLocationOn />
                  </Box>
                  <Box>
                    <Text fontWeight={600}>
                      Add an address for shipping and delivery <br />
                    </Text>
                  </Box>
                </Box>
                <span>Scramento ,CA 95829</span>
                <Button
                  borderRadius="full"
                  w="300px"
                  bg="#0071DC"
                  color="white"
                >
                  Add Address
                </Button>
              </Box>
              <Box
                w="400px"
                bg="white"
                display="flex"
                flexDirection="column"
                alignItems="center"
                borderRadius="7px"
                p="10px"
                mt={10}
              >
                <Box display={"flex"} alignItems={"center"}>
                  <Box>
                    <IoHomeOutline/>
                  </Box>
                  <Box>
                    <Text fontWeight={600}>
                    Scramento Supercenter 8915 Gerber Road,<br />
                    </Text>
                  </Box>
                </Box>
                <Box display={"flex"}><span>Scramento,CA 95829</span><Text ml="130px"><FaGreaterThan /></Text></Box>
                
              </Box>
              

            </Flex>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Modalhome;
