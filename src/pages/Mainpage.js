import React from "react";
import { Box, Heading, Text, Link } from "@chakra-ui/react";
import Navbar from "../components/others/navbar";

const Mainpage = () => {
  return (
    <>
      <Navbar />
      <Box
        minH="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        flexDirection="column"
        bgGradient="linear(to-b, teal.200, teal.900)"
        mx={{ base: "0", md: "auto" }}
        p={8}
        borderRadius="md"
        boxShadow="md"
        color="white"
      >
        <Heading
          as="h1"
          fontSize={{ base: "4xl", md: "5xl" }}
          mb={4}
        >
          Welcome to the Language Learning Quiz App!
        </Heading>
        <Text fontSize={{ base: "xl", md: "2xl" }} mb={8}>
          Enhance your language skills through engaging quizzes.
        </Text>
        <Link
          href="https://team-363-frantend.vercel.app/courses.html"
          
          fontSize={{ base: "xl", md: "2xl" }}
          bg="white"
          color="teal.500"
          px={4}
          py={2}
          borderRadius="md"
          _hover={{ textDecoration: "none", bg: "blackAlpha.800" }}
        >
          Let's Learn a New Language
        </Link>
       
      </Box>
    </>
  );
};

export default Mainpage;
