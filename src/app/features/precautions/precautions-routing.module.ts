import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrecautionsPageComponent } from './precautions-page/precautions-page.component';

const routes: Routes = [
     { path: '', component: PrecautionsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrecautionsRoutingModule { }
