import React from "react";
import { Box, Heading, Avatar, Flex, Link } from "@chakra-ui/react";

export default function Logo(props) {
  return (
    <Box {...props} ml="10">
      <Flex alignItems="center">
        <Avatar
          name="Nahuel Rodriguez"
          size="sm"
          src="https://media-exp1.licdn.com/dms/image/C4D03AQFvgK8GwuEfIQ/profile-displayphoto-shrink_400_400/0/1566176447267?e=1637193600&v=beta&t=GW_GJcGwNqN6x94U9qfy4QDTM_rHhwSJS1LQAzrPglo"
        />
        <Link to="/home">
          <Heading fontSize="lg" fontWeight="bold" ml="4">
            Nahuel Rodriguez
          </Heading>
        </Link>
      </Flex>
    </Box>
  );
}
