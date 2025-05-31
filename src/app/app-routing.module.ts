import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './shared/layout/app-layout/app-layout.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
          {
            path: '', component: AppLayoutComponent,
            children: [
                    { path: '', loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)},
                ]
          },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
