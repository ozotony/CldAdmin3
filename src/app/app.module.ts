import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';
import { routing  } from './app.routes';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiService } from './ApiService';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {NgBusyModule} from 'ng-busy';
import { LogoutComponent } from './logout/logout.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { Payment2Component } from './payment2/payment2.component';
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';
import { PaymentTrademarkComponent } from './payment-trademark/payment-trademark.component';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {DataGridModule} from 'primeng/primeng';
import { DailyReportComponent } from './daily-report/daily-report.component';
import {TabsModule} from "ng2-tabs";
import {CalendarModule} from 'primeng/calendar';
import { DisqusModule } from "ngx-disqus";
import {NgRegisterServiceService} from './ng-register-service.service';
import {GalleriaModule} from 'primeng/galleria';
import {MessagesModule} from 'primeng/messages';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyProfiledetailComponent } from './my-profiledetail/my-profiledetail.component';

import {TieredMenuModule} from 'primeng/tieredmenu';
import {PanelModule} from 'primeng/panel';
import {CheckFacebookStatusService} from './check-facebook-status.service';
import { AccreditationComponent } from './accreditation/accreditation.component';
import {DataTableModule} from 'primeng/datatable';
import {ConfirmDialogModule,ConfirmationService} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import { AgentreportComponent } from './agentreport/agentreport.component';
import { NewuserComponent } from './newuser/newuser.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaymentComponent,
    LoginComponent,
    RegisterComponent,
    AccreditationComponent,
    LogoutComponent,
    Payment2Component,
    MyProfileComponent,
    MyProfiledetailComponent,
    PaymentTrademarkComponent,
    DailyReportComponent,
    AgentreportComponent,
    NewuserComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    RouterModule ,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    ButtonModule,
    TabsModule,
    DialogModule,
    CalendarModule,
    DataTableModule,
    MessagesModule,
    GalleriaModule,
    TableModule,
    ConfirmDialogModule,
    DataGridModule,
    TieredMenuModule,
    PanelModule,
    NgxSmartModalModule.forRoot(),
    DisqusModule.forRoot('disqus_shortname'),
    NgBusyModule
  ],
  providers: [ApiService,{provide: LocationStrategy, useClass: HashLocationStrategy},NgxSmartModalService,CheckFacebookStatusService,ConfirmationService,NgRegisterServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
