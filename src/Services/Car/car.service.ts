import { Car } from './../../Models/Car';
import { Rent } from './../../Models/Rent';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private apiUrl = `${environment.carApiUrl}`;

  constructor(private httpClient: HttpClient) {}

  GetCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.apiUrl);
  }

  PostCar(car: Car): Observable<Car> {
    return this.httpClient.post<Car>(this.apiUrl, car);
  }

  RemoveCar(carId: number): Observable<Car> {
    return this.httpClient.delete<Car>(`${this.apiUrl}/${carId}`);
  }

  GetCarById(carId: number): Observable<Car> {
    return this.httpClient.get<Car>(`${this.apiUrl}/${carId}`);
  }

  UpdateCar(car: Car): Observable<void> {
    return this.httpClient.put<void>(`${this.apiUrl}/${car.carId}`, car);
  }
}
