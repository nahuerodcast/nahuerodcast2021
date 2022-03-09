import React from "react";
import { Image } from "@chakra-ui/image";
import { Center, Flex, Heading, Link, Text } from "@chakra-ui/layout";
import Fade from "react-reveal/Fade";
import { useColorModeValue } from "@chakra-ui/color-mode";

export const Education = () => {
  const color = useColorModeValue("gray", "white");
  return (
    <>
      <Center mb="15">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading>
            <Flex
              flexDirection={["column", "column", "column", "column"]}
              justifyContent="center"
              alignItems="center"
            >
              <Flex
                flexDirection={["column", "column", "row", "row"]}
                textAlign="center"
              >
                Estudié desarrollo Front-end en
                <Link
                  href="https://www.coderhouse.com/"
                  target="_blank"
                  style={{ transition: "300ms ease all" }}
                  _hover={{ textShadow: "4px 4px 9px rgba(0,0,0,0.13)" }}
                >
                  <Text ml="2" fontWeight="extrabold" mr="2">
                    Coderhouse
                  </Text>
                </Link>
              </Flex>
            </Flex>
          </Heading>
          <Heading
            fontSize="md"
            fontWeight="300"
            color={color}
            mr="4"
            ml="4"
            textAlign="center"
          >
            Tengo certificados en Desarrollo Web, Javascript, y React.JS
          </Heading>
        </Flex>
      </Center>
      <Flex
        flexDirection={["column", "column", "row", "row"]}
        justifyContent="center"
        alignItems="center"
        px={"10vw"}
        flexWrap="wrap"
      >
        <Fade delay={250}>
          <Image
            borderRadius={4}
            src="../desarrollo.png"
            height="250px"
            w="auto"
            alt="desarrollo web"
            mr="1"
            style={{ transition: "300ms ease all" }}
            _hover={{ transform: "scale(1.05)" }}
          />
        </Fade>
        <Fade delay={500}>
          <Image
            borderRadius={4}
            src="../javascript.png"
            height="250px"
            w="auto"
            alt="javascript"
            mx="1"
            style={{ transition: "300ms ease all" }}
            _hover={{ transform: "scale(1.05)" }}
          />
        </Fade>
        <Fade delay={750}>
          <Image
            borderRadius={4}
            src="../react.png"
            height="250px"
            w="auto"
            alt="react"
            ml="1"
            style={{ transition: "300ms ease all" }}
            _hover={{ transform: "scale(1.05)" }}
          />
        </Fade>
      </Flex>
    </>
  );
};
