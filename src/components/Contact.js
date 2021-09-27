import React from "react";
import { Flex, Heading, Link } from "@chakra-ui/layout";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export const Contact = () => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      ml="2"
      mr="2"
    >
      <Heading textAlign="center">¡Pongámonos en contacto!👇</Heading>
      <Flex justifyContent="center" mt="2" mb="2">
        <Link
          m="2"
          mb="0"
          href="https://www.linkedin.com/in/nahuel-rodriguez-21260b186/"
          target="_blank"
          style={{ transition: "300ms ease all" }}
          _hover={{ color: "#0b66c3", transform: "scale(1.1)" }}
        >
          <FaLinkedin size="50" />
        </Link>
        <Link
          _hover={{ color: "#ea4235", transform: "scale(1.1)" }}
          m="2"
          mb="0"
          href="mailto:nahuerodcast@gmail.com"
        >
          <IoMdMail size="50" />
        </Link>
        <Link
          _hover={{ color: "#393939", transform: "scale(1.1)" }}
          m="2"
          mb="0"
          href="https://github.com/nahuerodcast"
          target="_blank"
        >
          <FaGithubSquare size="50" />
        </Link>
      </Flex>
    </Flex>
  );
};
