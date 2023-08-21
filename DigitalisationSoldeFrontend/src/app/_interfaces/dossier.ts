import { IAffectationDossier } from "./affectation-dossier";
import { IDocument } from "./document";

export interface IDossier {
    id: number;
    codeIdentification: string;
    nombrePiece: number;
    type: string;
    dateDepot: string;
    nombreAgentsConcernes: number;
    status: string;
    urlPiece: string;
    urlDemande: string;
    origine: string;
    documents: IDocument[]; 
    affectationDossiers: IAffectationDossier[];
}
