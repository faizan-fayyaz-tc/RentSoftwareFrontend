import { CarService } from './../../../../Services/Car/car.service';
import { Component } from '@angular/core';
import { Car } from '../../../../Models/Car';
import { AdminLoginService } from '../../../../Services/Admin/admin-login.service';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
})
export class AdminDashboardComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carService: CarService, private router: Router) {}

  ngOnInit(): void {
    this.carService.GetCars().subscribe({
      next: (data) => {
        this.cars = data;
        console.log('Get Cars Data:', data);
      },
      error: (err) => {
        console.error('Error fetching cars:', err);
      },
    });
  }

  onPressCar(event: Event): void {
    event.preventDefault();
    this.router.navigate(['/post-car']);
  }

  onPressCustomer(event: Event): void {
    event.preventDefault();
    this.router.navigate(['/post-customer']);
  }

  onPressRent(event: Event): void {
    event.preventDefault();
    this.router.navigate(['/post-rent']);
  }

  onPressShowCars(event: Event): void {
    event.preventDefault();
    this.router.navigate(['/show-cars']);
  }

  onPressShowRents(event: Event): void {
    event.preventDefault();
    this.router.navigate(['/show-rents']);
  }

  onUpdate(carId: number): void {
    this.router.navigate(['/post-car'], { queryParams: { id: carId } });
  }

  onRemove(carId: number): void {
    if (confirm('Are You Sure You Want To Remove This Car?.')) {
      this.carService.RemoveCar(carId).subscribe({
        next: () => {
          this.cars = this.cars.filter((car) => car.carId !== carId);
          console.log('Car removed successfully');
        },
        error: (err) => {
          console.error('Error removing car:', err);
        },
      });
    }
  }
}
