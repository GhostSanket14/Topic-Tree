import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreeFortsComponent } from './tree-forts/tree-forts.component';

const routes: Routes = [
  {path:'forts',component:TreeFortsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
