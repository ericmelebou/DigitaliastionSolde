import { IRole } from "./role";

export interface IAgent {
    id?: number;
    nom: string;
    prenom: string;
    email: string;
    password: string;
    creationDate?: string;
    updatedDate?: string;
    activated?: number;
    roles?: IRole[];
    resetPasswordToken?: string;
}
