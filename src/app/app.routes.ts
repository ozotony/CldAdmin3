import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';
import { Payment2Component } from './payment2/payment2.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { PaymentTrademarkComponent } from './payment-trademark/payment-trademark.component';
import { DailyReportComponent } from './daily-report/daily-report.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

import { MyProfiledetailComponent } from './my-profiledetail/my-profiledetail.component';
import { AccreditationComponent } from './accreditation/accreditation.component';
import {  AgentreportComponent } from './agentreport/agentreport.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

export const routes: Routes = [
  
 
   

   
   { path: 'home', component: HomeComponent,   data: { animation: 'tiger3' } } ,
   { path: 'DailyReport', component: DailyReportComponent,   data: { animation: 'tiger8' } } ,
   { path: 'PaymentTrademark', component: PaymentTrademarkComponent,   data: { animation: 'tiger8' } } ,
   { path: 'trademark', component: PaymentComponent,   data: { animation: 'tiger2' } } ,
   { path: 'patent', component: Payment2Component,   data: { animation: 'tiger7' } } ,
   { path: 'login', component: LoginComponent,   data: { animation: 'tiger4' } } ,
   { path: 'register', component: RegisterComponent,   data: { animation: 'tiger5' } } ,
   { path: 'logout', component: LogoutComponent,   data: { animation: 'tiger6' } } ,

   { path: 'Profile', component: MyProfileComponent,
    children: [
      { path: '', redirectTo: 'ProfileDetail', pathMatch: 'full' },
      { path: 'ProfileDetail', component: MyProfiledetailComponent },
      { path: 'Accreditation', component: AccreditationComponent} ,
      { path: 'AgentReport', component: AgentreportComponent} ,
      { path: 'Reset', component: ResetPasswordComponent} ,
      
     
    ]
  } ,
  
    { path: '',   redirectTo: 'home', pathMatch: 'full' }
  

   
   
    
 

  
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);