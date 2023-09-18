import { IDocument } from "./document";

export interface IDocument2021 extends IDocument{
    codePoste: number;
    dateDebut: Date;
    dateFin: Date;
    montant: number;
    montantGlobal: number;
}
