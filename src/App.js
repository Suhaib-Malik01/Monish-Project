import './App.css';
import { Box } from '@chakra-ui/react';
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from './Components/About';
import Work from './Components/Work';
import Cases from './Components/Cases';

function App() {
  return (
    <Box width={["100%", "90%","80%", "75%"]} m={"auto"} px={"2"} display={"flex"} flexDirection={"column"} gap={"14"}>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Cases />
      <Header />
    </Box>
  );
}

export default App;
