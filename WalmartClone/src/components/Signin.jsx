import { Box, FormControl, Image, Input, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import {  Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

const Signin = () => {
  const { setSign } = useContext(AuthContext);
  const { setEmail } = useContext(AuthContext);
  const [email,setEm]=useState("");

  function submitForm(e){
    // e.preventDefault();
    setEmail(email)
    console.log("s")
    
  }
  
  useEffect(() => {
    setSign();
    return setSign;
  }, []);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      mt={15}
    >
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Image src="https://i5.walmartimages.com/dfw/4ff9c6c9-d10e/k2-_ef2c8660-96ed-4f64-891d-329fa488c482.v1.png" />
        <Text textAlign={"center"} className="roboto-bold" fontSize={20}>
          Sign in or create your account
        </Text>
        <Text textAlign={"center"} mt={5}>
          Not sure if you have an account? <br />
          Enter your email and we’ll check for you.
        </Text>
        <br />
        <br />
        <FormControl >
        <label className="roboto-bold" fontSize={10}>
            Email Address
          </label>
          <br />
          <Input border="1px solid black" w={400} h={20} onChange={(e)=>setEm(e.target.value)}/>
          <br />
          <br />
          </FormControl>
          <FormControl >
          
          <ChakraLink
            as={ReactRouterLink}
            to="/account/create"
            textDecoration={"none"}
            _hover={"none"}
          >
            <Input
              w={400}
              type="submit"
              value="Continue"
              bg="#004F9A"
              borderRadius={20}
              color={"white"}
              cursor={"pointer"}
              onClick={()=>{
                submitForm()
              }}
            />
          </ChakraLink>
        </FormControl>
        
        <br />
        <Text>
          Securing your personal information is our priority. <br />
          <u>See our privacy measures.</u>
        </Text>
      </Box>
    </Box>
  );
};

export default Signin;
