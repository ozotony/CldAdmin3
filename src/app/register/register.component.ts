
import { Component, OnInit,ViewEncapsulation} from '@angular/core';

import {ButtonModule} from 'primeng/primeng';

import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import {InputTextModule} from 'primeng/primeng';

import {TabViewModule} from 'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';
import {SelectItem} from 'primeng/primeng';
import {MenubarModule,MenuItem} from 'primeng/primeng';
import {NgRegisterServiceService} from '../ng-register-service.service';
import {Http} from '@angular/http';
import {BreadcrumbModule} from 'primeng/primeng';


import {Router} from '@angular/router';
interface IModal {
    Email: string;
    First_Name: string;
    Surname: string;
   Password: string;
   
   
 }
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
    encapsulation: ViewEncapsulation.None,
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {


 msgs: any[] = [];
 msgs2: any[] = [];
 busy: Promise<any>;
 showloading :boolean = false;
public editorOptions = {
    placeholder: "insert content..."
  };
vemail:string =""
 modal: IModal= {'Email':"",'First_Name':"",'Surname':"",'Password':""};
 formData = new FormData();

    private myClientId: string = '542177646101-g7hohvsed7416v3fcaamp84cpm0ke933.apps.googleusercontent.com';
    userform: FormGroup;
    
    submitted: boolean;
     homemenu:MenuItem =   {label: 'Home',  routerLink: ['/']}
   breadcrumb2: MenuItem[] = [];
    
    genders: SelectItem[] = [];;
    Cities: SelectItem[] = [];;
    bvisible :Boolean = true;
    selectedGender: string;
    selectedCity : string;
        
    description: string;

  constructor(private fb: FormBuilder,private registerapi :NgRegisterServiceService,private router: Router) { 



       this.genders.push({label:'Select Gender', value:null});
       this.genders.push({label:'Male', value: 'Male'});
        this.genders.push({label:'Female', value: 'Female'});


        this.Cities.push({label:'Select City', value: null});
        this.Cities.push({label:'Lekki', value: 'Lekki'});
        this.Cities.push({label:'Ikoyi', value: 'Ikoyi'});
         this.Cities.push({label:'Shomolu', value: 'Shomolu'});

  }


  ngOnInit() {
let emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
     this.userform = this.fb.group({
            'firstname': new FormControl('', Validators.required),
             'othername': new FormControl('', Validators.required),
             
            
            'email': new FormControl('', Validators.compose([Validators.required, Validators.pattern(emailRegex)])),
            'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)]))
           
  })
this.breadcrumb2.push({label:'User Registration'});



}

getemail(dd) {
 //this.vemail ="aa@yahoo.com"
  var data = {
            property1: dd
        };
        this.busy =    this.registerapi
        .formDataUpload14(data)
        .then((response: any) => {
        //  alert(response)
      //  alert(response.json())
        if (parseInt(response.json()) > 0) {

          alert("email already Exist")

          this.vemail =""
        }
         //   var  ppr = response.json() ;
          //  this.vdisplay =""
           // this.vdisplay =  ppr.NewsContent;
        //    ppr.NewsContent
           // console.log(ppr);
          
            
           // this.router.navigateByUrl('/');
        })
                 .catch((response: any) => {
   // this.showloading = false;
  
         alert("error")
         }
         );
 // alert(dd)
}

onSubmit(value: string) {
        this.submitted = true;
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Success', detail:'Form Submitted'});
        console.log("email =" + this.userform.value.email)
        this.modal.Email = this.userform.value.email ;
        this.modal.First_Name = this.userform.value.firstname ;
        this.modal.Surname = this.userform.value.othername ;
         this.modal.Password = this.userform.value.password ;
console.log ( this.modal)

         
this.formData.append("RegisterBindingModel", JSON.stringify(this.modal));
this.showloading = true;
this.busy =  this.registerapi
        .formDataUpload(this.formData)
        .then((response: any) => {
            console.log(response);
            this.bvisible = true;
            this.showloading = false;
          this.msgs = [];
            this.msgs2.push({severity:'success', summary:'Success', detail:'Registered  Successfully '});
            
           // this.router.navigateByUrl('/');
        })
                 .catch((response: any) => {
   // this.showloading = false;
           this.showloading = false;
          this.msgs2 = [];
          
          this.msgs2.push({severity:'error', summary:'Error', detail:'Error Occured '});
         }
         );

 
  }


   clickMe() {
   this.router.navigate(['/']);

 
  }
    
    get diagnostic() { return JSON.stringify(this.userform.value); }


}
