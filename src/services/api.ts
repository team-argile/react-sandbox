import { AddressResponse, Feature } from "@/types/address";

export const searchAddressSuggestions = async (
  query: string,
  maxResults: number
): Promise<Feature[]> => {
  if (!query || query.length < 4) {
    return [];
  }

  const response = await fetch(
    `https://api-adresse.data.gouv.fr/search/?q=${query}&limit=${maxResults}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data: AddressResponse = await response.json();
  return data.features;
};
