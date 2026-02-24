import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  { path: 'dashboard', pathMatch: 'full', component: MainDashboardComponent },
  { path: 'oops-page', pathMatch: 'full', data: { errType: 'unauthorised' }, component: ErrorPageComponent },
  { path: '**', data: { errType: '404' }, component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
