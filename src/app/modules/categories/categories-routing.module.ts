import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreeFortsComponent } from './tree-forts/tree-forts.component';
import { TreeFortsBuilderComponent } from './tree-forts-builder/tree-forts-builder.component';
import { PagesComponent } from '../pages/pages.component';

const routes: Routes = [
  {path:'forts',component:TreeFortsComponent},
  {path: 'forts-engine', component: TreeFortsBuilderComponent},
  {path: '**', component: PagesComponent, data: {foundIn : 'tree-forts', errorType : '404'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
