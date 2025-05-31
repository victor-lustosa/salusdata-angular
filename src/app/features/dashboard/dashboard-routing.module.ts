import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';


@NgModule({
  imports: [RouterModule.forChild([
        { path: '', component: DashboardPageComponent }
    ])],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
