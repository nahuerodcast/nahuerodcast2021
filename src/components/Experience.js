import React from "react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import {
  Center,
  Container,
  Flex,
  Heading,
  Link,
  Text,
} from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { DiSass, DiGit } from "react-icons/di";

export const Experience = () => {
  const color = useColorModeValue("gray", "white");
  return (
    <>
      <Center>
        <Container
          maxW="container.xl"
          border="1px"
          borderColor="gray.200"
          textAlign="left"
          borderRadius="10"
          w={["350px", "auto", "auto", "auto"]}
          padding="2"
          pl="10"
          pr="10"
          marginTop="20"
        >
          <Flex
            flexDirection={["column", "column", "row", "row"]}
            justifyContent="center"
            alignItems="center"
          >
            <Flex
              //  w={["350px", "350px", "350px", "350px"]}
              alignItems="center"
              justifyContent="center"
              mt="4"
              mb="4"
            >
              <Heading ml="auto">
                También soy Tutor
                <Text fontWeight="extrabold" mr="2"></Text>
                de Desarrollo Web en
                <Link
                  fontWeight="extrabold"
                  m="2"
                  href="https://www.coderhouse.com/"
                  target="_blank"
                  style={{ transition: "300ms ease all" }}
                  _hover={{ textShadow: "4px 4px 9px rgba(0,0,0,0.13)" }}
                >
                  Coderhouse
                </Link>
                <Flex mt="2">
                  <AiFillHtml5 color="#e54d26" />
                  <FaCss3Alt color="#0096d1" />
                  <DiSass color="#d56ea3" />
                  <DiGit color="#e94e31" />
                  <AiFillGithub />
                </Flex>
              </Heading>
            </Flex>
            <Link
              href="https://www.coderhouse.com/"
              target="_blank"
              _hover="none"
            >
              <Image
                src="../tutoria.jpeg"
                height="auto"
                width={["350px", "450px", "450px", "450px"]}
                style={{ transition: "300ms ease all" }}
                _hover={{ transform: "scale(1.02)" }}
                ml={["0", "0", "10", "10"]}
              />
            </Link>
          </Flex>
          <Heading as="h4" fontSize="16" fontWeight="regular" mt="2">
            <Center>
              <Link
                href="https://drive.google.com/file/d/1YuNyB65m3Sbxy9DMoWHJMYXREcVL0pcr/view"
                target="_blank"
                style={{ transition: "300ms ease all" }}
                _hover={{ textShadow: "4px 4px 9px rgba(0,0,0,0.13)" }}
                color={color}
              >
                Podes ver el programa acá
              </Link>
            </Center>
          </Heading>
        </Container>
      </Center>
    </>
  );
};
