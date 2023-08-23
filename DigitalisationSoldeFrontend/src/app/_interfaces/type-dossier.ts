import { IDossier } from "./dossier";
import { IPieceJustificative } from "./piece-justificative";

export interface ITypeDossier {
    id: number;
    libelle: string;
    informations: string;
    dossiers: IDossier[];
    piecesJustificatives: IPieceJustificative[];
}
