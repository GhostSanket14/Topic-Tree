import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';



const materialModules = [
  MatButtonModule,
  CommonModule,
  MatCheckboxModule,
];

@NgModule({
  imports: materialModules,
  exports: materialModules
})
export class MaterialsModule { }
