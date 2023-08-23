import { IAgent } from "./agent";

export interface IRole {
    id: number;
    nom: string;
    agents : IAgent[];
}
