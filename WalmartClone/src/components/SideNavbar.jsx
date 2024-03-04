import { QuestionOutlineIcon, RepeatClockIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Image,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { LineHorizontal } from "./LineHorizontal";
import { TbSitemap } from "react-icons/tb";
import { CiUser } from "react-icons/ci";
import { BsListStars } from "react-icons/bs";
import { LiaRegisteredSolid } from "react-icons/lia";
import { AuthContext } from "../AuthContext/AuthProvider";
import { useNavigate } from "react-router-dom";

function SideNavbar({ isOpen, onClose }) {
    const {auth,name}=useContext(AuthContext)
    const navigate=useNavigate()



  return (
    <>
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay top={0} />
        <DrawerContent overflowX={110}>
          <DrawerHeader
            borderBottomWidth="1px"
            mt={180}
            display="flex"
            alignItems="center"
          >
            <Image
              src="https://i5.walmartimages.com/dfw/4ff9c6c9-d10e/k2-_ef2c8660-96ed-4f64-891d-329fa488c482.v1.png"
              w={10}
            />{" "}
            {auth?<Text ml={5}>Hii ,{name} </Text>:<Button
                        w="100%"
                        bg="#004F9A"
                        borderRadius={20}
                        color="white"
                        onClick={()=>navigate("/account/create")}
                      >
                        Sign in or Create Account
                      </Button>}
          </DrawerHeader>
          <DrawerBody>
            <Box display="flex" flexDirection="column">
              <Box display="flex" alignItems="center" ml={5} className="tab" >
                <Box>
                  <Image
                    src="https://i5.walmartimages.com/dfw/4ff9c6c9-d10e/k2-_ef2c8660-96ed-4f64-891d-329fa488c482.v1.png"
                    w={5}
                  />
                </Box>{" "}
                <Text ml={3}>Walmart +</Text>
              </Box>
              <LineHorizontal />
              <Box display="flex" alignItems="center" ml={5} className="tab">
                <RepeatClockIcon />
                <Text ml={3}>Purchase history</Text>
              </Box>
              <LineHorizontal />
              <Box display="flex" alignItems="center" ml={5} className="tab">
                <TbSitemap />
                <Text ml={3}>My items</Text>
              </Box>
              <LineHorizontal />
              <Box display="flex" alignItems="center" ml={5} className="tab">
                <CiUser />
                <Text ml={3}>Account</Text>
              </Box>
              <LineHorizontal />
              <Box display="flex" alignItems="center" ml={5} className="tab">
                <QuestionOutlineIcon />
                <Text ml={3}>Help</Text>
              </Box>
              <LineHorizontal />
              <Box display="flex" alignItems="center" ml={5} className="tab">
                <BsListStars />
                <Text ml={3}>Lists</Text>
              </Box>
              <LineHorizontal />
              <Box display="flex" alignItems="center" ml={5} className="tab">
                <LiaRegisteredSolid />
                <Text ml={3}>Registries</Text>
              </Box>
              <LineHorizontal />
              <Box></Box>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SideNavbar;
