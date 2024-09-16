import { Rent } from './Rent';

export interface Customer {
  customerId: number;
  customerName: string;
  rents?: Rent[];
}
