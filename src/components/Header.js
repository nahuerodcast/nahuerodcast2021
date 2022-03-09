import React from "react";
import { Box, Flex, Button, Stack, Menu, Link } from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { AiFillGithub } from "react-icons/ai";
import { WiMoonAltFirstQuarter } from "react-icons/wi";
import { Link as ReactLink } from "react-router-dom";
import Logo from "./Logo";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const color = useColorModeValue("darkgray", "white");
  //color={["white", "white", "black", "black"]}
  return (
    <NavBarContainer {...props} color={color}>
      <Logo w="250px" color={useColorModeValue("black", "white")} />
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

const MenuLinks = ({ isOpen }) => {
  const color = useColorModeValue("white", "black");
  const colorText = useColorModeValue("black", "teal.300");
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
          <Link
            to="/"
            style={{ transition: "300ms ease all" }}
            _hover={{ color: "black" }}
            as={ReactLink}
          >
            Home
          </Link>
          <Link
            to="/about"
            style={{ transition: "300ms ease all" }}
            _hover={{ color: "black" }}
            as={ReactLink}
          >
            Acerca de mi
          </Link>

          <Link
            to="/projects"
            style={{ transition: "300ms ease all" }}
            _hover={{ color: "black" }}
            as={ReactLink}
          >
            Proyectos
          </Link>
          <Link
            to="/contact"
            style={{ transition: "300ms ease all" }}
            _hover={{ color: "black" }}
            as={ReactLink}
            isLast
          >
            <Button
              size="sm"
              rounded="md"
              color={color}
              bg={colorText}
              _hover={{
                bg: "teal.400",
              }}
            >
              ¡Contactame!
            </Button>
          </Link>
          <Button
            onClick={toggleColorMode}
            style={{ borderRadius: "30px", padding: 0 }}
            variant="ghost"
          >
            <WiMoonAltFirstQuarter size="20" />
          </Button>
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
      py={6}
      px={"15vw"}
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
