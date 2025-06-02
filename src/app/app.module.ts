import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './shared/layout/layout.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ProductService } from './features/dashboard/service/product.service';
import { RiskFactorsPageComponent } from './features/checklists/risk-factors/risk-factors-page/risk-factors-page.component';
import { DescriptionRiskFactorsComponent } from './features/checklists/risk-factors/description-risk-factors/description-risk-factors.component';
import { RegisterRiskFactorsComponent } from './features/checklists/risk-factors/register-risk-factors/register-risk-factors.component';
import { RegisterProceduresComponent } from './features/checklists/procedures/register-procedures/register-procedures.component';
import { DescriptionProceduresComponent } from './features/checklists/procedures/description-procedures/description-procedures.component';
import { ProceduresPageComponent } from './features/checklists/procedures/procedures-page/procedures-page.component';
import { IncidentsPageComponent } from './features/checklists/incidents/incidents-page/incidents-page.component';
import { DescriptionIncidentsComponent } from './features/checklists/incidents/description-incidents/description-incidents.component';
import { RegisterIncidentsComponent } from './features/checklists/incidents/register-incidents/register-incidents.component';

@NgModule({
  declarations: [
    AppComponent,
    RiskFactorsPageComponent,
    DescriptionRiskFactorsComponent,
    RegisterRiskFactorsComponent,
    RegisterProceduresComponent,
    DescriptionProceduresComponent,
    ProceduresPageComponent,
    IncidentsPageComponent,
    DescriptionIncidentsComponent,
    RegisterIncidentsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule
  ],
  providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
       ProductService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
