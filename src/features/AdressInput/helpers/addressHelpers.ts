import { BanFormat, BanType, Feature } from "@/types/address";

export function convertSuggestionToAddress(suggestion: Feature): BanFormat {
  const today = new Date();
  const banDateAppel = [
    today.getFullYear(),
    today.getMonth() + 1,
    today.getDate(),
  ];
  return {
    adresseBrut: suggestion.properties.label,
    codePostalBrut: suggestion.properties.postcode,
    nomCommuneBrut: suggestion.properties.city,
    labelBrut: suggestion.properties.label,
    labelBrutAvecComplement: suggestion.properties.label,
    banDateAppel: banDateAppel,
    banLabel: suggestion.properties.label,
    banId: suggestion.properties.id,
    banHousenumber: suggestion.properties.housenumber,
    banStreet: suggestion.properties.name,
    banCitycode: suggestion.properties.citycode,
    banPostcode: suggestion.properties.postcode,
    banX: suggestion.geometry.coordinates[0],
    banY: suggestion.geometry.coordinates[1],
    banType: suggestion.properties.type as BanType,
  };
}

export function suggestionToOption(suggestion: Feature) {
  return {
    label: suggestion.properties.label,
    value: suggestion.properties.id,
  };
}

export function addressToOption(address: BanFormat) {
  return {
    label: address.adresseBrut,
    value: address.banId ?? "",
  };
}
