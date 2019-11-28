import { Component, OnInit } from '@angular/core';
import { ApiService } from '../ApiService';
import { RouterLinkActive } from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-payment2',
  templateUrl: './payment2.component.html',
  styleUrls: ['./payment2.component.css']
})
export class Payment2Component implements OnInit {
  busy: Promise<any>;
  constructor(private registerapi :ApiService,private router: Router) { }

  go() {
    this.router.navigateByUrl('/home');
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
            .GetData2(formData)
            .then((response: any) => {
    
              console.log(response.json())
    
    
              var mapForm = document.createElement("form");
        mapForm.target = "Map";
        mapForm.method = "POST"; // or "post" if appropriate
        mapForm.action = "http://45.40.139.163/EinaoTestEnvironment.Patent/admin/pt/registrar_unit/pt_profile.aspx";
    
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
            .GetData2(formData)
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
            .GetData2(formData)
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
            .GetData2(formData)
            .then((response: any) => {
    
              console.log(response.json())
    
    
              var mapForm = document.createElement("form");
        mapForm.target = "Map";
        mapForm.method = "POST"; // or "post" if appropriate
        mapForm.action = "http://45.40.139.163/EinaoTestEnvironment.Patent/admin/pt/examiners_unit/profile.aspx";
    
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
            .GetData2(formData)
            .then((response: any) => {
    
              console.log(response.json())
    
    
              var mapForm = document.createElement("form");
        mapForm.target = "Map";
        mapForm.method = "POST"; // or "post" if appropriate
        mapForm.action = "http://45.40.139.163/EinaoTestEnvironment.Patent/admin/pt/search_unit/profile.aspx ";
    
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
        .GetData2(formData)
        .then((response: any) => {

          console.log(response.json())


          var mapForm = document.createElement("form");
    mapForm.target = "Map";
    mapForm.method = "POST"; // or "post" if appropriate
    mapForm.action = "http://45.40.139.163/EinaoTestEnvironment.Patent/admin/pt/verification_unit/profile.aspx";

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
