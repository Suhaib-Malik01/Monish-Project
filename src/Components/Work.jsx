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
      <Heading fontSize={['2xl','3xl']}>MY LEGAL SERVICES INCLUDE</Heading>

      <UnorderedList textAlign={'left'} w={'full'}>
        {services.map((service, index) => (
          <ListItem key={index}>{service}</ListItem>
        ))}
      </UnorderedList>
    </VStack>
  );
};

export default Work;
