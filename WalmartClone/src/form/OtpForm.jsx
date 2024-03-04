import { Box, FormControl, Image, Input, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import {
  Form,
  Link,
  Navigate,
  Link as ReactRouterLink,
} from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

const OtpForm = () => {
  const { setSign } = useContext(AuthContext);
  const { setEmail } = useContext(AuthContext);
  const [email, setEm] = useState("");

  const { setNumber } = useContext(AuthContext);
  const [number, setnum] = useState("");

  function formSubmit() {
    console.log(number);
    setNumber(number);
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
          Welcome {name}
        </Text>
        <Image src="https://i5.walmartimages.com/dfw/63fd9f59-7d8b/f36f4f89-5684-4c50-8780-e1ee1bef1870/v1/hand-holding-phone-blue-bubble.svg" />
        <Text textAlign={"center"} className="roboto-bold" fontSize={20}>
          Make it easier to sign in
        </Text>
        <Text textAlign={"center"} mt={5}>
          Next time, you can get a one-time code sent to your <br /> phone
          instead of entering a password.
        </Text>
        <br />
        <br />
        <FormControl>
          <label className="roboto-bold" fontSize={8}>
            Phone number(10 digits)
          </label>
          <br />
          <Input
            border="1px solid black"
            w={400}
            h={10}
            onChange={(e) => setnum(e.target.value)}
          />
          <br />
          <br />
          <label fontSize={8}>
            Message and data rates may apply. <br />
            View our mobile alert terms
          </label>
        </FormControl>
        <FormControl>
          <ChakraLink
            as={ReactRouterLink}
            to="/account/verify"
            textDecoration={"none"}
            _hover={"none"}
          >
            <br />
            <Input
              w={400}
              type="submit"
              value="Send code"
              bg="#004F9A"
              borderRadius={20}
              color={"white"}
              cursor={"pointer"}
              onClick={() => {
                formSubmit();
              }}
            />
          </ChakraLink>
        </FormControl>

        <br />
        <br />
        <Text>
          <u>Not now</u>
        </Text>
      </Box>
    </Box>
  );
};

export default OtpForm;
