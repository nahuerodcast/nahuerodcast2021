import React from "react";
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
import { IoMdCheckmarkCircle } from "react-icons/io";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { DiSass, DiReact } from "react-icons/di";
import { SiJavascript } from "react-icons/si";

export const AboutMe = () => {
  return (
    <Flex
      mb={["35px", "170px", "0", "100px"]}
      mt={["35px", "170px", "0", "100px"]}
      display="flex"
      flexDirection={["column", "column", "column", "row"]}
      justifyContent={["center", "center", "center", "center"]}
      alignItems={["center", "center", "center", "center"]}
      // border="1px red solid"
    >
      <Avatar
        size="2xl"
        name="Nahuel Rodriguez"
        src="https://media-exp1.licdn.com/dms/image/C4D03AQFvgK8GwuEfIQ/profile-displayphoto-shrink_400_400/0/1566176447267?e=1637193600&v=beta&t=GW_GJcGwNqN6x94U9qfy4QDTM_rHhwSJS1LQAzrPglo"
      />
      <Divider orientation="vertical" mr="10" />
      <Flex flexDir="column" justifyContent="center" alignItems="center">
        <Heading fontSize={["25", "30", "35", "40"]}>
          <Flex
            flexDirection={["column", "column", "row", "row"]}
            justifyContent="center"
            alignItems="center"
          >
            <Text>Soy</Text>
            <Text fontWeight="extrabold" ml="2">
              front-end developer
            </Text>
          </Flex>
        </Heading>
        <Center>
          <List spacing={3}>
            <ListItem textAlign="center">
              <ListIcon
                as={IoMdCheckmarkCircle}
                color="green.500"
                textAlign="center"
              />
              Uso HTML5 CSS3, SASS, Javascript ES6, React/React Native
            </ListItem>
            <Flex mt="2" justifyContent="center">
              <AiFillHtml5 color="#e54d26" size="40" />
              <FaCss3Alt color="#0096d1" size="40" />
              <DiSass color="#d56ea3" size="40" />
              <SiJavascript color="#f7df1d" size="40" />
              <DiReact color="#05dcfa" size="40" />
            </Flex>
          </List>
        </Center>
      </Flex>
    </Flex>
  );
};
