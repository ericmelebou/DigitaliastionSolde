import { IAgent } from "./agent";

export interface Structure {
    id: number;
    nom: String;
    agents: IAgent[];
}
