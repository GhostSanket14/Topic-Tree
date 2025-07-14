import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreeCategoryComponent } from './tree-category/tree-category.component';
import { TreeFortsBuilderComponent } from './tree-forts-builder/tree-forts-builder.component';
import { PagesComponent } from '../pages/pages.component';
import { TreeWeaponsBuilderComponent } from './tree-weapons-builder/tree-weapons-builder.component';

const routes: Routes = [
  { path: 'category-root', component: TreeCategoryComponent },
  {path: 'forts-engine', component: TreeFortsBuilderComponent},
  {path: 'weapons-engine', component: TreeWeaponsBuilderComponent},
  {path: '**', component: PagesComponent, data: {foundIn : 'tree-forts', errorType : '404'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
