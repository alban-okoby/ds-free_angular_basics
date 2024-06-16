import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  commercialUrl = "http://localhost:8082/api/v1/employes/commercial";

  constructor(
    private httpClient: HttpClient
  ) { }


  getAllCommercial() {
    return this.httpClient.get(this.commercialUrl);
  }

  getCommercialById(empId: any) {
    return this.httpClient.get(this.commercialUrl + "/" + empId);
  }

  createCommercial(emp: any) {
    return this.httpClient.post(this.commercialUrl, emp);
  }

  updateCommercialById(empId: number, emp: any) {
    return this.httpClient.put(this.commercialUrl + "/" + empId, emp);
  }

  deleteCommercialById(empId: number) {
    return this.httpClient.delete(this.commercialUrl + "/" + empId);
  }
}
