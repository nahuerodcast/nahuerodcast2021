import React from "react";
import { Link, Box, Flex, Text, Button, Stack, Menu } from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { AiFillGithub } from "react-icons/ai";
import { WiMoonAltFirstQuarter } from "react-icons/wi";

import Logo from "./Logo";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const color = useColorModeValue("black", "white");
  //color={["white", "white", "black", "black"]}
  return (
    <NavBarContainer {...props} color={color}>
      <Logo w="250px" olor={color} />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }) => {
  const color = useColorModeValue("white", "black");
  const colorText = useColorModeValue("black", "teal.100");
  const { toggleColorMode } = useColorMode();
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <Menu>
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/about">Acerca de mi</MenuItem>
          <MenuItem to="/projects">Proyectos </MenuItem>
          <MenuItem to="/contact" isLast>
            <Button
              size="sm"
              rounded="md"
              color={color}
              bg={colorText}
              _hover={{
                bg: [
                  "primary.100",
                  "primary.100",
                  "primary.600",
                  "primary.600",
                ],
              }}
            >
              ¡Contactame!
            </Button>
          </MenuItem>
          <Link onClick={toggleColorMode}>
            <WiMoonAltFirstQuarter size="20" />
          </Link>
          <Link href="https://github.com/nahuerodcast" target="_blank">
            <AiFillGithub size="20" />
          </Link>
        </Menu>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={6}
      bg={["black", "black", "transparent", "transparent"]}
      color={["white", "white", "black", "black"]}
      boxShadow="lg"
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;
