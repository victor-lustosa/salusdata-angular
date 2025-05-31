import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RippleModule } from 'primeng/ripple';
import { RouterModule } from '@angular/router';
import { AppMenuitemComponent } from './app-menu/app-menuitem.components';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';
import { AppTopBarComponent } from './app-topbar/app-topbar.component';
import { AppMenuComponent } from './app-menu/app-menu.component';

@NgModule({
  declarations: [
    AppMenuitemComponent,
    AppTopBarComponent,
    AppFooterComponent,
    AppMenuComponent,
    AppSidebarComponent,
    AppLayoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    InputTextModule,
    SidebarModule,
    RadioButtonModule,
    InputSwitchModule,
    RippleModule,
    RouterModule,
  ],
})
export class LayoutModule {}
