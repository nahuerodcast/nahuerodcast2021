import React from "react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Flex, Heading, Kbd, Link, Text } from "@chakra-ui/layout";
import { GrReactjs } from "react-icons/gr";
import "animate.css";

export const MainContainer = () => {
  const color = useColorModeValue("blackAlpha.800", "white");
  const colorBold = useColorModeValue("black", "purple.300");
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      zIndex={1}
      className="animate__animated animate__fadeIn"
      mt={["0", "40px", "80px", "80px"]}
      mb="70px"
    >
      <Heading
        width={["350px", "450px", "650px", "850px"]}
        maxW="750"
        fontSize={["35", "45", "55", "65"]}
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
        Hola!👋 Mi nombre es
        <Link
          href="https://www.linkedin.com/in/nahuel-rodriguez-21260b186/"
          target="_blank"
          style={{ transition: "300ms ease all" }}
          _hover={{ textShadow: "4px 4px 9px rgba(0,0,0,0.13)" }}
        >
          <Text bg="cyan.100" color="black">
            Nahuel Rodriguez
          </Text>
        </Link>
        y este es mi <Text color={colorBold}>Portfolio</Text>
        <Text
          fontSize="sm"
          mt="4"
          fontWeight="normal"
          color={useColorModeValue("blackAlpha.600", "white")}
        >
          <Flex
            justifyContent="center"
            fontStyle="italic"
            alignItems="center"
            className="animate__animated animate__bounce"
          >
            hecho en
            <Kbd ml="1">
              <Link
                href="https://reactjs.org/"
                target="_blank"
                _hover={{ color: "cyan.500" }}
              >
                React.JS
              </Link>
            </Kbd>
             <GrReactjs />
          </Flex>
        </Text>
      </Heading>
    </Flex>
  );
};
