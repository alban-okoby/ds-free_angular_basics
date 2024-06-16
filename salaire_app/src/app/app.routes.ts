import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: ':id/employee-details', component: EmployeeDetailsComponent },
  { path: ':id/employee-update', component: EmployeeUpdateComponent },
  {
    path: '**', redirectTo: 'home', pathMatch: 'full'
  }
];
