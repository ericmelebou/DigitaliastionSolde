import { IDocument } from "./document";

export interface IDocument3001 extends IDocument{
    tauxRappel: number;
    pointsRappel: number;
    dateDebutRappel: Date;
    dateFinRappel: Date;
    nombreJoursRappel: number;
    codePoste: number;
    montant: number;
}
