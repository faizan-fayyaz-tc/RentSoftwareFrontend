import { Agent } from './../../../../Models/Agent';
import { Component } from '@angular/core';
import { Rent } from '../../../../Models/Rent';
import { Car } from '../../../../Models/Car';
import { Customer } from '../../../../Models/Customer';
import { RentService } from '../../../../Services/Rent/rent.service';
import { CarService } from '../../../../Services/Car/car.service';
import { AdminLoginComponent } from '../../../Admin/Admin-Login/admin-login/admin-login.component';
import { CustomerService } from '../../../../Services/Customer/customer.service';
import { AdminLoginService } from '../../../../Services/Admin/admin-login.service';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-rent',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './post-rent.component.html',
  styleUrl: './post-rent.component.css',
})
export class PostRentComponent implements OnInit {
  rent: Rent = {
    rentId: 0,
    rentDate: '',
    agent: { agentId: 0, name: '' },
    car: { carId: 0, carModel: '' },
    customer: { customerId: 0, customerName: '' },
    agentId: 0,
    carId: 0,
    customerId: 0,
  };

  agents: Agent[] = [];
  cars: Car[] = [];
  customers: Customer[] = [];

  constructor(
    private rentService: RentService,
    private adminService: AdminLoginService,
    private carService: CarService,
    private customerService: CustomerService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.onloadAgent(), this.onloadCar(), this.onloadCustomer();
  }

  onloadCustomer(): void {
    this.customerService.getCustomers().subscribe({
      next: (data) => {
        console.log('Fetched Customers : ', data);
        this.customers = data;
      },
      error: (err) => {
        console.error('Error Fetching customers : ', err);
      },
    });
  }

  onloadCar(): void {
    this.carService.GetCars().subscribe({
      next: (data) => {
        console.log('Fetched Cars : ', data);
        this.cars = data;
      },
      error: (err) => {
        console.error('Error Fetching cars : ', err);
      },
    });
  }

  onloadAgent(): void {
    this.adminService.getAgents().subscribe({
      next: (data) => {
        console.log('Fetched agents:', data);
        this.agents = data;
      },
      error: (err) => {
        console.error('Error fetching agents:', err);
      },
    });
  }

  onSubmit(): void {
    this.rent.agentId = Number(this.rent.agentId);
    this.rent.carId = Number(this.rent.carId);
    this.rent.customerId = Number(this.rent.customerId);

    const selectedAgent = this.agents.find(
      (agent) => agent.agentId === this.rent.agentId
    );
    console.log('Selected Agent:', selectedAgent);

    const selectedCar = this.cars.find((car) => car.carId === this.rent.carId);
    const selectedCustomer = this.customers.find(
      (customer) => customer.customerId === this.rent.customerId
    );

    this.rent = {
      ...this.rent,
      agent: selectedAgent
        ? { agentId: selectedAgent.agentId, name: selectedAgent.name }
        : { agentId: 0, name: '' },
      car: selectedCar
        ? { carId: selectedCar.carId, carModel: selectedCar.carModel }
        : { carId: 0, carModel: '' },
      customer: selectedCustomer
        ? {
            customerId: selectedCustomer.customerId,
            customerName: selectedCustomer.customerName,
          }
        : { customerId: 0, customerName: '' },
    };

    this.rentService.PostRent(this.rent).subscribe({
      next: (response) => {
        console.log('Rent posted successfully', response);
        this.router.navigate(['/admin-dashboard']);
      },
      error: (error) => console.error('Error posting rent', error),
    });
  }
}
