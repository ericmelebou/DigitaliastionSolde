import { IdAffectationDossier } from "./id-affectation-dossier";

export interface IAffectationDossier {
    id: number
    idDossier: number;
    idAgent: number;
    dateAffectation: string;
    status: Boolean;
    idAffectateur?: number;
}
