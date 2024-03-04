import { Box, Button, Checkbox, FormControl, Image, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import { Form, Link, Navigate, Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";


const AccountCreateForm = () => {
    const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  const [n,setNm]=useState("")
  const {setSign}=useContext(AuthContext)
  const {email}=useContext(AuthContext)
  const {setName}=useContext(AuthContext)
  const [password,setPassWord]=useState("");
  
  useEffect(()=>{
    setSign()
     return setSign
  },[])
  function formSubmit(){
    console.log(n);
    setName(n,password)
  }


  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} mt={15}>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Image src="https://i5.walmartimages.com/dfw/4ff9c6c9-d10e/k2-_ef2c8660-96ed-4f64-891d-329fa488c482.v1.png" />
        <Text textAlign={"center"} className="roboto-bold" fontSize={20}>
           Create your Walmart account 
        </Text>
        <Text textAlign={"center"} mt={5}>
          Email Address <u>{email}</u>
        </Text>
        <br />
        <br />
        <FormControl>
          <label className="roboto-bold" fontSize={10} >
            First name
          </label>
          <br />
          <Input border="1px solid black" w={400} onChange={(e)=>setNm(e.target.value)} /><br /><br />
          <label className="roboto-bold" fontSize={10}>
            Last name
          </label>
          <br />
          <Input border="1px solid black" w={400}  /><br /><br />
          <label className="roboto-bold" fontSize={10}>
            Create Password
          </label>
          <br />
          <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        border="1px solid black"
        onChange={(e)=>setPassWord(e.target.value)}
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick} bg="white">
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
          <br />
          <br />
          <ChakraLink
                as={ReactRouterLink}
                to="/account/otp"
                textDecoration={"none"}
                _hover={"none"}
              >
                <Input
            w={400}
            type="submit"
            value="Create account"
            bg="#004F9A"
            borderRadius={20}
            color={"white"}
            cursor={"pointer"}
            onClick={formSubmit}
          />
              </ChakraLink>
          <br /><br />
          <Checkbox
      defaultChecked
      colorScheme="blue"
      isChecked="true"
      className="roboto-bold"
    >
      Keep me signed in
    </Checkbox>
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

export default AccountCreateForm;
