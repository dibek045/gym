import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MaterialModuleModule } from 'src/shared/material-module/material-module.module';

import { MenuComponent } from './menu/menu.component';

import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationService } from './shared/notification.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    HomeComponent,
    
  
    
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModuleModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    FormsModule
  ],
  providers: [NotificationService],

  bootstrap: [AppComponent],
})
export class AppModule { }
