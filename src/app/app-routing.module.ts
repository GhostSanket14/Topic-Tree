import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { CommonErrorComponent } from './pages/common-error/common-error.component';

const routes: Routes = [
  { path: 'dashboard', pathMatch: 'full', component: MainDashboardComponent },
  { path: '**', component: CommonErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
