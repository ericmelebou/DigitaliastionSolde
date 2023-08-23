import { ITypeDossier } from "./type-dossier";

export interface IPieceJustificative {
    id: number;
    libelle: string;
    typesDossiers : ITypeDossier[];
}
