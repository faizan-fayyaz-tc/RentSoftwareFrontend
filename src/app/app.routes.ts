import { RouterModule, Routes } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { AdminLoginComponent } from '../Components/Admin/Admin-Login/admin-login/admin-login.component';
import { AdminDashboardComponent } from '../Components/Admin/Admin-Dashboard/admin-dashboard/admin-dashboard.component';
import { PostCarComponent } from '../Components/Car/Post-Car/post-car/post-car.component';
import { PostCustomerComponent } from '../Components/Customer/Post-Customer/post-customer/post-customer.component';
import { PostRentComponent } from '../Components/Rent/Post-Rent/post-rent/post-rent.component';
import { ShowCarsComponent } from '../Components/Car/Show-Cars/show-cars/show-cars.component';
import { ShowRentComponent } from '../Components/Rent/Show-Rents/show-rent/show-rent.component';

export const routes: Routes = [
  { path: '', component: AdminLoginComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'post-car', component: PostCarComponent },
  { path: 'post-customer', component: PostCustomerComponent },
  { path: 'post-rent', component: PostRentComponent },
  { path: 'show-cars', component: ShowCarsComponent },
  { path: 'show-rents', component: ShowRentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
