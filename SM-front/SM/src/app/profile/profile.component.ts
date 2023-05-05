import {Component, OnInit} from '@angular/core';
import {Exercise} from "../../models/exercise";
import {FavoriteService} from "../services/favorite/favorite.service";
import {Favorite} from "../../models/Favorite";
import {ExerciseService} from "../services/exercises/exercise.service";
import {UserService} from "../services/user/user.service";
import {User} from "../../models/User";
import {LoginService} from "../services/login/login.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  favorite!: Favorite;
  user_id!:number;
  user!:User;
  favoriteExercises:Exercise[] = []
  logged: boolean = false;
  constructor(private exerciseService:ExerciseService,private userService:UserService,
              private favoriteService: FavoriteService, private loginService:LoginService) {

  }
  ngOnInit() {
    this.loginService.isAuthenticated().subscribe((data) =>{
      this.logged = data;
    })
    if(this.logged){
      this.userService.get_id().subscribe( (data) => {
        this.user_id = data.user_id;
        if(this.user_id){
          this.getFavorite();
        }
      })
    }
  }
  getFavorite(){
    this.favoriteService.getFavorite(this.user_id).subscribe((data) =>{
      this.favorite = data;
      this.user = this.favorite.user
      this.favoriteExercises = this.favorite.exercises;
      })
  }
  remove(exercise_id:number){
    this.favoriteService.removeFromFavorite(exercise_id).subscribe((data) => {
      this.favoriteExercises = this.favoriteExercises.filter((exercise) => exercise.id !== exercise_id);
    })
  }
}

