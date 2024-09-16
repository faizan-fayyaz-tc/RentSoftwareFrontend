import { Rent } from './Rent';

export interface Agent {
  agentId: number;
  name: string;
  rents?: Rent[];
}
