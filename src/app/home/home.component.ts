import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {ButtonModule} from 'primeng/primeng';



import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

import {DropdownModule} from 'primeng/primeng';

import {DataGridModule} from 'primeng/primeng';

import {SelectItem} from 'primeng/primeng';
import {MenuItem} from 'primeng/primeng';

import {Router} from '@angular/router';
import {NgRegisterServiceService} from '../ng-register-service.service';






@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./home.component.css'] 

 
})
export class HomeComponent implements OnInit  {
private myClientId: string = '542177646101-g7hohvsed7416v3fcaamp84cpm0ke933.apps.googleusercontent.com';

images: any[];
showloading :boolean = false;
 msgs: any[] = [];
  msgs2: any[] = [];
  busy: Promise<any>;

userform: FormGroup;
    Cities: SelectItem[] = [];;

    selectedCity : string;
   
private items: MenuItem[];

    ngOnInit() {
       this.showloading = false;
this.images = [];
        this.images.push({source:'assets/Image/xmas_3.jpg', alt:'', title:''});
        this.images.push({source:'assets/Image/xmas_4.jpg', alt:'', title:''});

       
  let emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
     this.userform = this.fb.group({
            'Email': new FormControl('', Validators.compose([Validators.required, Validators.pattern(emailRegex)])),
           
            'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)]))
           
  })



  if (localStorage.getItem('username')!="") {

    let  vtokendate =localStorage.getItem("expirydate")

     let  vtokendate2 = new Date(vtokendate);
    
     let  vtokendate3 = new Date();

     if (vtokendate3 > vtokendate2) {
   // let  tdate =  this.checkfacebook.dates.compare(vtokendate2, vtokendate3);
   //   if (tdate < 0) {
localStorage.setItem('token', "");
localStorage.setItem('expirydate', "");

      localStorage.setItem('username', "");
 this.router.navigate(['/home']);

      }

      else {
this.router.navigate(['/Profile/ProfileDetail']);

      }
  }

  else {
     this.router.navigate(['/home']);
  }


      
  
 }

  constructor(private fb: FormBuilder,private router: Router,private registerapi :NgRegisterServiceService) {
 //localStorage.removeItem("user");
    



       

   }
  title = 'app works!';
date3: Date;



onSubmit(value: string) {
       this.showloading = true;
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Success', detail:'Form Submitted'});
       // this.modal.Email = this.userform.value.email ;
        //this.modal.First_Name = this.userform.value.firstname ;
        //this.modal.Surname = this.userform.value.othername ;
        // this.modal.Password = this.userform.value.password ;


         


  var AgentsData2 = {

            "username": this.userform.value.Email,
            "password": this.userform.value.password


        };

console.log(AgentsData2)
this.busy =  this.registerapi
        .Login(AgentsData2)
        .then((response: any) => {
         // console.log(response)
             this.showloading = false;
         var  ppr = response.json() ;
          if (ppr.error_description) {
this.msgs2 = [];
            this.msgs2.push({severity:'error', summary:'Error', detail:'Invalid Username / Password'});
          }
          else {
localStorage.setItem('token', ppr.access_token);
localStorage.setItem('username', ppr.userName);
 localStorage.setItem('expirydate', ppr.expires);
 

      
this.router.navigateByUrl('/Profile/ProfileDetail');
         
          }
          
           // console.log(response._body);
         //  console.log(ppr)
          //  this.bvisible = true;
          //  alert("success")
           // this.router.navigateByUrl('/');
        })
         .catch((response: any) => {
    this.showloading = false;
        //   alert("error occured") ;
         }
         )
        ;

 
  }


 clickMe() {
   this.router.navigate(['/register']);

 
  }




}
