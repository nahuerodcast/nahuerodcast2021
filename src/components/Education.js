import { Image } from "@chakra-ui/image";
import { Center, Flex, Heading, Text } from "@chakra-ui/layout";
import React from "react";

export const Education = () => {
  return (
    <>
      <Center >
        <Heading>
          <Flex justifyContent="center">
            Estudié en
            <Text ml="2" fontWeight="extrabold" mr="2">
              Coderhouse
            </Text>
            desarrollo Front-end
          </Flex>
        </Heading>
      </Center>
      <Flex justifyContent="center">
        <Image
          src="../desarrollo.png"
          height="250px"
          w="auto"
          alt="desarrollo web"
          m="2"
        />
        <Image
          src="../javascript.png"
          height="250px"
          w="auto"
          alt="javascript"
          m="2"
        />
        <Image src="../react.png" height="250px" w="auto" alt="react" m="2" />
      </Flex>
    </>
  );
};
