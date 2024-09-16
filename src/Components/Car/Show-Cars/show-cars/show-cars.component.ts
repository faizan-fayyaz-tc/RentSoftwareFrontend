import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CarService } from '../../../../Services/Car/car.service';
import { Car } from '../../../../Models/Car';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-cars',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './show-cars.component.html',
  styleUrl: './show-cars.component.css',
})
export class ShowCarsComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carService: CarService, private router: Router) {}

  ngOnInit(): void {
    this.carService.GetCars().subscribe({
      next: (data) => {
        this.cars = data;
      },
      error: (err) => {
        console.error('Error fetching cars:', err);
      },
    });
  }

  onEdit(carId: number): void {}
  onRemove(carId: number): void {}
}
