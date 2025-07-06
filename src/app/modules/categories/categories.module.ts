import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { TreeCategoryComponent } from './tree-forts/tree-category.component';
import { MaterialsModule } from 'src/app/shared/materials/materials.module';
import { TreeFortsBuilderComponent } from './tree-forts-builder/tree-forts-builder.component';
import { SharedComponentModule } from "../../shared/shared-component/shared-component.module";


@NgModule({
  declarations: [
    TreeCategoryComponent,
    TreeFortsBuilderComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    MaterialsModule,
    SharedComponentModule
]
})
export class CategoriesModule { }
