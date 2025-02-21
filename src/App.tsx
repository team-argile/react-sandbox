import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import { BanFormat } from "./types/address";
import AddressInput from "./features/AdressInput";

function App() {
  const [address, setAddress] = useState<BanFormat | null>(null);

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
      <AddressInput onValueChanged={setAddress} value={address} />
    </Flex>
  );
}

export default App;
