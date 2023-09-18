import { IDocument } from "./document";

export interface IDocument2011 extends IDocument{
    codePoste: number;
    dateDebut: Date;
    dateFin: Date;
    montant: number;
}
