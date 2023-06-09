import {Component, OnInit} from '@angular/core';
import {ExerciseService} from "../services/exercises/exercise.service";
import {ActivatedRoute} from "@angular/router";
import {Exercise} from "../../models/exercise";
import {FavoriteService} from "../services/favorite/favorite.service";

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit{
  exercises: Exercise[] = [];
  ngOnInit():void {
    this.getExercises();
  }
  constructor(private exerciseService:ExerciseService,private route:ActivatedRoute,
              private favoriteService: FavoriteService) {
  }
  getExercises(){
    this.route.paramMap.subscribe(params => {
      if(params.get('category_id')){
        let id = Number(params.get('category_id'))
        this.exerciseService.getExerciseByCategory(id).subscribe((data)=>{
          this.exercises = data;
        })
      }
    })
  }
}
