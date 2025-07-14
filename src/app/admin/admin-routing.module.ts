import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from '../modules/pages/pages.component';

const routes: Routes = [
  {path: 'login', pathMatch: 'full', component: LoginComponent},
  { path: '**', pathMatch: 'full', component: PagesComponent, data: { foundIn: 'admin', errorType: '404' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
