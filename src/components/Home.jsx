import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import btc from "./btc.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgColor={"RGBA(0, 0, 0, 0.92)"} w={"full"} h={"85vh"}>
      <motion.div
        style={{
          height: "70vh",
        }}
        animate={{
          translateY: "20px",
          
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src={btc}
         
        />
      </motion.div>
      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"lightgreen"}
        mt={"-5"}
      >
        CryptoCoin
      </Text>
    </Box>
  );
};

export default Home;
