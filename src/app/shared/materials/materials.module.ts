import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';

const materialModules = [
  MatButtonModule,
  CommonModule,
  MatCheckboxModule,
  MatDividerModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatSelectModule,
  ReactiveFormsModule,
  MatProgressBarModule,
  MatListModule,
];

@NgModule({
  imports: materialModules, 
  exports: materialModules,
})
export class MaterialsModule { }
