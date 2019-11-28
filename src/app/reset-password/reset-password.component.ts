import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import {NgRegisterServiceService} from '../ng-register-service.service';
import {Http} from '@angular/http';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';

import {Router} from '@angular/router';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  oldpassword: FormControl;
  msgs: any[] = [];
  msgs2: any[] = [];
  newpassword: FormControl;
  formData = new FormData();
 confirmpassword: FormControl;
   userform: FormGroup;
    submitted: boolean;
    busy: Promise<any>;

  constructor(private fb: FormBuilder,private registerapi :NgRegisterServiceService,private router: Router,private confirmationService: ConfirmationService) { }
  onSubmit() {
   // this.userform.value.email
var iserror = false;
this.msgs2 = [];

this.confirmationService.confirm({
  message: 'Are you sure that you want to perform this action?',
  accept: () => {
   
    var AgentsData = {

      email: this.userform.value.oldpassword,
      xpass: "",
      request: 'vlogin3'
  
  };
  
  this.formData.append("vv", JSON.stringify(AgentsData));
  
  this.busy =  this.registerapi
  .ResetPassword(AgentsData)
  .then((response: any) => {
  
    alert("Password Reset Successfully,New password sent to your email ")
   // this.router.navigateByUrl('/login');
  
  })
  .catch((response: any) => {
    alert("Error Occured ")
  
  })
  }
});



  }
  ngOnInit() {
  //  this.CheckStatus.setPage("ChangePassword");
   
   
   
    this.oldpassword = new FormControl('', [
      Validators.required
     
    ]);
    
  
    this.userform = new FormGroup({
     
      oldpassword: this.oldpassword
   
     
    });
  }

}
