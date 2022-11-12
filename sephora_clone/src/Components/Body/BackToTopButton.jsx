import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { ChevronUpIcon } from '@chakra-ui/icons'

const BackToTopButton = () => {

    const backToTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: "smooth"})
    };

  return (
    <Box textAlign={"center"} pt={"4rem"}>
      <Button onClick={backToTop} leftIcon={<ChevronUpIcon fontSize={"2rem"} />} _hover={{bg: "#68D391"}} p={"1.9rem 1.6rem"} borderRadius={"none"} bg={"#ABC72C"} variant="solid">
        BACK TO TOP
      </Button>
    </Box>
  );
};

export default BackToTopButton;
