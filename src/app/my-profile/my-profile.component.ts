import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import {ButtonModule} from 'primeng/primeng';
import {SelectItem} from 'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';

import {DataGridModule} from 'primeng/primeng';


import {MenuItem} from 'primeng/primeng';
import {TieredMenuModule} from 'primeng/primeng';

import {Router} from '@angular/router';
@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
public  items: MenuItem[];
   
private imageurl :string ="assets/image/NoImage.jpg";
  constructor(private router: Router) {

   // console.log(checkfacebook.getFacbookStatus())
   }
//tony
getclass() {



}

getclass2() {



}


getclass3() {



}

getclass4() {



}



getclass5() {



}

getclass6() {



}
  PostAdd(ss) {
   
   // alert("inside2")

   if (ss ==="Profile") {
     
 this.router.navigate(['/Profile/ProfileDetail']);


   }


  else  if (ss ==="Accreditation") {

 this.router.navigate(['/Profile/Accreditation']);

   }

   else  if (ss ==="AddArticle") {

 this.router.navigate(['/Profile/AddArticle']);

   }

    else  if (ss ==="EditContent") {

 this.router.navigate(['/Profile/EditContent']);

   }

    else  if (ss ==="AgentReport") {

 this.router.navigate(['/Profile/AgentReport']);

   }

    else  if (ss ==="CreateRole") {

 this.router.navigate(['/Profile/CreateRole']);

   }


   else  if (ss ==="Reset") {

    this.router.navigate(['/Profile/Reset']);
   
      }
   

  

   else {
     this.router.navigate(['/Profile/ProfileDetail']);
   }

    }

    getRouteAnimation(outlet) {
      return outlet.activatedRouteData.animation
    }
  ngOnInit() {

   





    this.items = [
                    {label: 'Profile', icon: 'fa-user-md',  command: (event) => {
                    this.PostAdd("Profile");
                }} ,
                    {label: 'Agent Accreditation', icon: 'fa-universal-access', command: (event) => {
                    this.PostAdd("Accreditation");
                }}  ,
                {label: 'Reset Password ', icon: 'fa-universal-access', command: (event) => {
                  this.PostAdd("Reset");
              }}  ,

                {
                label: 'Report',
                icon: 'fa-edit',
                items: [
                  {label: 'Agent Report', icon: 'fa-file-o', command: (event) => {
                    this.PostAdd("AgentReport");
                }}
                   
                ]
            }
                   
                      
                 
				
			
                  
                ];
  }

}
