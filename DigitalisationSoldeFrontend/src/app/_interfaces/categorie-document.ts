import { IDocument } from "./document";

export interface ICategorieDocument {
    id: number;
    libelle: string;
    documents: IDocument[];
    resetPasswordToken: string;
}
