import { useColorModeValue } from "@chakra-ui/color-mode";
import { Flex, Heading, Link, Text } from "@chakra-ui/layout";
import { GrReactjs } from "react-icons/gr";
import React from "react";

export const MainContainer = () => {
  const color = useColorModeValue("blackAlpha.800", "white");
  const colorBold = useColorModeValue("black", "purple.500");
  return (
    <Flex justifyContent="center" height="70vh" alignItems="center" zIndex={1}>
      <Heading
        maxW="750"
        fontSize="65"
        border="1px"
        borderColor="gray.200"
        textAlign="center"
        borderRadius="10"
        fontWeight="extrabold"
        padding="6"
        paddingBottom="4"
        letterSpacing="2"
        color={color}
      >
        Hola! Mi nombre es{" "}
        <Text bg="cyan.100" color="black">
          Nahuel Rodriguez
        </Text>
        y este es mi <Text color={colorBold}>Portfolio</Text>{" "}
        <Text fontSize="sm" mt="4" fontWeight="normal" color={color}>
          <Flex justifyContent="center" fontStyle="italic" alignItems="center">
            hecho en  
            <Link href="https://reactjs.org/" target="_blank">
              React.JS
            </Link>
             <GrReactjs />
          </Flex>
        </Text>
      </Heading>
    </Flex>
  );
};
