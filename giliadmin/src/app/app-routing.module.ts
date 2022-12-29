import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdaccountComponent } from './component/cdaccount/cdaccount.component';
import { ClaimsComponent } from './component/claims/claims.component';
import { ControlcenterComponent } from './component/controlcenter/controlcenter.component';
import { CorporateComponent } from './component/corporate/corporate.component';
import { CorporateemployeeComponent } from './component/corporateemployee/corporateemployee.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { EndorsementComponent } from './component/endorsement/endorsement.component';
import { FeedbackComponent } from './component/feedback/feedback.component';
import { NetworkhospitalsComponent } from './component/networkhospitals/networkhospitals.component';
import { PolicyComponent } from './component/policy/policy.component';
import { ReportsComponent } from './component/reports/reports.component';
import { UploadComponent } from './component/upload/upload.component';
const routes: Routes = [
  {path:'' ,component:DashboardComponent},
  {path:'dashboard' ,component:DashboardComponent},
  {path:'corporate' , component:CorporateComponent},
  {path:'controlcenter',component:ControlcenterComponent},
  {path:'cdaccount',component:CdaccountComponent},
  {path:'policy',component:PolicyComponent},
  {path:'corporateemployee',component:CorporateemployeeComponent},
  {path:'endorsement',component:EndorsementComponent},
  {path:'claim',component:ClaimsComponent},
  {path:'networkhospital',component:NetworkhospitalsComponent},
  {path:'reports',component:ReportsComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'upload',component:UploadComponent}
  
  
  
  
  
  
  
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
