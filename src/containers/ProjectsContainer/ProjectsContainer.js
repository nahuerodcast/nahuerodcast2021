import { Center, Flex, Heading, Text } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { Projects } from "../../components/Projects";

export const ProjectsContainer = () => {
  const [projects, setProjects] = useState([]);

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
            <Flex>
              Y estoy son mis
              <Text color="yellow.300" ml="2">
                {Proyectos}
              </Text>
            </Flex>
          </Heading>

          <Heading fontSize="md" fontWeight="300" color="blackAlpha.500">
            ¡Espero que les guste!
          </Heading>
        </Flex>
      </Center>
      <Projects projects={projects} />
    </>
  );
};
