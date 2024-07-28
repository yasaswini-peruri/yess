import React from "react";
import {
  Box,
  Flex,
  Spacer,
  Link,
  Text,
  Avatar,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const navbarStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,
  };
  const linkStyle = {
    textDecoration: "none",
  };
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex align="center" bg="#8e44ad" p={4} color="white" style={navbarStyle}>
      <IconButton
        icon={<HamburgerIcon />}
        aria-label="Open Menu"
        display={{ base: "block", md: "none" }}
        onClick={onOpen}
      />
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">
              {" "}
              <IconButton
                icon={<CloseIcon />} 
                size="sm"
                aria-label="Close"
                onClick={onClose}
                position="absolute"
                top={2}
                right={2}
              />{" "}
              Menu
            </DrawerHeader>
            <DrawerBody>
              <Link href="/testpage" style={linkStyle}>
                <Box display="flex" alignItems="center" mr={4} mb={4}>
                  <Text>Give Test</Text>
                </Box>
              </Link>
              
              
              <Link href="/performance" style={linkStyle}>
                <Box display="flex" alignItems="center" mr={4} mb={4}>
                  <Text>Performance</Text>
                </Box>
              </Link>
              <Link href="/uploadQuestion" style={linkStyle}>
                <Box display="flex" alignItems="center" mr={4} mb={4}>
                  <Text>Upload Question</Text>
                </Box>
              </Link>
              <Link href="/leaderboard" style={linkStyle}>
                <Box display="flex" alignItems="center" mr={4} mb={4}>
                  <Text>Leaderboard</Text>
                </Box>
              </Link>
              <Link href="/profile" style={linkStyle}>
                <Box display="flex" alignItems="center" mr={4} mb={4}>
                  <Avatar size="sm" name={user.name} />
                  <Text ml={2}>Profile</Text>
                </Box>
              </Link>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
      <Link href="/testpage" 
  fontSize={{ base: "sm", md: "lg" }}
  bg="#8e44ad"
  color="white"
  px={4}
  py={2}
  borderRadius="md"
  _hover={{
    textDecoration: "none",
    textColor:"#8e44ad",
    bg: "white",
    transform: "scale(1.1)", // Increase the size on hover
    transition: "transform 0.3s ease", // Add a smooth transition effect
  }} 
>
  Give Test 
  
      </Link>
      <Link href="/performance" 
  fontSize={{ base: "sm", md: "lg" }}
  bg="#8e44ad"
  color="white"
  px={4}
  py={2}
  borderRadius="md"
  _hover={{
    textDecoration: "none",
    textColor:"#8e44ad",
    bg: "white",
    transform: "scale(1.1)", // Increase the size on hover
    transition: "transform 0.3s ease", // Add a smooth transition effect
  }} 
>
  Performance
      </Link>
      <Link href="/leaderboard" 
  fontSize={{ base: "sm", md: "lg" }}
  bg="#8e44ad"
  color="white"
  px={4}
  py={2}
  borderRadius="md"
  _hover={{
    textDecoration: "none",
    textColor:"#8e44ad",
    bg: "white",
    transform: "scale(1.1)", // Increase the size on hover
    transition: "transform 0.3s ease", // Add a smooth transition effect
  }} 
>
  leaderboard
        
      </Link>
    
      <Link href="/uploadQuestion" 
  fontSize={{ base: "sm", md: "lg" }}
  bg="#8e44ad"
  color="white"
  px={4}
  py={2}
  borderRadius="md"
  _hover={{
    textDecoration: "none",
    textColor:"#8e44ad",
    bg: "white",
    transform: "scale(1.1)", // Increase the size on hover
    transition: "transform 0.3s ease", // Add a smooth transition effect
  }}
>
  uploadQuestion
  </Link>
  <Spacer />
  <Link
        href="https://team-363-frontend.vercel.app/main"
        
        fontSize={{ base: "sm", md: "lg" }}
        bg="white"
        color="#8e44ad"
        px={4}
        py={2}
        borderRadius="md"
        _hover={{
          textDecoration: "none",
          textColor:"white",
          bg: "#8e44ad",
          borderColor: "white", // White border on hover
          borderWidth: "2px", // Border width
          transform: "scale(1.1)",
          transition: "transform 0.3s ease",
        }}
      >
        HOME
      </Link>
      
      <Link
  href="/profile"
  fontSize={{ base: "sm", md: "lg" }}
  bg="#8e44ad"
  color="white"
  px={4}
  py={2}
  borderRadius="md"
  _hover={{
    textDecoration: "none",
    textColor:"#8e44ad",
    bg: "white",
    transform: "scale(1.1)", // Increase the size on hover
    transition: "transform 0.3s ease", // Add a smooth transition effect
  }}
  display="flex"  // Use display flex to arrange children in a row
  alignItems="center" // Align items vertically at the center
  ml={4}
>
  <Avatar size="sm" name={user.name} />
  <Text ml={2}>Profile</Text>
</Link>

    </Flex>
  );
};

export default Navbar;
