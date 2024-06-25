import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

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
    })
  }

  deleteCommercial(commercialId: number) {
    this.employeeService.deleteCommercialById(commercialId).subscribe((res: any) => {
    })

  }

  onDeleteModal(emplId: number) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: 'Etes vous sûr ?',
        text: "Cette action est irréversible!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Oui, supprimer !',
        cancelButtonText: 'Non, annuler!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: 'Supprimé !',
            text: 'Employé supprimé avec succès.',
            icon: 'success',
          });
          this.deleteCommercial(emplId);
          setTimeout(() => {
            this.getAllCommercial();
          }, 900);

        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: 'Annulé',
            text: 'L\'employé est sauf',
            icon: 'error',
          });
        }
      });
  }
}
