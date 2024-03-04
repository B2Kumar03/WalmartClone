import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Heading3 = () => {
  return (
    <Flex mt={20}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        w={"95%"}
        margin={"auto"}
      >
        <Heading fontSize={20} className="roboto-bold">
          Get it all hears
        </Heading>
        <Link>
          <u>View more</u>
        </Link>
      </Box>
    </Flex>
  );
};

export default Heading3;
