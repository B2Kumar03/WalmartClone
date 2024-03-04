import {
  Box,
  Button,
  Center,
  Circle,
  Flex,
  HStack,
  Image,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  flexbox,
  useDisclosure,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoGrid, IoGridOutline } from "react-icons/io5";
import { VscServerProcess } from "react-icons/vsc";
import { BsUiRadiosGrid } from "react-icons/bs";
import { RiHistoryFill } from "react-icons/ri";
import { Input } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { CiHeart } from "react-icons/ci";
import { BiLogIn, BiUser } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import React, { useContext, useState } from "react";
import { Link, Link as ReactRouterLink, useNavigate } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { AuthContext } from "../AuthContext/AuthProvider";
import { IoIosLogOut } from "react-icons/io";
import Searchmenu from "./Searchmenu";
import SideNavbar from "./SideNavbar";
import { IoMdLogIn } from "react-icons/io";
// import Login from "./Login";

const Navbar = () => {
  const { name } = useContext(AuthContext);
  const { auth } = useContext(AuthContext);
  const { setAuth } = useContext(AuthContext);
  const { setName } = useContext(AuthContext);
  const { handleChange } = useContext(AuthContext);
  const navigate = useNavigate();
  const { search, handleSearch } = useContext(AuthContext);
  const [searchValue, setSearchValue] = useState();
  const { count, totalPrice } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const  modal = useDisclosure();
  const [drawerstate,setDrawerSate]=useState(false)
  const {signOut}=useContext(AuthContext)


  return (
    <HStack>
      {/* <Login isOpen1={modal.isOpen} onClose1={modal.onClose} /> */}
      <Flex
        justifyContent="space-between"
        w="100%"
        p={2}
        bg="#0071DC"
        color="white"
        alignItems="center"
      >
        <Box
          fontSize={30}
          display={{
            base: "block",
            sm: "block",
            md: "block",
            lg: "none",
            xl: "none",
          }}
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >
            {drawerstate?<RxHamburgerMenu onClick={()=>{setDrawerSate((prev)=>!prev);onOpen()}} />:<RxHamburgerMenu onClick={()=>{setDrawerSate((prev)=>!prev);onClose()}} />}
            <SideNavbar isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
            <Image
              src="https://i5.walmartimages.com/dfw/4ff9c6c9-d10e/k2-_ef2c8660-96ed-4f64-891d-329fa488c482.v1.png"
              w="30%"
              m={4}
            />
          </Box>
        </Box>

        <Box
          p={3}
          className="logo"
          display={{
            base: "none",
            sm: "none",
            md: "none",
            lg: "block",
            xl: "block",
          }}
        >
          <Image
            src="https://i5.walmartimages.com/dfw/63fd9f59-b3e1/7a569e53-f29a-4c3d-bfaf-6f7a158bfadd/v1/walmartLogo.svg"
            alt="logo"
          />
        </Box>

        <Box
          color="white"
          display={{
            base: "none",
            sm: "none",
            md: "none",
            lg: "block",
            xl: "block",
          }}
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            // border={"1px solid black"}

            p={3}
            className="department"
          >
            <Box>
              <IoGridOutline />
            </Box>
            <Box ml={2}>
            <Menu>
  <MenuButton
    px={4}
    py={2}
    transition='all 0.2s'
    // borderRadius='md'
    // borderWidth='1px'
    // _hover={{ bg: 'gray.400' }}
    // _expanded={{ bg: 'blue.400' }}
    // _focus={{ boxShadow: 'outline' }}
  >
    Departments
  </MenuButton>
  <MenuList color={"black"}>
    <MenuItem>All Departments</MenuItem>
    <MenuDivider />
    <MenuItem>Deals</MenuItem>
    <MenuItem>Grocery</MenuItem>
    <MenuItem>Easter</MenuItem>
    <MenuItem>Spring Shop</MenuItem>
    <MenuItem>Home,Garden & Tools</MenuItem>
    <MenuItem>Clothing,Shoes</MenuItem>
    <MenuItem>Electronics</MenuItem>
    <MenuItem>Baby</MenuItem>
    <MenuItem>Kids</MenuItem>
    <MenuItem>Toys & Video Games</MenuItem>
    <MenuItem>Pharamcy,Health & Wellness</MenuItem>
    <MenuItem>Beauty</MenuItem>
    <MenuItem>Personal Care</MenuItem>
  </MenuList>
</Menu>
            </Box>
          </Box>
        </Box>
        <Box
          color="white"
          display={{
            base: "none",
            sm: "none",
            md: "none",
            lg: "block",
            xl: "block",
          }}
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            // border={"1px solid black"}
            p={3}
            className="services"
          >
            <Box>
              <BsUiRadiosGrid />
            </Box>
            <Box ml={2}>
            <Menu>
  <MenuButton
    px={4}
    py={2}
    transition='all 0.2s'
    // borderRadius='md'
    // borderWidth='1px'
    // _hover={{ bg: 'gray.400' }}
    // _expanded={{ bg: 'blue.400' }}
    // _focus={{ boxShadow: 'outline' }}
  >
     <Text className="roboto-bold">Services</Text>
  </MenuButton>
  <MenuList color={"black"}>
    <MenuItem> <Text className="roboto-bold">All Services</Text></MenuItem>
    <MenuDivider />
    <MenuItem>Auto Care Center Services</MenuItem>
    <MenuItem>Pharmacy</MenuItem>
    <MenuItem>Health & Wellness</MenuItem>
    <MenuItem>Registry,Lists,& Gift</MenuItem>
    <MenuItem>Custom Cakes</MenuItem>
    <MenuItem>Photo Services</MenuItem>
    <MenuItem>Electronics</MenuItem>
    <MenuItem>Money Services</MenuItem>
    <MenuItem>Protection,Home & Tech</MenuItem>
    <MenuItem>Subscription</MenuItem>
    <MenuItem>Community & Giving</MenuItem>
    <MenuItem>Ordering online</MenuItem>
    <MenuItem>Get inspired</MenuItem>
  </MenuList>
</Menu>
            </Box>
          </Box>
        </Box>
        <Box w={{
  base: "1xl",
  sm: "100%",
  md: "100%",
  lg: "2xl",
  xl: "2xl",
  
}}>
          <InputGroup size="md" bg="#FFFFFF" borderRadius="20px">
            <Input
              pr="4.5rem"
              placeholder="Search everthing at walmart online and in store"
              borderRadius="20px"
              className="roboto-light"
              bg="#FFFFFF"
              color="black"
              fontSize={18}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <InputRightElement width="3rem">
              <Circle
                size="40px"
                bg="#FFC326"
                color="white"
                className="account"
                onClick={() => {
                  handleSearch(searchValue);
                  navigate(`/product/${searchValue}`);
                }}
              >
                <Search2Icon />
              </Circle>
            </InputRightElement>
          </InputGroup>
        </Box>

        <Box color="white" display={{
  base: "none",
  sm: "none",
  md: "none",
  lg: "block",
  xl: "block",
  
}}>
          <Box
            display={"flex"}
            alignItems={"center"}
            // border={"1px solid black"}
            p={3}
            className="items"
          >
            <Box>
              <CiHeart />
            </Box>
            <Box ml={2}>
              <Text className="roboto-regular" color="#ccc" fontSize="12px">
                Recoder
              </Text>
              <Text className="roboto-bold">My Items</Text>
            </Box>
          </Box>
        </Box>
        <Box color="white" display={{
  base: "none",
  sm: "none",
  md: "none",
  lg: "block",
  xl: "block",
  
}}>
          <Box
            display={"flex"}
            alignItems={"center"}
            // border={"1px solid black"}
            p={3}
            className="account"
          >
            <Menu>
              <MenuButton
                px={4}
                py={2}
                transition="all 0.2s"
                borderRadius="md"
                borderWidth="1px"
                border={"none"}
                _expanded={{ bg: "blue.400" }}
              >
                <Box display={"flex"} alignItems={"center"}>
                  <Box>
                    <BiUser />
                  </Box>
                  <Box ml={2}>
                    <Text
                      className="roboto-regular"
                      color="#ccc"
                      fontSize="12px"
                    >
                      {auth ? `Hi, ${name}` : "Sign In"}
                    </Text>
                    <Text className="roboto-bold">Account</Text>
                  </Box>
                </Box>
              </MenuButton>
              <MenuList p={10}>
                <ChakraLink
                  as={ReactRouterLink}
                  to="/account/signUp"
                  textDecoration={"none"}
                  _hover={"none"}
                >
                  {auth ? null : (
                    <>
                      <Button
                        w="100%"
                        bg="#004F9A"
                        borderRadius={20}
                        color="white"
                      >
                        Sign in or Create Account
                      </Button>
                      <br />
                      <br />
                    </>
                  )}
                </ChakraLink>

                <hr />
                <Text mt={10} color="black">
                 <Box
                    display={"flex"}
                    alignItems={"center"}
                    cursor={"pointer"}
                  >
                    <BiLogIn/>
                    <Text ml={2} onClick={()=>navigate("/account/login")}>Login(<u>If you have walmert account.</u>)</Text>
                  </Box>
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    cursor={"pointer"}
                    mt={5}
                  >
                    <RiHistoryFill />
                    <Text ml={2}>Purchase history</Text>
                  </Box>
                </Text>
                <Text mt={5} color="black">
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    cursor={"pointer"}
                  >
                    <VscServerProcess />
                    <Text ml={2}>Walmart +</Text>
                  </Box>
                </Text>
                <Text mt={5} color="black">
                  {auth ? (
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      cursor={"pointer"}
                      onClick={() => {
                        signOut()
                      }}
                    >
                      <IoIosLogOut />
                      <Text ml={2}>Sign out</Text>
                    </Box>
                  ) : null}
                </Text>
              </MenuList>
            </Menu>
            <Box></Box>
          </Box>
        </Box>
        <Box color="white" >
          <Box
            display={"flex"}
            alignItems={"center"}
            // border={"1px solid black"}
            p={3}
            className="cart"
          >
            <Box>
              <ChakraLink
                as={ReactRouterLink}
                to="/home/cart"
                textDecoration={"none"}
                _hover={"none"}
              >
                <Box
                  bg="#FFC326"
                  color="black"
                  borderRadius="100%"
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  w="20px"
                  h="20px"
                  // border="1px solid red"
                >
                  <span>{count}</span>
                </Box>
                <Box fontSize={25}>
                  <BsCart2 />
                </Box>
                <Box fontSize={12}>
                  <span>$ {totalPrice}</span>
                </Box>
              </ChakraLink>
            </Box>
          </Box>
        </Box>
      </Flex>
      <Searchmenu />
    </HStack>
  );
};

export default Navbar;
