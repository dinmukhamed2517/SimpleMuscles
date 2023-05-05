import {Component, OnInit} from '@angular/core';
import {LoginService} from "../services/login/login.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  constructor(private loginService : LoginService) {
  }
  logged:boolean = false;
  ngOnInit() {
    this.loginService.isAuthenticated().subscribe((data) =>{
      this.logged = data;
    })
  }
  logout(){
    this.loginService.logout();
  }
}
