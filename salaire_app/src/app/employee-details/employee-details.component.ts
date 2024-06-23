import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent implements OnInit {
 commercial: any;

 constructor(
  private employeeService: EmployeeService,
  private activatedRoute: ActivatedRoute
 ) {

 }

 ngOnInit(): void {
     this.getCurrenEmployee();
 }

getCurrenEmployee() {
  this.activatedRoute.paramMap.subscribe((p: any) => {
    const empId = p.get('commercialId');
    this.employeeService.getCommercialById(empId).subscribe((res: any) => {
      this.commercial = res;
      console.log(this.commercial);
    });
  });
}
}
