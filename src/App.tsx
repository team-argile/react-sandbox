import { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { BanFormat } from "./types/address";
import AddressInput from "./features/AdressInput";

function App() {
  const [address, setAddress] = useState<BanFormat | null>(null);

  const displayText = address
    ? `Adresse sélectionnée: ${address.adresseBrut}`
    : "Aucune adresse renseignée";

  return (
    <Box p="2rem" direction="column" w="100vw" h="100vh" bg="gray.100">
      <AddressInput onValueChanged={setAddress} value={address} />
      <Text>{displayText}</Text>
    </Box>
  );
}

export default App;
