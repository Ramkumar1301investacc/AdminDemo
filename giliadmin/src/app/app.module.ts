import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavbarComponent } from './component/sidenavbar/sidenavbar.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { Meta } from '@angular/platform-browser';



@NgModule({
  declarations: [
    AppComponent,
    SidenavbarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
