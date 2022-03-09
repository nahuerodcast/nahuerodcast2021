import React from "react";
import { Box, Heading, Avatar, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Logo(props) {
  return (
    <Box {...props}>
      <Flex alignItems="center">
        <Avatar name="Nahuel Rodriguez" size="sm" src="../../profile-pic.jpg" />
        <Link
          to="/"
          style={{ transition: "300ms ease all" }}
          _hover={{ textShadow: "4px 4px 9px rgba(0,0,0,0.13)" }}
        >
          <Heading fontSize="lg" fontWeight="bold" ml="4">
            Nahuel Rodriguez
          </Heading>
        </Link>
      </Flex>
    </Box>
  );
}
