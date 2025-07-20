import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { TreeCategoryComponent } from './tree-category/tree-category.component';
import { MaterialsModule } from 'src/app/shared/materials/materials.module';
import { SharedComponentModule } from "../../shared/shared-component/shared-component.module";
import { TreeWeaponsBuilderComponent } from './tree-weapons-builder/tree-weapons-builder.component';
import { TreeFortsBuilderComponent } from './tree-forts-builder/tree-forts-builder.component';


@NgModule({
  declarations: [
    TreeCategoryComponent,
    TreeFortsBuilderComponent,
    TreeWeaponsBuilderComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    MaterialsModule,
    SharedComponentModule
]
})
export class CategoriesModule { }
