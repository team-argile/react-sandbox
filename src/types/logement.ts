import { BanFormat } from "./address";

export type TypeAccomodation = "house" | "flat" | "building";

type CaracteristiqueGenerale = {
  adresse?: BanFormat;
  multiPolygon: object;
  origin: "dpe" | "unknown" | "audit" | "simulation";
  anneeConstruction: number | null;
  enumPeriodeConstructionId: number;
  enumMethodeApplicationDpeLogId: number;
  enumCalculEchantillonnageId: number | null;
  surfaceHabitableLogement: number;
  nombreNiveauImmeuble: number | null;
  nombreNiveauLogement: number | null;
  hsp: number;
  surfaceHabitableImmeuble: number | null;
  surfaceTertiaireImmeuble: number | null;
  nombreAppartement: number | null;
  appartementNonVisite: boolean | null;
  energyBill: number | null;
  enumScenarioId: number;
  enumEtapeId: number;
  nomScenario: string | null;
  ownership: string | null;
  typeAccomodation: TypeAccomodation;
};

type EpConsoType = {
  epConsoCh: number;
  epConsoChDepensier: number;
  epConsoEcs: number;
  epConsoEcsDepensier: number;
  epConsoEclairage: number;
  epConsoAuxiliaireGenerationCh: number;
  epConsoAuxiliaireGenerationChDepensier: number;
  epConsoAuxiliaireDistributionCh: number;
  epConsoAuxiliaireGenerationEcs: number;
  epConsoAuxiliaireGenerationEcsDepensier: number;
  epConsoAuxiliaireDistributionEcs: number;
  epConsoAuxiliaireDistributionFr: number | null;
  epConsoAuxiliaireVentilation: number;
  epConsoTotaleAuxiliaire: number;
  epConsoFr: number;
  epConsoFrDepensier: number;
  epConso5Usages: number;
  epConso5UsagesM2: number;
  // Classe bilan DPE finale
  classeBilanDpe: string;
  isBilanDpeProcheClasseSuperieure: boolean;
  isBilanDpeProcheClasseInferieure: boolean;
};

type EmissionGesType = {
  emissionGesCh: number;
  emissionGesChDepensier: number;
  emissionGesEcs: number;
  emissionGesEcsDepensier: number;
  emissionGesEclairage: number;
  emissionGesAuxiliaireGenerationCh: number;
  emissionGesAuxiliaireGenerationChDepensier: number;
  emissionGesAuxiliaireDistributionCh: number;
  emissionGesAuxiliaireGenerationEcs: number;
  emissionGesAuxiliaireGenerationEcsDepensier: number;
  emissionGesAuxiliaireDistributionEcs: number;
  emissionGesAuxiliaireDistributionFr: number | null;
  emissionGesAuxiliaireVentilation: number;
  emissionGesTotaleAuxiliaire: number;
  emissionGesFr: number;
  emissionGesFrDepensier: number;
  emissionGes5Usages: number;
  emissionGes5UsagesM2: number;
  // Classe bilan GES finale
  classeEmissionGes: string;
};

type SortieType = {
  deperdition: object;
  apportEtBesoin: object;
  productionElectricite: object;
  sortieParEnergieCollection: object;
  efConso: object;
  epConso: EpConsoType;
  emissionGes: EmissionGesType;
  cout: object;
  confortEte: object;
  qualiteIsolation: object;
};

export type Logement = {
  caracteristiqueGenerale: CaracteristiqueGenerale;
  meteo: object;
  ventilationCollection: Array<object>;
  enveloppe: object;
  climatisationCollection: Array<object>;
  installationEcsCollection: Array<object>;
  installationChauffageCollection: Array<object>;
  productionElecEnr: object;
  sortie: SortieType;
  etapeTravaux: object;
};
