import { AdminLoginService } from './../../../../Services/Admin/admin-login.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';
import { Agent } from '../../../../Models/Agent';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent {
  agent: Agent = {
    agentId: 0,
    name: '',
    rents: [],
  };

  constructor(
    private adminService: AdminLoginService,
    private router: Router
  ) {}

  onSubmit(): void {
    if (this.agent.name.trim()) {
      this.adminService.CreateAgent(this.agent).subscribe({
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
