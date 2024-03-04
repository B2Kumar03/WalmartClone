import {
  Box,
  Button,
  Checkbox,
  FormControl,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import {
  Form,
  Link,
  Navigate,
  Link as ReactRouterLink,
  useNavigate,
} from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

const Login = () => {
  const navigate=useNavigate()
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const {auth}=useContext(AuthContext)
  const { setSign } = useContext(AuthContext);
  const { email } = useContext(AuthContext);
  const { setName } = useContext(AuthContext);
  const {setAuth}=useContext(AuthContext)
  const [password, setPassWord] = useState("");
  const [email1, setEmail] = useState("");

  useEffect(() => {
    setSign();
    return setSign;
  }, []);
  function formSubmit() {
    const storedUser = JSON.parse(localStorage.getItem("user-info")) || {};
    const storedPassword = JSON.parse(localStorage.getItem("user-password")) || {};
    const storedName = JSON.parse(localStorage.getItem("name")) || {};
    const storedEmail = storedUser.email;
    if (storedEmail) {
      setAuth();
      setName(storedName.n);
      setShow(false); // Reset password visibility toggle
    }
  }
  if(auth){
    navigate("/")
}

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      mt={15}
    >
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"} border="1px solid black" p={10} mt={10}>
        <Image src="https://i5.walmartimages.com/dfw/4ff9c6c9-d10e/k2-_ef2c8660-96ed-4f64-891d-329fa488c482.v1.png" />
        <Text textAlign={"center"} className="roboto-bold" fontSize={20}>
          User Login
        </Text>
        
        <br />
        <br />
        <FormControl>
          <label className="roboto-bold" fontSize={10}>
            Email
          </label>
          <br />

          <InputGroup size="md">
            <Input  pr="4.5rem"
              type="email"
              border="1px solid black"
              onChange={(e) => setEmail(e.target.value)}/>
              
          </InputGroup>
          <br /><br />
          <label className="roboto-bold" fontSize={10}>
            Password
          </label>
          <br />
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              border="1px solid black"
              onChange={(e) => setPassWord(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick} bg="white">
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <br />
          <br />
        
          <Input
            w={40}
            mt={10}
            type="submit"
            value="Login"
            bg="#004F9A"
            borderRadius={20}
            color={"white"}
            cursor={"pointer"}
            onClick={formSubmit}
          />
          
          <Input
            w={40}
            type="submit"
            value="Create account"
            bg="white"
            borderRadius={20}
            ml={1}
            color={"black"}
            cursor={"pointer"}
            onClick={()=>navigate("/account/create")}
          />


          <br />
          <br />
        </FormControl>
      </Box>
    </Box>
  );
};

export default Login;
