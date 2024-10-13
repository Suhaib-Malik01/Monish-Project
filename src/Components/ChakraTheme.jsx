import { extendTheme } from "@chakra-ui/react";


const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },

  fonts: {
    heading: `'Merriweather', serif`, // for headings
    body: `'Merriweather', serif`, // for body text
  },
});

export default theme;
