import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RiskFactorsPageComponent } from './risk-factors-page/risk-factors-page.component';

const routes: Routes = [
    { path: '', component: RiskFactorsPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RiskFactorsRoutingModule { }
