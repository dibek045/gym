import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/employee.service';
import { UserFormComponent } from './user-form/user-form.component';
import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';


const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: 'David', created_at: '2023-06-30', actived: true },
  { id: 2, name: 'Alejandro', created_at: '2023-07-01', actived: false },
  { id: 3, name: 'Diana', created_at: '2023-07-05', actived: true },
  { id: 4, name: 'Julia', created_at: '2023-07-08', actived: true },
  { id: 5, name: 'Aaron', created_at: '2023-07-09', actived: true },
  { id: 6, name: 'Luisa', created_at: '2023-07-11', actived: true },
  { id: 7, name: 'Carlos', created_at: '2023-07-13', actived: true },
  { id: 8, name: 'Kevin', created_at: '2023-07-14', actived: true },
  { id: 9, name: 'Juan', created_at: '2023-07-17', actived: true },
  { id: 10, name: 'Norma', created_at: '2023-07-19', actived: true },
  { id: 15, name: 'Aaron', created_at: '2023-07-09', actived: true },
  { id: 16, name: 'Luisa', created_at: '2023-07-11', actived: true },
  { id: 17, name: 'Carlos', created_at: '2023-07-13', actived: true },
  { id: 18, name: 'Kevin', created_at: '2023-07-14', actived: true },
  { id: 19, name: 'Juan', created_at: '2023-07-17', actived: true },
  { id: 20, name: 'Norma', created_at: '2023-07-19', actived: true },
];

export interface PeriodicElement {
  id: number;
  name: string;
  created_at: string;
  actived: boolean;
}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  
  
})
export class UserComponent {

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

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
  
  displayedColumns: string[] = ['id', 'name', 'created_at', 'actived'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  searchKey="";

  constructor(private service:EmployeeService,private dialog: MatDialog,){
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);

  }
  onSearchClear(){}

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
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
    dialogConfig.width = "60%";
    this.dialog.open(UserFormComponent,dialogConfig);
  }
}
