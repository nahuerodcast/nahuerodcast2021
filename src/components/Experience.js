import React from "react";

import {
  Center,
  Container,
  Flex,
  Heading,
  Link,
  Text,
} from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

export const Experience = () => {
  return (
    <>
      <Center>
        <Container
          maxW="container.xl"
          border="1px"
          borderColor="gray.200"
          textAlign="left"
          borderRadius="10"
          w="auto"
          padding="2"
          marginTop="20"
        >
          <Flex flexDirection="row" justifyContent="center">
            <Flex width="450px" alignItems="center" justifyContent="Center">
              <Heading>
                También soy Tutor
                <Text fontWeight="extrabold" mr="2"></Text>
                de Desarrollo Web en
                <Text fontWeight="extrabold" mr="2">
                  Coderhouse
                </Text>
              </Heading>
            </Flex>

            <Image
              src="https://media-exp1.licdn.com/dms/image/C4D2DAQEJvQaYBFFYGQ/profile-treasury-image-shrink_800_800/0/1626399786357?e=1632456000&v=beta&t=Y2snL1i3rwjZBrqfYsYwupBrjSO2SvmSAOrk4dzcVm8"
              height="auto"
              width="450px"
              mr="10"
            />
          </Flex>
          <Heading as="h4" fontSize="16" fontWeight="regular" mt="2">
            <Center>
              <Link
                href="https://drive.google.com/file/d/1YuNyB65m3Sbxy9DMoWHJMYXREcVL0pcr/view"
                target="_blank"
              >
                Podes chequear el programa acá
              </Link>
            </Center>
          </Heading>
        </Container>
      </Center>
    </>
  );
};
