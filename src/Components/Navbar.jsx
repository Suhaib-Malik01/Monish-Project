import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = [
  "Home",
  "About",
  "Cases",
  "Contact",
];

export default function WithAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box>
        <Flex
          pt={'5'}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            bg={"none"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Heading size={'lg'}>M.M Law Consulting Firm</Heading>

          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <Button key={link} variant={'link'} fontWeight={"500"} colorScheme="black">
                {link}
              </Button>
            ))}
          </HStack>

          
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <Text fontWeight={"500"} px={"2"} key={link}>
                  {link}
                </Text>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
