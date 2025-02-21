import { useQuery } from "@tanstack/react-query";
import { searchAddressSuggestions } from "@/services/api";

export const useFetchAddressSuggestions = (addressInput: string) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["fetchAddressSuggestions", addressInput],
    queryFn: () => searchAddressSuggestions(addressInput, 5),
    enabled: !!addressInput && addressInput.length > 30,
    staleTime: 5 * 60 * 1000,
  });

  return { data, isLoading, isError };
};
