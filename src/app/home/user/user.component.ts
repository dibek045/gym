import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { EmployeeService } from 'src/app/shared/employee.service';
import { UserFormComponent } from './user-form/user-form.component';
import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';


const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'David', dias: 1, actived: true},
  {id: 2, name: 'Alejandro', dias: 2, actived:false},
  {id: 3, name: 'Diana', dias: 6, actived: true},
  {id: 4, name: 'Julia', dias: 9, actived:true},
  {id: 5, name: 'Aaron', dias: 10, actived:true},
  {id: 6, name: 'Luisa', dias: 12, actived:true},
  {id: 7, name: 'Carlos', dias: 14, actived:true},
  {id: 8, name: 'Kevin', dias: 15, actived:true},
  {id: 9, name: 'Juan', dias: 18, actived:true},
  {id: 10, name: 'Norma', dias: 20, actived:true},
];
export interface PeriodicElement {
  id: number;
  name: string;
  dias: number;
  actived: boolean;
}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  
  
})
export class UserComponent {
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
    city: new FormControl(''),
    gender: new FormControl('1'),
    department: new FormControl(0),
    hireDate: new FormControl(''),
    isPermanent: new FormControl(false)
  });
  constructor(private service:EmployeeService,private dialog: MatDialog,){

  }
  displayedColumns: string[] = ['id', 'name', 'dias', 'actived'];
  dataSource = ELEMENT_DATA;
  searchKey="";
  onSearchClear(){}

  applyFilter(){}

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      fullName: '',
      email: '',
      mobile: '',
      city: '',
      gender: '1',
      department: 0,
      hireDate: '',
      isPermanent: false
    });
  }

  onCreate() {
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "100%";
    this.dialog.open(UserFormComponent,dialogConfig);
  }
}
