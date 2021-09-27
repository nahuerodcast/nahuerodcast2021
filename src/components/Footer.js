import React from "react";
import { Container, Divider, Link, Text } from "@chakra-ui/layout";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Flex } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";

export const Footer = () => {
  const color = useColorModeValue("darkgray", "white");
  return (
    <Container mt="30">
      <Divider />
      <Flex h="auto" justifyContent="center" alignItems="center" m="2">
        <Container color={color} mb="4">
          <Flex justifyContent="center" mt="2" mb="2" alignItems="center">
            <Link
              _hover={{ color: "black" }}
              m="2"
              mb="0"
              href="https://www.linkedin.com/in/nahuel-rodriguez-21260b186/"
              target="_blank"
            >
              <FaLinkedin />
            </Link>
            <Link
              _hover={{ color: "black" }}
              m="2"
              mb="0"
              href="mailto:nahuerodcast@gmail.com"
            >
              <IoMdMail />
            </Link>
            <Link
              _hover={{ color: "black" }}
              m="2"
              mb="0"
              href="https://github.com/nahuerodcast"
              target="_blank"
            >
              <FaGithubSquare />
            </Link>
          </Flex>
          <Flex
            flexDirection={["column", "column", "row", "row"]}
            justifyContent="center"
            alignItems="center"
            mb="1"
          >
            Portfolio realizado en
            <Text ml="1" mr="1" color={color}>
              React.js
            </Text>
            por
            <Text ml="1" fontWeight="bold">
              Nahuel rodriguez
            </Text>
          </Flex>
          <Flex justifyContent="center">
            <Text
              bg="yellow.100"
              w="14"
              pl="1"
              color={useColorModeValue("darkgray", "black")}
            >
              ©2021
            </Text>
          </Flex>
        </Container>
      </Flex>
    </Container>
  );
};
