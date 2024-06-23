import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: ':commercialId/employee-details', component: EmployeeDetailsComponent },
  { path: ':commercialId/employee-update', component: EmployeeUpdateComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  {
    path: '**', redirectTo: 'home', pathMatch: 'full'
  }
];
