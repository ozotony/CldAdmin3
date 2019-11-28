import { Component, OnInit,ViewEncapsulation } from '@angular/core';

import {ButtonModule} from 'primeng/primeng';

import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import {InputTextModule} from 'primeng/primeng';


import {MenubarModule,MenuItem} from 'primeng/primeng';

import { MenuModule} from 'primeng/primeng';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    msgs: any[] = [];
    private items: MenuItem[];
    private myClientId: string = '542177646101-g7hohvsed7416v3fcaamp84cpm0ke933.apps.googleusercontent.com';
    userform: FormGroup;

    submitted: boolean;
    
    genders: any[];
    breadcrumbItems: MenuItem[] = [{label:'Home'}];
    homemenu :MenuItem =   {label: 'Home',  routerLink: ['/']}
 breadcrumb: MenuItem[] = [];
        
    description: string;
   constructor() {
 //localStorage.removeItem("user");





   }

  ngOnInit() {


 
      


}

 clickMe() {

 
  }

onSubmit(value: string) {
       
    }
    
   

}
