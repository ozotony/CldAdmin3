import { Component, OnInit ,ViewChild } from '@angular/core';
import {ButtonModule} from 'primeng/primeng';
import {SelectItem} from 'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';

import {DataGridModule} from 'primeng/primeng';


import {MenuItem} from 'primeng/primeng';
import {TieredMenuModule} from 'primeng/primeng';


import {NgRegisterServiceService} from '../ng-register-service.service';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';

export interface AgentStatus {
    Xid;
    Agent_Code;
    FirstName;
    SurName;
     Paid_Status;
     Sys_ID;
}


@Component({
  selector: 'app-my-profiledetail',
  templateUrl: './my-profiledetail.component.html',
  styleUrls: ['./my-profiledetail.component.css']
})
export class MyProfiledetailComponent implements OnInit {
private items: MenuItem[];
    
	AgentPaymentStatus2:AgentStatus[] =[];
   showloading :boolean = false;
   display: boolean = false;
   vid :string;
   vcode :string;
   @ViewChild("fileInput") fileInput;
   busy: Promise<any>;
  constructor(private registerapi :NgRegisterServiceService,private confirmationService: ConfirmationService) { }

getimage(dd) {

	if (dd =="") {

		return "http://www.novelupdates.com/img/noimagefound.jpg"
	}

  else {
    return "http://ipo.cldng.com/"+dd
  }
}

onSubmit3() {
  var formData = new FormData();
  let fi = this.fileInput.nativeElement;
 
 if (fi.files && fi.files[0]) {
        let fileToUpload = fi.files[0];
     //   alert(fi.files[0].size/1000000)
        //if ( (fi.files[0].size/1000000) > 3 ) {

        //  alert("File Size must not exceed 3 mb")
       //   return ;
       // }
        
     //   alert((fi.files[0].size/1000000))

        formData.append("FileUpload3", fileToUpload);


        
        var AgentsData = {


          xid: this.vid
  



      };

      formData.append("vv", JSON.stringify(AgentsData));

      this.showloading = true;
      this.registerapi
        .UpdateAgent(formData)
        .then((response: any) => {
          //  this.AgentPaymentStatus2 =    response.json();

          this.registerapi
          .formDataUpload6()
          .then((response: any) => {
              this.AgentPaymentStatus2 =    response.json();
           console.log(this.AgentPaymentStatus2)
           this.showloading = false;
           this.display = false;
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
       //  console.log( response.json())
       

        })
                 .catch((response: any) => {
   // this.showloading = false;
   this.showloading = false;
         alert("error")
         }
         );

 }
}

onSubmit2(kk) {
//console.log(kk)
this.vid = kk.xid;
//console.log(kk)
alert(kk.xid)
this.vcode  = kk.Firstname + "-" + kk.Sys_ID ;

var formData = new FormData();
this.confirmationService.confirm({
  message: 'Are you sure that you want to perform this action?',
  accept: () => {

      
    var AgentsData = {


      xid: kk.xid




  };

  formData.append("vv", JSON.stringify(AgentsData));

  this.showloading = true;
  this.registerapi
    .UpdateAgent2(formData)
    .then((response: any) => {
      //  this.AgentPaymentStatus2 =    response.json();

      this.registerapi
      .formDataUpload6()
      .then((response: any) => {
          this.AgentPaymentStatus2 =    response.json();
       console.log(this.AgentPaymentStatus2)
       this.showloading = false;
       this.display = false;
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
   //  console.log( response.json())
   

    })
             .catch((response: any) => {
// this.showloading = false;
this.showloading = false;
     alert("error")
     }
     );
}
});


//this.display = true;





}



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
	 
 


  }

}
