import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { UserComponent } from './user.component';
import { MaterialModuleModule } from 'src/shared/material-module/material-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form/user-form.component';
import { EmployeeService } from 'src/app/shared/employee.service';
import { MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/notification.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { PhotoComponent } from 'src/app/shared/photo/photo.component';
import { WebcamModule } from 'ngx-webcam';



@NgModule({
  declarations: [
    UserFormComponent,UserComponent,PhotoComponent
  ],
  imports: [
    CommonModule,
    MaterialModuleModule,
    FormsModule,    ReactiveFormsModule,
    FlexLayoutModule,WebcamModule
  ],
  providers:[EmployeeService,DatePipe,NotificationService]
})
export class UsuarioModule { }
