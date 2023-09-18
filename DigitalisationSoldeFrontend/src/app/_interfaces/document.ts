export interface IDocument {
    id: number;
    dateSaisie: Date;
    dateControle: Date;
    dateValidation: Date;
    dateModification: Date;
    matricule: string;
    userSaisie: string;
    userControle: string;
    userValidation: string;
    idDossier: number;
}
