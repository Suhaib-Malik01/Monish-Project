import { Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import logo from '../Docs/Adv_logo.jpg';

export default function Header() {
  return (
    <HStack spacing={4} alignContent={['center','space-between']} justifyContent={['space-between']} flexDirection={['column','row']}>
        <HStack flexDirection={['column','row']}>
            <Image src={logo} boxSize='80px' alt='Logo' />

            <VStack spacing={1} alignItems={['center','start']}>
                <Heading size={['xs','sm']}>
                   Monish Malik
                </Heading>
                <Text>Law & Consulting firm</Text>
            </VStack>
        </HStack>
        <VStack spacing={1} alignItems={['center','start']}>
            <Heading size={['xs', 'sm']}>
                <a href="mailto:malikmonish9012@gmail.com">Email: malikmonish9012@gmail.com</a>
            </Heading>
            <Heading size={['xs', 'sm']}>
                <a href="tel:+918883559911">Phone: +91 9456609646</a>
            </Heading>

        </VStack>
    </HStack>
  )
}
