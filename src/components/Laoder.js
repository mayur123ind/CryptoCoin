import React from "react";
import { Spinner, Box, VStack } from "@chakra-ui/react";

const Laoder = () => {
  return (
    <VStack h="100vh" justifyContent={"center"}>
      <Box transform={"scale(3)"}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          color="blue.500"
          size={'xl'}
        />
      </Box>
    </VStack>
  );
};

export default Laoder;
