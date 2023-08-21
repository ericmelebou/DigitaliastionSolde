import { IAgent } from "./agent";
import { IDossier } from "./dossier";
import { IdAffectationDossier } from "./id-affectation-dossier";

export interface IAffectationDossier {
    IdAffectationDossier: IdAffectationDossier;
    agent: IAgent;
    dossier: IDossier;
    dateAffectation: string;
    status: Boolean;
    idAffectateur: number;
}
