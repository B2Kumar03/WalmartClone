import {
  Box,
  FormControl,
  HStack,
  Image,
  Input,
  PinInput,
  PinInputField,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import {
  Form,
  Link,
  Navigate,
  Link as ReactRouterLink,
} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

const Pin = () => {
  const { setAuth } = useContext(AuthContext);
  const { setSign } = useContext(AuthContext);
  const { name } = useContext(AuthContext);
  const { number } = useContext(AuthContext);

  const [address, setAddress] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

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
        <Image src="https://i5.walmartimages.com/dfw/63fd9f59-7d8b/f36f4f89-5684-4c50-8780-e1ee1bef1870/v1/hand-holding-phone-blue-bubble.svg" />
        <Text textAlign={"center"} className="roboto-bold" fontSize={20}>
          Enter verification code
        </Text>
        <Text textAlign={"center"} mt={5}>
          Please enter the 6 digit verification code <br />
          we sent the {number}
        </Text>
        <br />
        <br />
        <FormControl>
          <label className="roboto-bold" fontSize={8}>
            Phone number(10 digits)
          </label>
          <br />
          <HStack>
            <PinInput defaultValue="">
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>
          <br />
          <br />
          <label fontSize={8}>
            Don't recieved it ?<u>Get another code</u>
          </label>
        </FormControl>
        <FormControl>
          <br />
          <Input
            w={400}
            type="submit"
            value="Verify number"
            bg="#004F9A"
            borderRadius={20}
            color={"white"}
            cursor={"pointer"}
            onClick={() => {
              const examplePromise = new Promise((resolve, reject) => {
                setTimeout(() => {
                  setAuth();
                  navigate("/");

                  resolve(200);
                }, 5000);
              });

              toast
                .promise(examplePromise, {
                  success: {
                    title: "Account created successfully .",
                    description: `Hii ,${name}`,
                  },
                  error: {
                    title: "Promise rejected",
                    description: "Something wrong",
                  },
                  loading: {
                    title: "Verifying...",
                    description: "Please wait",
                  },
                })
                .then(() => {})
                .catch((error) => {
                  console.error("Error:", error);
                });
            }}
          />
        </FormControl>
      </Box>
    </Box>
  );
};

export default Pin;
