import { Box, Heading, Text } from "@chakra-ui/react";
import AddressInput from "./features/AdressInput";

function App() {
  return (
    <Box p="2rem" direction="column" w="100vw" h="100vh" bg="gray.100">
      <Heading textAlign="center" m={20} fontSize="4xl" color="blue.500">
        BétonArmé.ai
      </Heading>
      <AddressInput onValueChanged={() => {}} value={null} onClear={() => {}} />
      <Text textAlign="center">Aucune adresse renseignée</Text>
    </Box>
  );
}

export default App;
