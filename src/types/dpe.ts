import { Logement } from "./logement";

export type DpeMetadata = {
  numeroDpe: string;
  visitDate: Date;
  logement?: Logement;
  isDpeClassDiffering?: boolean;
  isDpeDataCompatible: boolean;
  calculatedDpeClasses?: string[];
  // Classe DPE officielle, nous on veut la classe finale
  officialDpeClass?: string;
};
