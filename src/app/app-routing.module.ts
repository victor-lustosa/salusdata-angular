import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppLayoutComponent } from './shared/layout/app-layout/app-layout.component';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: '',
          component: AppLayoutComponent,
          children: [
            {
              path: '',
              loadChildren: () =>
                import('./features/dashboard/dashboard.module').then(
                  (m) => m.DashboardModule
                ),
            },
            {
              path: 'checklists/incidents',
              loadChildren: () =>
                import('./features/checklists/incidents/incidents.module').then(
                  (m) => m.IncidentsModule
                ),
            },
            {
              path: 'checklists/procedures',
                loadChildren: () =>
                import('./features/checklists/procedures/procedures.module').then(
                  (m) => m.ProceduresModule
                ),
            },
            {
              path: 'checklists/risk-factors',
              loadChildren: () =>
                import('./features/checklists/risk-factors/risk-factors.module').then(
                  (m) => m.RiskFactorsModule
                ),
            },
            {
              path: 'departments',
              loadChildren: () =>
                import('./features/departments/departments.module').then(
                  (m) => m.DepartmentsModule
                ),
            },
            {
              path: 'patients',
              loadChildren: () =>
                import('./features/patients/patients.module').then(
                  (m) => m.PatientsModule
                ),
            },
            {
              path: 'precautions',
              loadChildren: () =>
                import('./features/precautions/precautions.module').then(
                  (m) => m.PrecautionsModule
                ),
            },
            {
              path: 'users',
              loadChildren: () =>
                import('./features/users/users.module').then(
                  (m) => m.UsersModule
                ),
            },
          ],
        },
      ],
      {
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
        onSameUrlNavigation: 'reload',
      }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
