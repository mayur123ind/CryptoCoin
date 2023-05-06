import React from "react";
import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import avat from "./passport.jpg";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, similique deserunt tempora rerum consectetur enim. Dicta rem commodi veritatis iusto eum numquam modi dolore laudantium perspiciatis, veniam, unde ipsum qui?
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avat} />
          <Text>Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
