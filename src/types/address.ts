export type Feature = {
  type: string;
  geometry: {
    type: string;
    coordinates: [number, number];
  };
  properties: {
    banId: string;
    label: string;
    score: number;
    housenumber?: string;
    id: string;
    name: string;
    postcode: string;
    citycode: string;
    x: number;
    y: number;
    city: string;
    context: string;
    type: string;
    importance?: number;
    street?: string;
  };
};

export type AddressResponse = {
  type: string;
  version: string;
  features: Feature[];
  attribution: string;
  licence: string;
  query: string;
  limit: number;
};

export type BanType = "housenumber" | "street" | "municipality" | "locality";

export type BanFormat = {
  adresseBrut: string;
  codePostalBrut: string;
  nomCommuneBrut: string | null;
  labelBrut: string;
  labelBrutAvecComplement: string;
  enumStatutGeocodageBanId?: number | null;
  banDateAppel?: number[] | null;
  banId?: string | null;
  banLabel?: string | null;
  banHousenumber?: string | null;
  banStreet?: string | null;
  banCitycode?: string | null;
  banPostcode?: string | null;
  banCity?: string | null;
  banType?: BanType;
  banScore?: number | null;
  banX?: number | null;
  banY?: number | null;
  complNomResidence?: string | null;
  complRefBatiment?: string | null;
  complEtageAppartement?: number | null;
  complRefCageEscalier?: string | null;
  complRefLogement?: string | null;
};
