import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { MaterialsModule } from '../shared/materials/materials.module';


@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialsModule
    
]
})
export class AdminModule { }
