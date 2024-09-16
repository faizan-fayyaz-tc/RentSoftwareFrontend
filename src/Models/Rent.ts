import { Agent } from './Agent';
import { Car } from './Car';
import { Customer } from './Customer';

export interface Rent {
  rentId: number;
  rentDate: string;
  agent: Agent;
  car: Car;
  customer: Customer;
  agentId: number;
  carId: number;
  customerId: number;
}
