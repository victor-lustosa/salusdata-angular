import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './shared/layout/layout.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ProductService } from './features/dashboard/service/product.service';

@NgModule({
  declarations: [
    AppComponent,

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
