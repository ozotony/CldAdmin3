import { Injectable } from '@angular/core';
import { Headers, Http, Response,RequestOptions } from '@angular/http';
import {EventEmitter} from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class ApiService {
  navchange: EventEmitter<string> = new EventEmitter();
  navchange2: EventEmitter<string> = new EventEmitter();
  public islogin:Boolean;
  public count22:string; 
  public count33:string; 

  constructor(private http: Http) { }

  VChangeEvent(number) {
    this.navchange.emit(number);
  }

  VChangeEvent2(number) {
    this.navchange2.emit(number);
  }

  getNavChangeEmitter() {
    return this.navchange;
  }

  getNavChangeEmitter2() {
    return this.navchange2;
  }

 public  SetCount(dd) {
this.count22 = dd;

  }

  public  SetCount2(dd) {
    this.count33 = dd;
    
      }


  public  GetCount() {
  return   this.count22;
    
      }

      
  public  GetCount2() {
    return   this.count33;
      
        }

  CheckStatus() {
    var df2  = "aa";
  // var df2 =  localStorage.getItem('user')
 
    
 df2 =  localStorage.getItem('user')

 if(df2 !=null) {
  console.log(df2)
  console.log("is not null")
   return true;
 }
 
 else {
  console.log(df2)
  console.log("is null")
    return false;

  
  
 }


  


  }

  GetData(formData: any) {
     
    // http://localhost:49703
     
    return this.http.post('http://tm.cldng.com/Handlers/LoginCheck.ashx', formData)
                .toPromise()
              
                .then(data => {  return data; });

}

GetDailyReport(formData: any) {
     
  // http://localhost:49703
   
  return this.http.post('http://tm.cldng.com/Handlers/ApplicationOfficer.ashx', formData)
              .toPromise()
            
              .then(data => {  return data; });

}

GetDailyReport2(formData: any) {
     
  // http://localhost:49703
   
  return this.http.post('http://pt.cldng.com/Handlers/ApplicationOfficer.ashx', formData)
              .toPromise()
            
              .then(data => {  return data; });

}


GetDailyReport3(formData: any) {
     
  // http://localhost:49703
   
  return this.http.post('http://ds.cldng.com/Handlers/ApplicationOfficer.ashx', formData)
              .toPromise()
            
              .then(data => {  return data; });

}


GetPaymentTrademark() {
     
  // http://localhost:49703
   
  return this.http.get('http://tm.cldng.com/Handlers/Paymenthandler.ashx')
              .toPromise()
            
              .then(data => {  return data; });

}

GetData2(formData: any) {
     
  // http://localhost:55482
  //http://45.40.139.163/EinaoTestEnvironment.Patent
   
  return this.http.post('http://pt.cldng.com/Handlers/LoginCheck.ashx', formData)
              .toPromise()
            
              .then(data => {  return data; });

}



  GetEmail(pp:string ) {
    var data = {
      property1: pp
     
  };
 return this.http.get('http://5.77.54.44/NewTrademark/api/account/getEmails', { params: data }).toPromise()
 
   .then(data => {  return data; });

  }



  getLoginStatus():Boolean{
        
    var  df2 =localStorage.getItem('token') ;

    

  
 // console.log( this.router.currentInstruction.component.routeName)
   // console.log(location.path())
if ( df2 ==="" || df2 ===null) {
 // console.log("true")
  // console.log(df2)
  return false;
}

else {

  // console.log("false")
//console.log(df2)
  return true;
}

  }
  GetAgentRole(pp:string ,pp2 :string) {
    var data = {
      property1: pp,
      property2: pp2
  };
 return this.http.get('http://5.77.54.44/NewTrademark/api/account/getAgentRole2', { params: data }).toPromise()
 
   .then(data => {  return data; });

  }
  
  formDataUpload(formData: FormData) {
   
    //http://localhost:53452
   // http://5.77.54.44/EnterpriseLogin/api/account/register2
     
    return this.http.post('http://5.77.54.44/EnterpriseLogin/api/account/register2', formData)
                .toPromise()
              
                .then(data => {  return data; });

}

 Login(formData: any) {
     
     
        return this.http.post('http://5.77.54.44/EnterpriseLogin/api/account/GetLoginToken2', formData)
                    .toPromise()
                  
                    .then(data => {  return data; });

    }




















}