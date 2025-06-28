import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider'



const materialModules = [
  MatButtonModule,
  CommonModule,
  MatCheckboxModule,
  MatDividerModule
];

@NgModule({
  imports: materialModules,
  exports: materialModules
})
export class MaterialsModule { }
