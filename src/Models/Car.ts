import { Rent } from './Rent';

export interface Car {
  carId: number;
  carModel: string;
  rents?: Rent[];
}
