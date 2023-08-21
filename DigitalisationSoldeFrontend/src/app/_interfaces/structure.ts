import { IAgent } from "./agent";

export interface IStructure {
    id: number;
    nom: String;
    agents: IAgent[];
}
