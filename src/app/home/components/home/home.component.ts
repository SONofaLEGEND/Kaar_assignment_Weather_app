import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private cookieService:CookieService, private router:Router){}
  ngOnInit(): void {
    if(this.cookieService.get('email')){
      this.Loggedin = true;
    }
    else
    {
      this.Loggedin = false;
    }
  }
  sidenavOpen:boolean = false;
  Loggedin!:boolean;

  
  sidenav(){
    this.sidenavOpen = !this.sidenavOpen;
  }

}
