import { Box, Flex, Heading, Img, Text, VStack } from "@chakra-ui/react";
import React from "react";
import lawFirmImage from '../Docs/law_firm_image.jpeg';
import monish from '../Docs/MonishPhoto.jpeg'

const About = () => {
  return (
    <Box textAlign={"center"} id="home about">
      <Flex
        gap={"8"}
        flexDirection={["column", "column", 'column', 'column','row']}
        alignItems={["center", "center"]}
      >
        <Img
          borderRadius={"2xl"}
          // w={["50%", "25%", "15%"]}
          boxSize={['300','500']}
          src={monish}
        />

        <VStack h={'500'} alignItems={'left'} spacing={8} justifyContent={'end'} textAlign={["center", "center", 'center', 'center','left']}>
          <Box>
            <Heading fontSize={['4xl','7xl']} fontWeight={"500"} >
              Advocate
            </Heading>
            <Heading  fontSize={['4xl','7xl']} fontWeight={"500"} color="gray">
              Monish
            </Heading>
            <Heading size={'md'} as='i' fontWeight={300} color={'gray'}>knowledge is the ultimate wepone.</Heading>
          </Box>
            <Text fontSize={"xl"} color={'gray'}>
              I believe in the right to counsel for all. I am committed to excellence and have successfully represented my clients.
              Whatever your legal needs or questions may be, come to me for comprehensive advice and effective representation.
              Protecting your rights is my top priority.
            </Text>
          <VStack spacing='2' alignItems={'left'} fontWeight={'Bold'} color={'gray'}>
            <Text>From 10:00 AM To 4:00 PM</Text>
            <Text>I will be in moradabad district court</Text>
          </VStack>
        </VStack>
        
      </Flex>
    </Box>
  );
};

export default About;
