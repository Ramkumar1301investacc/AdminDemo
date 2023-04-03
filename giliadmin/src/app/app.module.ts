import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavbarComponent } from './component/sidenavbar/sidenavbar.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import Mixpanel from 'mixpanel';

const mixpanel = Mixpanel.init('11b25c9684cd81a697eb5776a555af3e');

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
  providers: [
    {provide : Mixpanel, useValue: mixpanel} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
