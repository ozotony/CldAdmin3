import { Injectable } from '@angular/core';



import {Headers, Http, Response} from '@angular/http';
import {MenuItem} from 'primeng/primeng';

import {Router} from '@angular/router'




@Injectable()
export class CheckFacebookStatusService {
private items: MenuItem[] =[];
public status :string =""

public vpage :string =""

public canshow :boolean=true

   constructor(private router: Router) {
 //localStorage.removeItem("user");
   


   


   }

 getcanshow(){

return this.canshow
  }

  setcanshow(val) {

    this.canshow = val;
  }

  getLoginStatus():Boolean{
    let df =localStorage.getItem('token') ;
 // console.log( this.router.currentInstruction.component.routeName)
   // console.log(location.path())
if ( df ===null) {
  return true;
}

else {

  

  return false;
}

  }

getstatus () {

  return this.status;
}
setValue(kk) {
        this.status =kk;

      //  alert("new value =" + this.status)
    }

        


getPage() {
    return     this.vpage;

      //  alert("new value =" + this.status)
    }
    setPage(kk) {
        this.vpage =kk;

      //  alert("new value =" + this.status)
    }

getloginstatus() {

    if (localStorage.getItem('username')!=null) {

  }

  else {
     this.router.navigate(['/home']);
  }
}
    getValue() {
        return this.status;
    }

     Logout() {

 this.router.navigate(['/home']);
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


    
  

}
