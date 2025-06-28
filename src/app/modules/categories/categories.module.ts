import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { TreeFortsComponent } from './tree-forts/tree-forts.component';
import { MaterialsModule } from 'src/app/shared/materials/materials.module';


@NgModule({
  declarations: [
    TreeFortsComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    MaterialsModule
  ]
})
export class CategoriesModule { }
