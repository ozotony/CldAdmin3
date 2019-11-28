import { Component, OnInit } from '@angular/core';
import { ApiService } from '../ApiService';
import { RouterLinkActive } from '@angular/router';
import {Router} from '@angular/router';

export interface AgentStatus {
  transID;
  xname;
  xdesc;
 
}

@Component({
  selector: 'app-payment-trademark',
  templateUrl: './payment-trademark.component.html',
  styleUrls: ['./payment-trademark.component.css']
})
export class PaymentTrademarkComponent implements OnInit {
  busy: Promise<any>;
  AgentPaymentStatus2:AgentStatus[] =[];
  constructor(private registerapi :ApiService,private router: Router) { }

  go() {
    this.router.navigateByUrl('/home');
  }

  ck() {
    
  }
  ngOnInit() {

    this.busy = this.registerapi
  .GetPaymentTrademark()
  .then((response: any) => {
   // console.log(response)
   this.AgentPaymentStatus2 = response.json();
     
   var  ppr = response.json() ;
   
   

  })
   .catch((response: any) => {

  //   alert("error occured") ;
   }
   )
  }

}
