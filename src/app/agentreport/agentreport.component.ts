import { Component, OnInit } from '@angular/core';
import {CheckFacebookStatusService} from '../check-facebook-status.service';

import {NgRegisterServiceService} from '../ng-register-service.service';

export interface AgentStatus {
    Xid;
    Agent_Code;
    FirstName;
    SurName;
     Paid_Status;
     Sys_ID;
}


@Component({
  selector: 'app-agentreport',
  templateUrl: './agentreport.component.html',
  styleUrls: ['./agentreport.component.css']
})
export class AgentreportComponent implements OnInit {
  
	AgentPaymentStatus2:AgentStatus[] =[];
   showloading :boolean = false;
  constructor(private checkfacebook:CheckFacebookStatusService,private registerapi :NgRegisterServiceService) { }

  ngOnInit() {

    this.showloading = true;
	    this.registerapi
        .formDataUpload6()
        .then((response: any) => {
            this.AgentPaymentStatus2 =    response.json();
         console.log(this.AgentPaymentStatus2)
         this.showloading = false;
        //  this.showloading = false;
         // this.msgs = [];
          //  this.msgs.push({severity:'success', summary:'Success', detail:'Registered  Successfully '});
          
            
           // this.router.navigateByUrl('/');
        })
                 .catch((response: any) => {
   // this.showloading = false;
   this.showloading = false;
         alert("error")
         }
         );
	   this.checkfacebook.setPage("Report") ;
	    this.checkfacebook.setcanshow(true)
  }

}
