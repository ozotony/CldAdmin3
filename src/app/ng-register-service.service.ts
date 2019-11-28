import { Injectable } from '@angular/core';
import { Headers, Http, Response,RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {MenuItem} from 'primeng/primeng';

@Injectable()
export class NgRegisterServiceService {
  private heroesUrl = 'app/heroes';
  private items: MenuItem[] =[];
  serviceBase = 'http://5.77.54.44/CldAdmin/';
  //serviceBase = 'http://5.77.54.44/CldAdmin_Backup/';
 // ipo = 'http://ipo.cldng.com/';
   ipo = ' http://5.77.54.44//IpoCldng/';

 // ipo ="http://5.77.54.44/EinaoTestEnvironment.IpoNigeria/"
  NewTrademark ="http://5.77.54.44/NewTrademark/"
  //NewTrademark ="http://5.77.54.44/NewTrademarkBackup/"
  constructor(private http: Http) { }
Logout() {

 //this.router.navigate(['/home']);
    }


  getMenuItem() :MenuItem[] {

      this.items = [
                    {label: 'Home', icon: 'fa-home', routerLink: ['/']} ,
                    {label: 'Login', icon: 'fa-sign-in', routerLink: ['/login']} ,
                    {label: 'Register', icon: 'fa-sign-in', routerLink: ['/register']} ,
                    {label: 'Logout', icon: 'fa-sign-in', command: (event) => {
                    this.Logout();
                }}

                ];


                console.log(this.items)

                return this.items;


       // Do something

  }



    Login(formData: any) {


        return this.http.post(this.serviceBase+'api/account/GetLoginToken2', formData)
                    .toPromise()

                    .then(data => {  return data; });

    }
    formDataUpload(formData: FormData) {


        return this.http.post(this.serviceBase+'api/account/register2', formData)
                    .toPromise()

                    .then(data => {  return data; });

    }

        formDataUpload2(pp2) {


        return this.http.get(this.serviceBase+'api/account/GetPendingContent2',  { params: pp2})
                    .toPromise()

                    .then(data => {  return data; });

    }


    formDataUpload14(pp2) {


        return this.http.get(this.serviceBase+'api/account/GetEmailExist',  { params: pp2})
                    .toPromise()

                    .then(data => {  return data; });

    }


    formDataUpload3(pp2) {


        return this.http.post(this.serviceBase+'api/account/UploadContent',   pp2)
                    .toPromise()

                    .then(data => {  return data; });

    }

    UpdateAgent(formData: any) {


       return this.http.post(this.ipo +'Handlers/SaveAgent3.ashx', formData)
    //    return this.http.post(' http://localhost:4556/Handlers/SaveAgent3.ashx', formData)
                    .toPromise()

                    .then(data => {  return data; });

      }

      UpdateAgent2(formData: any) {


        return this.http.post(this.ipo+'Handlers/SaveAgent4.ashx', formData)
     //    return this.http.post(' http://localhost:4556/Handlers/SaveAgent3.ashx', formData)
                     .toPromise()

                     .then(data => {  return data; });

       }

      ResetPassword(formData: any) {


        return this.http.post(this.ipo + 'Handlers/a_login2.ashx', formData)
     //    return this.http.post(' http://localhost:4556/Handlers/SaveAgent3.ashx', formData)
                     .toPromise()

                     .then(data => {  return data; });

       }

     GetData() {



       return this.http.get(this.NewTrademark +'api/account/GetAgentStatus')
                    .toPromise()

                    .then(data => {  return data; });

    }

        formDataUpload4(formData: FormData) {

     let headers = new Headers({ 'Content-Type': 'undefined' });
  //  let options = new RequestOptions({ headers: headers });

  //http://5.77.54.44/EinaoTestEnvironment.IPO/Handlers/Approve.ashx
        return this.http.post(this.ipo +'Handlers/Approve.ashx', formData)
                    .toPromise()

                    .then(data => {  return data; });

    }


    formDataUpload5(formData: FormData) {

     let headers = new Headers({ 'Content-Type': 'undefined' });
  //  let options = new RequestOptions({ headers: headers });

  //http://5.77.54.44/EinaoTestEnvironment.IPO/Handlers/Approve.ashx
        return this.http.post(this.ipo + 'Handlers/Reject.ashx', formData)
                    .toPromise()

                    .then(data => {  return data; });

    }


        formDataUpload6() {

     let headers = new Headers({ 'Content-Type': 'undefined' });
  //  let options = new RequestOptions({ headers: headers });

  //http://5.77.54.44/EinaoTestEnvironment.IPO/Handlers/Approve.ashx
        return this.http.get(this.ipo + 'Handlers/GetRegistration4.ashx')
                    .toPromise()

                    .then(data => {  return data; });

    }


            formDataUpload7() {

     let headers = new Headers({ 'Content-Type': 'undefined' });
  //  let options = new RequestOptions({ headers: headers });

  //http://5.77.54.44/EinaoTestEnvironment.IPO/Handlers/Approve.ashx
        return this.http.get(this.serviceBase+'api/account/GetContent')
                    .toPromise()

                    .then(data => {  return data; });

    }





}
