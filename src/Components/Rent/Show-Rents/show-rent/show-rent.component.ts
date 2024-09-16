import { Component, OnInit } from '@angular/core';
import { Rent } from '../../../../Models/Rent';
import { RentService } from '../../../../Services/Rent/rent.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-rent',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './show-rent.component.html',
  styleUrls: ['./show-rent.component.css'],
})
export class ShowRentComponent implements OnInit {
  rents: Rent[] = [];

  constructor(private rentService: RentService) {}

  ngOnInit(): void {
    this.rentService.getRent().subscribe({
      next: (data) => {
        this.rents = data;
        console.log('Get Rents Data:', data);
      },
      error: (err) => {
        console.error('Error fetching rents:', err);
      },
    });
  }
}
