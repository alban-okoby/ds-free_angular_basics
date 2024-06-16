import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  commercials: any[] = [];
  constructor(
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.getAllCommercial();
  }

  getAllCommercial() {
    this.employeeService.getAllCommercial().subscribe((res: any) => {
      this.commercials = res;
      console.log(this.commercials);
    })
  }
}
