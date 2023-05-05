import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ExerciseService} from "../services/exercises/exercise.service";
import {Exercise} from "../../models/exercise";
import {LoginService} from "../services/login/login.service";
import {FavoriteService} from "../services/favorite/favorite.service";

@Component({
  selector: 'app-exercise-details',
  templateUrl: './exercise-details.component.html',
  styleUrls: ['./exercise-details.component.css']
})
export class ExerciseDetailsComponent implements OnInit{
  exercise!:Exercise;
  logged:boolean = false;
  constructor(private route:ActivatedRoute, private exerciseService: ExerciseService,
              private loginService:LoginService, private favoriteService:FavoriteService) {
  }
  ngOnInit():void{
    this.loginService.isAuthenticated().subscribe((data)=> {
      this.logged = data;
    })
    this.getExercise();
  }
  getExercise(){
    this.route.paramMap.subscribe((params) =>{
      if(params.get('exercise_id')){
        let id = Number(params.get('exercise_id'))
          this.exerciseService.getExerciseById(id).subscribe((data) =>{
          this.exercise = data;
        })
      }
    })
  }
  addToFavorite(exercise_id:number){
    this.favoriteService.addToFavorite(exercise_id).subscribe();
    window.alert("The exercise has been added to the favorites!")
  }
}
