import { Component, OnInit } from '@angular/core';
import {TabsModule} from "ng2-tabs";
import { ApiService } from '../ApiService';
import { SortEvent } from 'primeng/components/common/sortevent';
@Component({
  selector: 'app-daily-report',
  templateUrl: './daily-report.component.html',
  styleUrls: ['./daily-report.component.css']
})
export class DailyReportComponent implements OnInit {
  value:string ;
  value2:string ;

  value3:string ;
  value4:string ;
  value5:string ;
  value6:string ;
  busy: Promise<any>;
  AgentPaymentStatus2:any[] 
  AgentPaymentStatus3:any[] 
  AgentPaymentStatus4:any[] 
  cols: any[];
  constructor(private registerapi :ApiService) { }
  getval() {
   // alert("inside")

   var formData = new FormData();
 
   
       var AgentsData = {
   
   
        startdate: this.value,
        enddate:this.value2
   
   
   
       };

       formData.append("vv", JSON.stringify(AgentsData));
    
       this.busy = this.registerapi
           .GetDailyReport(formData)
           .then((response: any) => {
   
             console.log(response.json())

           
              // console.log(response)
              this.AgentPaymentStatus2 = response.json();
                
              var  ppr = response.json() ;
              
              
           
             })
              .catch((response: any) => {
           
             //   alert("error occured") ;
              }
              )
   
  }

  getval2() {
    // alert("inside")
 
    var formData = new FormData();
  
    
        var AgentsData = {
    
    
         startdate: this.value3,
         enddate:this.value4
    
    
    
        };
 
        formData.append("vv", JSON.stringify(AgentsData));
     
        this.busy = this.registerapi
            .GetDailyReport2(formData)
            .then((response: any) => {
    
              console.log(response.json())
 
            
               // console.log(response)
               this.AgentPaymentStatus3 = response.json();
                 
               var  ppr = response.json() ;
               
               
            
              })
               .catch((response: any) => {
            
              //   alert("error occured") ;
               }
               )
    
   }

   getval3() {
    // alert("inside")
 
    var formData = new FormData();
  
    
        var AgentsData = {
    
    
         startdate: this.value5,
         enddate:this.value6
    
    
    
        };
 
        formData.append("vv", JSON.stringify(AgentsData));
     
        this.busy = this.registerapi
            .GetDailyReport3(formData)
            .then((response: any) => {
    
              console.log(response.json())
 
            
               // console.log(response)
               this.AgentPaymentStatus4 = response.json();
                 
               var  ppr = response.json() ;
               
               
            
              })
               .catch((response: any) => {
            
              //   alert("error occured") ;
               }
               )
    
   }
  ngOnInit() {

    this.cols = [
      { field: 'sn', header: 'Sn' },
      { field: 'Validationid', header: 'Application Id' },
      { field: 'data_status', header: 'Application Location' },
      { field: 'xname', header: 'Officer' } ,
      { field: 'reg_date', header: 'Date' }
  ];
  }

}
