import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages/pages.component';
import { MaterialsModule } from '../shared/materials/materials.module';
import { SharedComponentModule } from '../shared/shared-component/shared-component.module';


@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent
    
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    MaterialsModule,
    SharedComponentModule
  ]
})
export class ModulesModule { }
