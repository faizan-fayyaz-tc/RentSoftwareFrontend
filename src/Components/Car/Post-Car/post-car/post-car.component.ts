import { CarService } from './../../../../Services/Car/car.service';
import { Component, OnInit } from '@angular/core';
import { Car } from '../../../../Models/Car';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-car',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './post-car.component.html',
  styleUrl: './post-car.component.css',
})
export class PostCarComponent implements OnInit {
  car: Car = {
    carId: 0,
    carModel: '',
    rents: [],
  };

  constructor(
    private carService: CarService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const carId = params['id'];
      if (carId) {
        this.carService.GetCarById(carId).subscribe({
          next: (data) => {
            this.car = data;
          },
          error: (err) => {
            console.error('Error fetching car details:', err);
          },
        });
      }
    });
  }

  onSubmit(): void {
    if (this.car.carModel.trim()) {
      if (this.car.carId === 0) {
        this.carService.PostCar(this.car).subscribe({
          next: () => {
            this.router.navigate(['/admin-dashboard']);
          },
          error: (err) => {
            console.error('Error adding car:', err);
          },
        });
      } else {
        this.carService.UpdateCar(this.car).subscribe({
          next: () => {
            this.router.navigate(['/admin-dashboard']);
          },
          error: (err) => {
            console.error('Error updating car:', err);
          },
        });
      }
    } else {
      console.error('Car model is required.');
    }
  }
}
