import React, { useEffect, useState } from "react";
import { Center, Flex, Heading, Text } from "@chakra-ui/layout";
import { Projects } from "../../components/Projects";
import Fade from "react-reveal/Fade";
import { useColorModeValue } from "@chakra-ui/color-mode";

export const ProjectsContainer = () => {
  const [projects, setProjects] = useState([]);
  const color = useColorModeValue("gray", "white");

  useEffect(() => {
    fetch("../projects.json")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

  let Proyectos = "<Proyectos />";

  return (
    <>
      <Center mt="50" mb="4">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading>
            <Flex
              flexDirection={["column", "column", "row", "row"]}
              alignItems="center"
              justifyContent="center"
            >
              Estos son mis
              <Text color="yellow.300" ml="2">
                {Proyectos}
              </Text>
            </Flex>
          </Heading>

          <Heading fontSize="md" fontWeight="300" color={color}>
            ¡Espero que les gusten!
          </Heading>
        </Flex>
      </Center>
      <Fade bottom>
        <Projects projects={projects} />
      </Fade>
    </>
  );
};
