import { IAffectationDossier } from "./affectation-dossier";
import { IDocument } from "./document";
import { ITypeDossier } from "./type-dossier";

export interface IDossier {
    id: number;
    codeIdentification: string;
    nombrePiece: number;
    dateDepot: string;
    nombreAgentsConcernes: number;
    status: string;
    urlPiece: string;
    urlDemande: string;
    origine: string;
    documents: IDocument[];
    affectationDossiers: IAffectationDossier[];
    typeDossier : ITypeDossier;
}
