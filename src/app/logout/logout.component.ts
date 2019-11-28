import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

    localStorage.setItem('token', "");
localStorage.setItem('username', "");
localStorage.setItem('expirydate', "");
localStorage.setItem('firstname', "");
this.router.navigateByUrl('/home');
  }

}
