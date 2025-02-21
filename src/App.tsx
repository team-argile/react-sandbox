import { useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { BanFormat } from "./types/address";
import AddressInput from "./features/AdressInput";

function App() {
  const [address, setAddress] = useState<BanFormat | null>(null);

  const displayText = address
    ? `Adresse sélectionnée: ${address.adresseBrut}`
    : "Aucune adresse renseignée";

  return (
    <Box p="2rem" direction="column" w="100vw" h="100vh" bg="gray.100">
      <Heading textAlign="center" m={20} fontSize="4xl" color="blue.500">
        BétonArmé.ai
      </Heading>
      <AddressInput
        onValueChanged={setAddress}
        value={address}
        onClear={() => setAddress(null)}
      />
      <Text textAlign="center">{displayText}</Text>
    </Box>
  );
}

export default App;
