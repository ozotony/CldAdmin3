import { Component, OnInit } from '@angular/core';
import { ApiService } from '../ApiService';
import { RouterLinkActive } from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  busy: Promise<any>;
  constructor(private registerapi :ApiService,private router: Router) { }
  go() {
    this.router.navigateByUrl('/home');
  }

  detail9(){
    var formData = new FormData();
    
    var ds =localStorage.getItem('username');
    var ds2 =localStorage.getItem('firstname');
    
        var AgentsData = {
    
    
          name: ds2,
          Email:ds
    
    
    
        };
    
        formData.append("vv", JSON.stringify(AgentsData));
    
        this.busy = this.registerapi
            .GetData(formData)
            .then((response: any) => {
    
              console.log(response.json())
    
    
              var mapForm = document.createElement("form");
        mapForm.target = "Map";
        mapForm.method = "POST"; // or "post" if appropriate
        mapForm.action = "http://45.40.139.163/EinaoTestEnvironment.CLD/admin/tm/opposition_unit/profile.aspx";
    
        var mapInput = document.createElement("input");
        mapInput.hidden =true;
        mapInput.type = "text";
        mapInput.name = "adminx";
        mapInput.value = response.json();
        mapForm.appendChild(mapInput);
    
        document.body.appendChild(mapForm);
    
        var map = window.open("", "Map", "status=0,title=0,height=600,width=1000,scrollbars=1");
    
    if (map) {
        mapForm.submit();
    } else {
        alert('You must allow popups for this map to work.');
    }
    
             
             
          //  this.modal2= response.json() ;
              
            })
                     .catch((response: any) => {
     
    console.log(response.statusText);
    
    //this.OpenWindowWithPost2("http://localhost:49703/admin/tm/verification_unit/profile.aspx", "width=1000, height=600, left=100, top=100, resizable=yes, scrollbars=yes", "NewFile");
    
            
             }
             );


  }

  detail8(){
    var formData = new FormData();
    
    var ds =localStorage.getItem('username');
    var ds2 =localStorage.getItem('firstname');
    
        var AgentsData = {
    
    
          name: ds2,
          Email:ds
    
    
    
        };
    
        formData.append("vv", JSON.stringify(AgentsData));
    
        this.busy = this.registerapi
            .GetData(formData)
            .then((response: any) => {
    
              console.log(response.json())
    
    
              var mapForm = document.createElement("form");
        mapForm.target = "Map";
        mapForm.method = "POST"; // or "post" if appropriate
        mapForm.action = "http://45.40.139.163/EinaoTestEnvironment.CLD/admin/tm/certification_unit/profile.aspx";
    
        var mapInput = document.createElement("input");
        mapInput.hidden =true;
        mapInput.type = "text";
        mapInput.name = "adminx";
        mapInput.value = response.json();
        mapForm.appendChild(mapInput);
    
        document.body.appendChild(mapForm);
    
        var map = window.open("", "Map", "status=0,title=0,height=600,width=1000,scrollbars=1");
    
    if (map) {
        mapForm.submit();
    } else {
        alert('You must allow popups for this map to work.');
    }
    
             
             
          //  this.modal2= response.json() ;
              
            })
                     .catch((response: any) => {
     
    console.log(response.statusText);
    
    //this.OpenWindowWithPost2("http://localhost:49703/admin/tm/verification_unit/profile.aspx", "width=1000, height=600, left=100, top=100, resizable=yes, scrollbars=yes", "NewFile");
    
            
             }
             );


  }

  detail7(){
    var formData = new FormData();
    
    var ds =localStorage.getItem('username');
    var ds2 =localStorage.getItem('firstname');
    
        var AgentsData = {
    
    
          name: ds2,
          Email:ds
    
    
    
        };
    
        formData.append("vv", JSON.stringify(AgentsData));
    
        this.busy = this.registerapi
            .GetData(formData)
            .then((response: any) => {
    
              console.log(response.json())
    
    
              var mapForm = document.createElement("form");
        mapForm.target = "Map";
        mapForm.method = "POST"; // or "post" if appropriate
        mapForm.action = "http://45.40.139.163/EinaoTestEnvironment.CLD/admin/tm/search_unit2/profile.aspx";
    
        var mapInput = document.createElement("input");
        mapInput.hidden =true;
        mapInput.type = "text";
        mapInput.name = "adminx";
        mapInput.value = response.json();
        mapForm.appendChild(mapInput);
    
        document.body.appendChild(mapForm);
    
        var map = window.open("", "Map", "status=0,title=0,height=600,width=1000,scrollbars=1");
    
    if (map) {
        mapForm.submit();
    } else {
        alert('You must allow popups for this map to work.');
    }
    
             
             
          //  this.modal2= response.json() ;
              
            })
                     .catch((response: any) => {
     
    console.log(response.statusText);
    
    //this.OpenWindowWithPost2("http://localhost:49703/admin/tm/verification_unit/profile.aspx", "width=1000, height=600, left=100, top=100, resizable=yes, scrollbars=yes", "NewFile");
    
            
             }
             );


  }

  detail6(){
    var formData = new FormData();
    
    var ds =localStorage.getItem('username');
    var ds2 =localStorage.getItem('firstname');
    
        var AgentsData = {
    
    
          name: ds2,
          Email:ds
    
    
    
        };
    
        formData.append("vv", JSON.stringify(AgentsData));
    
        this.busy = this.registerapi
            .GetData(formData)
            .then((response: any) => {
    
              console.log(response.json())
    
    
              var mapForm = document.createElement("form");
        mapForm.target = "Map";
        mapForm.method = "POST"; // or "post" if appropriate
        mapForm.action = "http://45.40.139.163/EinaoTestEnvironment.CLD/admin/tm/registrar_unit/tm_profile.aspx";
    
        var mapInput = document.createElement("input");
        mapInput.hidden =true;
        mapInput.type = "text";
        mapInput.name = "adminx";
        mapInput.value = response.json();
        mapForm.appendChild(mapInput);
    
        document.body.appendChild(mapForm);
    
        var map = window.open("", "Map", "status=0,title=0,height=600,width=1000,scrollbars=1");
    
    if (map) {
        mapForm.submit();
    } else {
        alert('You must allow popups for this map to work.');
    }
    
             
             
          //  this.modal2= response.json() ;
              
            })
                     .catch((response: any) => {
     
    console.log(response.statusText);
    
    //this.OpenWindowWithPost2("http://localhost:49703/admin/tm/verification_unit/profile.aspx", "width=1000, height=600, left=100, top=100, resizable=yes, scrollbars=yes", "NewFile");
    
            
             }
             );


  }

  detail5(){
    var formData = new FormData();
    
    var ds =localStorage.getItem('username');
    var ds2 =localStorage.getItem('firstname');
    
        var AgentsData = {
    
    
          name: ds2,
          Email:ds
    
    
    
        };
    
        formData.append("vv", JSON.stringify(AgentsData));
    
        this.busy = this.registerapi
            .GetData(formData)
            .then((response: any) => {
    
              console.log(response.json())
    
    
              var mapForm = document.createElement("form");
        mapForm.target = "Map";
        mapForm.method = "POST"; // or "post" if appropriate
        mapForm.action = "http://45.40.139.163/EinaoTestEnvironment.CLD/admin/tm/acceptance_unit/profile.aspx";
    
        var mapInput = document.createElement("input");
        mapInput.hidden =true;
        mapInput.type = "text";
        mapInput.name = "adminx";
        mapInput.value = response.json();
        mapForm.appendChild(mapInput);
    
        document.body.appendChild(mapForm);
    
        var map = window.open("", "Map", "status=0,title=0,height=600,width=1000,scrollbars=1");
    
    if (map) {
        mapForm.submit();
    } else {
        alert('You must allow popups for this map to work.');
    }
    
             
             
          //  this.modal2= response.json() ;
              
            })
                     .catch((response: any) => {
     
    console.log(response.statusText);
    
    //this.OpenWindowWithPost2("http://localhost:49703/admin/tm/verification_unit/profile.aspx", "width=1000, height=600, left=100, top=100, resizable=yes, scrollbars=yes", "NewFile");
    
            
             }
             );


  }

  detail4(){
    var formData = new FormData();
    
    var ds =localStorage.getItem('username');
    var ds2 =localStorage.getItem('firstname');
    
        var AgentsData = {
    
    
          name: ds2,
          Email:ds
    
    
    
        };
    
        formData.append("vv", JSON.stringify(AgentsData));
    
        this.busy = this.registerapi
            .GetData(formData)
            .then((response: any) => {
    
              console.log(response.json())
    
    
              var mapForm = document.createElement("form");
        mapForm.target = "Map";
        mapForm.method = "POST"; // or "post" if appropriate
        mapForm.action = "http://45.40.139.163/EinaoTestEnvironment.CLD/admin/tm/publication_unit/profile.aspx";
    
        var mapInput = document.createElement("input");
        mapInput.hidden =true;
        mapInput.type = "text";
        mapInput.name = "adminx";
        mapInput.value = response.json();
        mapForm.appendChild(mapInput);
    
        document.body.appendChild(mapForm);
    
        var map = window.open("", "Map", "status=0,title=0,height=600,width=1000,scrollbars=1");
    
    if (map) {
        mapForm.submit();
    } else {
        alert('You must allow popups for this map to work.');
    }
    
             
             
          //  this.modal2= response.json() ;
              
            })
                     .catch((response: any) => {
     
    console.log(response.statusText);
    
    //this.OpenWindowWithPost2("http://localhost:49703/admin/tm/verification_unit/profile.aspx", "width=1000, height=600, left=100, top=100, resizable=yes, scrollbars=yes", "NewFile");
    
            
             }
             );


  }

  detail3(){
    var formData = new FormData();
    
    var ds =localStorage.getItem('username');
    var ds2 =localStorage.getItem('firstname');
    
        var AgentsData = {
    
    
          name: ds2,
          Email:ds
    
    
    
        };
    
        formData.append("vv", JSON.stringify(AgentsData));
    
        this.busy = this.registerapi
            .GetData(formData)
            .then((response: any) => {
    
              console.log(response.json())
    
    
              var mapForm = document.createElement("form");
        mapForm.target = "Map";
        mapForm.method = "POST"; // or "post" if appropriate
        mapForm.action = "http://45.40.139.163/EinaoTestEnvironment.CLD/admin/tm/examiners_unit/profile.aspx";
    
        var mapInput = document.createElement("input");
        mapInput.hidden =true;
        mapInput.type = "text";
        mapInput.name = "adminx";
        mapInput.value = response.json();
        mapForm.appendChild(mapInput);
    
        document.body.appendChild(mapForm);
    
        var map = window.open("", "Map", "status=0,title=0,height=600,width=1000,scrollbars=1");
    
    if (map) {
        mapForm.submit();
    } else {
        alert('You must allow popups for this map to work.');
    }
    
             
             
          //  this.modal2= response.json() ;
              
            })
                     .catch((response: any) => {
     
    console.log(response.statusText);
    
    //this.OpenWindowWithPost2("http://localhost:49703/admin/tm/verification_unit/profile.aspx", "width=1000, height=600, left=100, top=100, resizable=yes, scrollbars=yes", "NewFile");
    
            
             }
             );

  }

  detail2(){
    var formData = new FormData();
    
    var ds =localStorage.getItem('username');
    var ds2 =localStorage.getItem('firstname');
    
        var AgentsData = {
    
    
          name: ds2,
          Email:ds
    
    
    
        };
    
        formData.append("vv", JSON.stringify(AgentsData));
    
        this.busy = this.registerapi
            .GetData(formData)
            .then((response: any) => {
    
              console.log(response.json())
    
    
              var mapForm = document.createElement("form");
        mapForm.target = "Map";
        mapForm.method = "POST"; // or "post" if appropriate
        mapForm.action = "http://45.40.139.163/EinaoTestEnvironment.CLD/admin/tm/search_unit/profile.aspx";
    
        var mapInput = document.createElement("input");
        mapInput.hidden =true;
        mapInput.type = "text";
        mapInput.name = "adminx";
        mapInput.value = response.json();
        mapForm.appendChild(mapInput);
    
        document.body.appendChild(mapForm);
    
        var map = window.open("", "Map", "status=0,title=0,height=600,width=1000,scrollbars=1");
    
    if (map) {
        mapForm.submit();
    } else {
        alert('You must allow popups for this map to work.');
    }
    
             
             
          //  this.modal2= response.json() ;
              
            })
                     .catch((response: any) => {
     
    console.log(response.statusText);
    
    //this.OpenWindowWithPost2("http://localhost:49703/admin/tm/verification_unit/profile.aspx", "width=1000, height=600, left=100, top=100, resizable=yes, scrollbars=yes", "NewFile");
    
            
             }
             );

  }

  detail() {
    var formData = new FormData();
    
var ds =localStorage.getItem('username');
var ds2 =localStorage.getItem('firstname');

    var AgentsData = {


      name: ds2,
      Email:ds



    };

    formData.append("vv", JSON.stringify(AgentsData));

    this.busy = this.registerapi
        .GetData(formData)
        .then((response: any) => {

          console.log(response.json())


          var mapForm = document.createElement("form");
    mapForm.target = "Map";
    mapForm.method = "POST"; // or "post" if appropriate
    mapForm.action = "http://45.40.139.163/EinaoTestEnvironment.CLD/admin/tm/verification_unit/profile.aspx";

    var mapInput = document.createElement("input");
    mapInput.hidden =true;
    mapInput.type = "text";
    mapInput.name = "adminx";
    mapInput.value = response.json();
    mapForm.appendChild(mapInput);

    document.body.appendChild(mapForm);

    var map = window.open("", "Map", "status=0,title=0,height=600,width=1000,scrollbars=1");

if (map) {
    mapForm.submit();
} else {
    alert('You must allow popups for this map to work.');
}

         
         
      //  this.modal2= response.json() ;
          
        })
                 .catch((response: any) => {
 
console.log(response.statusText);

//this.OpenWindowWithPost2("http://localhost:49703/admin/tm/verification_unit/profile.aspx", "width=1000, height=600, left=100, top=100, resizable=yes, scrollbars=yes", "NewFile");

        
         }
         );
  }
  ngOnInit() {
  }

}
