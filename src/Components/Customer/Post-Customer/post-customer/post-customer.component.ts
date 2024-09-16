import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Customer } from '../../../../Models/Customer';
import { CustomerService } from '../../../../Services/Customer/customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-customer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './post-customer.component.html',
  styleUrl: './post-customer.component.css',
})
export class PostCustomerComponent {
  customer: Customer = {
    customerId: 0,
    customerName: '',
    rents: [],
  };

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  onSubmit(): void {
    if (this.customer.customerName.trim()) {
      this.customerService.PostCustomer(this.customer).subscribe({
        next: () => {
          this.router.navigate(['/admin-dashboard']);
        },
        error: (err) => {
          console.error('Error adding agent:', err);
        },
      });
    } else {
      console.error('Admin name is required.');
    }
  }
}
