import { Avatar } from "@chakra-ui/avatar";
import {
  Center,
  Divider,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/layout";
import React from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";

export const AboutMe = () => {
  return (
    <Center height="50px" m="20" mb="100">
      <Avatar
        size="2xl"
        mr="10"
        name="Segun Adebayo"
        src="https://media-exp1.licdn.com/dms/image/C4D03AQFvgK8GwuEfIQ/profile-displayphoto-shrink_400_400/0/1566176447267?e=1637193600&v=beta&t=GW_GJcGwNqN6x94U9qfy4QDTM_rHhwSJS1LQAzrPglo"
      />
      <Divider orientation="vertical" mr="10" />
      <Flex flexDir="column">
        <Heading fontSize="40">
          <Flex justifyContent="center" alignItems="center">
            Soy
            <Text ml="2" fontWeight="extrabold">
              front-end developer
            </Text>
          </Flex>
        </Heading>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={IoMdCheckmarkCircle} color="green.500" />
            Uso HTML5 CSS3, SASS, Javascript, React/React Native
          </ListItem>
        </List>
      </Flex>
    </Center>
  );
};
