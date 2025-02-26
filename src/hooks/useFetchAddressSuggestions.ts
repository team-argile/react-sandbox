import { useQuery } from "@tanstack/react-query";
import { searchAddressSuggestions } from "@/services/api";

const MIN_ADDRESS_LENGTH = 30;

export const useFetchAddressSuggestions = (addressInput: string) => {
  if (addressInput.length < MIN_ADDRESS_LENGTH) {
    console.warn("Adress input should be at least 3 characters long");
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ["fetchAddressSuggestions", addressInput],
    queryFn: () => searchAddressSuggestions(addressInput, 5),
    enabled: !!addressInput && addressInput.length > MIN_ADDRESS_LENGTH,
    staleTime: 5 * 60 * 1000,
  });

  return { data, isLoading, isError };
};
