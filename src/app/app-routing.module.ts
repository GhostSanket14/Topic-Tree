import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './modules/pages/pages.component';

const routes: Routes = [
  {path: '', redirectTo: 'topic-tree', pathMatch: 'full'},
  { path: 'topic-tree', loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule) },
  {path:'admin', loadChildren: ()=> import('./admin/admin.module').then(m=>m.AdminModule)},
  { path: '**', component: PagesComponent,data:{ foundIn : 'modules', errorType : '404' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
