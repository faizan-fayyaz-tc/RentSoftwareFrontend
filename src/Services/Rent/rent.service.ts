import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rent } from '../../Models/Rent';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RentService {
  private apiUrl = `${environment.rentApiUrl}`;

  constructor(private httpClient: HttpClient) {}

  PostRent(rent: Rent): Observable<Rent> {
    return this.httpClient.post<Rent>(this.apiUrl, rent);
  }

  getRent(): Observable<Rent[]> {
    return this.httpClient.get<Rent[]>(this.apiUrl);
  }
}
