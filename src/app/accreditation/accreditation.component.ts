import { Component, OnInit } from '@angular/core';
import {NgRegisterServiceService} from '../ng-register-service.service';
import {ConfirmationService} from 'primeng/primeng';
import {CheckFacebookStatusService} from '../check-facebook-status.service';

export interface AgentStatus {
    Xid;
    Agent_Code;
    FirstName;
    SurName;
     Paid_Status;
     Email;
     DateOfBrith;
     CompanyName;
     CompanyAddress;
     ContactPersonPhone;
     ContactPerson;
     AccrediationType;
     xreg_date;
     Certificate;
     Logo;
     Introduction;

}

@Component({
  selector: 'app-accreditation',
  templateUrl: './accreditation.component.html',

  styleUrls: ['./accreditation.component.css']
})
export class AccreditationComponent implements OnInit {
 msgs: any[] = [];
 msgs2: any[] = [];
 AgentPaymentStatus: AgentStatus[] =[];
 AgentPaymentStatus2:AgentStatus ={FirstName:"",Xid:"",SurName:"",Paid_Status:"" ,Agent_Code:"",Email:"",DateOfBrith:"",CompanyName:"",CompanyAddress:"",ContactPerson:"",ContactPersonPhone:"",AccrediationType:"",xreg_date:"",Certificate:"",Logo:"",Introduction:""};
 display: boolean = false;
 showloading :boolean = false;
  showloading2 :boolean = false;
  formData = new FormData();
  busy: Promise<any>;
  constructor(private registerapi :NgRegisterServiceService,private confirmationService: ConfirmationService,private checkfacebook:CheckFacebookStatusService)
   { 

   }

getdata() {
  this.showloading = true;
  this.registerapi
        .GetData()
        .then((response: any) => {
            console.log(response);
         this.AgentPaymentStatus =    response.json();
         console.log("report")
         console.log(this.AgentPaymentStatus)
           // this.bvisible = true;
           this.showloading = false;
        //  this.msgs = [];
          //  this.msgs2.push({severity:'success', summary:'Success', detail:'Registered  Successfully '});
            
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
  ngOnInit() {
     this.checkfacebook.getloginstatus();
    this.getdata();
      this.checkfacebook.setPage("Accreditation") ;
        this.checkfacebook.setcanshow(true)
  }

  Approve(aa) {
this.formData.append("vid", aa.Xid);
this.confirmationService.confirm({
            message: 'Are you sure that you want to perform this action?',
            accept: () => {
              this.showloading2 = true;
                 this.registerapi
        .formDataUpload4(this.formData)
        .then((response: any) => {
           
           this.showloading2 = false;
          
          this.msgs = [];
           this.msgs2.push({severity:'success', summary:'Success', detail:'Update   Successfully '});
            
           // this.router.navigateByUrl('/');
        })
                 .catch((response: any) => {
   // this.showloading = false;
           this.showloading2 = false;
          this.msgs2 = [];
          
         this.msgs2.push({severity:'error', summary:'Error', detail:'Error Occured '});
         }
         );
            }
        });
   }

     Reject(aa) {
this.formData.append("vid", aa.Xid);
this.confirmationService.confirm({
            message: 'Are you sure that you want to perform this action?',
            accept: () => {
              this.showloading2 = true;
                 this.registerapi
        .formDataUpload5(this.formData)
        .then((response: any) => {
           
           this.showloading2 = false;
           
          this.msgs = [];
           this.msgs2.push({severity:'success', summary:'Success', detail:'Reject   Successfully '});
            
           // this.router.navigateByUrl('/');
        })
                 .catch((response: any) => {
   // this.showloading = false;
           this.showloading2 = false;
          this.msgs2 = [];
          
         this.msgs2.push({severity:'error', summary:'Error', detail:'Error Occured '});
         }
         );
            }
        });
   }
  selectCar(aa) {
this.AgentPaymentStatus2 = aa;
console.log("report2")
    console.log(this.AgentPaymentStatus2)
this.display = true;
    
  }
}


