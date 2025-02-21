import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {
  Box,
  Button,
  Text,
  Heading,
  Link,
  Image,
  VStack,
  Flex,
} from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Flex
      align="center"
      justify="center"
      p="2rem"
      textAlign="center"
      direction="column"
      w="100vw"
      h="100vh"
    >
      <Box>
        <Link href="https://vite.dev">
          <Image
            src={viteLogo}
            alt="Vite logo"
            h="6em"
            p="1.5em"
            transition="filter 300ms"
            _hover={{ filter: "drop-shadow(0 0 2em #646cffaa)" }}
          />
        </Link>
        <Link href="https://react.dev">
          <Image
            src={reactLogo}
            alt="React logo"
            h="6em"
            p="1.5em"
            transition="filter 300ms"
            _hover={{ filter: "drop-shadow(0 0 2em #61dafbaa)" }}
            animation="logo-spin infinite 20s linear"
          />
        </Link>
      </Box>
      <Heading as="h1">Vite + React</Heading>
      <VStack p="2em">
        <Button
          onClick={() => setCount((count) => count + 1)}
          variant="outline"
        >
          count is {count}
        </Button>
        <Text>
          Edit <code>src/App.tsx</code> and save to test HMR
        </Text>
      </VStack>
      <Text color="#888">Click on the Vite and React logos to learn more</Text>
    </Flex>
  );
}

export default App;
