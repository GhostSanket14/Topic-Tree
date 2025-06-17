import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages/pages.component';
import { MaterialsModule } from '../shared/materials/materials.module';


@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent
    
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    MaterialsModule
  ]
})
export class ModulesModule { }
