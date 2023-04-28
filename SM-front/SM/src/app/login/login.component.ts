import {Component, OnInit} from '@angular/core';
import {LoginService} from "../services/login/login.service";
import {CategoryService} from "../services/category/category.service";
import {Location} from "@angular/common";
import {Router} from "@angular/router";
import {FavoriteService} from "../services/favorite/favorite.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  logged:boolean = false;
  username:string = '';
  password:string = '';

  constructor(private loginService: LoginService, private router:Router, private favoriteService: FavoriteService) {
  }
  ngOnInit():void {
    const token = localStorage.getItem('token')
    if(token){
      this.logged = true;
    }
  }
  logIn(){
    this.loginService.login(this.username, this.password).subscribe((data) =>{
      localStorage.setItem('token',data.token);
      this.username = '';
      this.password = '';
      if(localStorage.getItem('token')){
      }
        this.router.navigate(['/categories'])
        this.logged = true
    })
  }
}
