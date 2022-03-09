import React from "react";
import { Image } from "@chakra-ui/image";
import { Badge, Box, Flex, Link } from "@chakra-ui/layout";

export const Projects = ({ projects }) => {
  return (
    <Flex
      w={"100%"}
      flexDirection={["column", "column", "row", "row"]}
      flexWrap={"wrap"}
      justifyContent="center"
      px={"10vw"}
    >
      {projects.map((project) => {
        return (
          <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            m="2"
            mx="4"
            style={{ transition: "300ms ease all" }}
            _hover={{ transform: "scale(1.05)" }}
          >
            <Link href={project.url} target="_blank">
              <Image
                src={project.imageUrl}
                alt={project.imageAlt}
                w="500px"
                objectFit="cover"
              />
            </Link>
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Badge
                  borderRadius="full"
                  px="2"
                  colorScheme={project.colorScheme}
                >
                  {project.language}
                </Badge>
              </Box>

              <Box
                mt="1"
                fontWeight="bold"
                as="h4"
                lineHeight="tight"
                fontSize="20px"
                isTruncated
              >
                {project.title}
              </Box>
              <Box
                mt="1"
                fontWeight="regular"
                fontSize="12px"
                as="h6"
                lineHeight="tight"
              >
                {project.desc}
              </Box>
            </Box>
          </Box>
        );
      })}
    </Flex>
  );
};
