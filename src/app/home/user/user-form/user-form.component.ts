import { Component, HostListener } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DepartmentService } from 'src/app/shared/department.service';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent {
  isSingleColumnLayout = false; // Variable para controlar el diseño de las columnas


  constructor(public service: EmployeeService,
    private departmentService: DepartmentService,
    public notificationService: NotificationService,
    public dialogRef: MatDialogRef<UserFormComponent>){

  }

  hireDate:string="";
  
  ngOnInit() {
    this.service.getEmployees();
    this.checkWindowWidth(); 
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkWindowWidth(); // Verificar el ancho de la ventana al cambiar su tamaño
  }

  checkWindowWidth() {
    this.isSingleColumnLayout = window.innerWidth < 768; // Modificar el valor de acuerdo al ancho de la ventana
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.notificationService.success(':: Submitted successfully');
  }

  onSubmit() {
    if (this.service.form.valid) {
      this.service.insertEmployee(this.service.form.value);
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.notificationService.success(':: Submitted successfully');
    }
  }


  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
    this.notificationService.success(':: Submitted successfully');

  }
  }

 

