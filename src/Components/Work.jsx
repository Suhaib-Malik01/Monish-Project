import {Heading, ListItem, UnorderedList, VStack } from "@chakra-ui/react";
import React from "react";


const Work = () => {

  const services = ['Criminal Matters','Civil matters','Taxation matters (GST,ITR,TDS,TCS, Income Tax)'];


  return (
    <VStack
      h={"30vh"}
      gap={["0","0","3","5"]}
      alignItems={["center", "center", "center"]}
      justifyContent={'center'}
    >
      <Heading fontSize={['xl','2xl']}>MY LEGAL SERVICES INCLUDE</Heading>

      <UnorderedList textAlign={'left'} w={'full'} width={['90%','100%']} pt={'5'}>
        {services.map((service, index) => (
          <ListItem key={index}>{service}</ListItem>
        ))}
      </UnorderedList>
    </VStack>
  );
};

export default Work;
