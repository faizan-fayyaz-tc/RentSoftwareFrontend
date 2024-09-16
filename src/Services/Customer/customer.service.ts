import { HttpClient } from '@angular/common/http';
import { Customer } from './../../Models/Customer';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private apiUrl = `${environment.customerApiUrl}`;
  constructor(private httpClient: HttpClient) {}

  PostCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.apiUrl, customer);
  }

  getCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.apiUrl);
  }
}
