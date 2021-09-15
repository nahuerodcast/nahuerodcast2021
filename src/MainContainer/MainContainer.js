import { Flex, Heading, Text } from "@chakra-ui/layout";
import React from "react";

export const MainContainer = () => {
  return (
    <Flex justifyContent="center" height="100vh" alignItems="center" zIndex={1}>
      <Heading
        maxW="750"
        fontSize="65"
        border="1px"
        borderColor="gray.200"
        textAlign="center"
        borderRadius="10"
        fontWeight="extrabold"
        padding="4"
        color="blackAlpha.800"
        letterSpacing="2"
      >
        Hola! Mi nombre es{" "}
        <Text bg="cyan.100" color="black">
          Nahuel Rodriguez
        </Text>
        y este es mi <Text color="black">Portfolio</Text>
      </Heading>
    </Flex>
  );
};
