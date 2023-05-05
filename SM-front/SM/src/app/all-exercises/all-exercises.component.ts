import {Component, OnInit} from '@angular/core';
import {Exercise} from "../../models/exercise";
import {ExerciseService} from "../services/exercises/exercise.service";
import {ActivatedRoute} from "@angular/router";
import {FavoriteService} from "../services/favorite/favorite.service";

@Component({
  selector: 'app-all-exercises',
  templateUrl: './all-exercises.component.html',
  styleUrls: ['./all-exercises.component.css']
})
export class AllExercisesComponent implements OnInit {
  exercises: Exercise[] = [];

  ngOnInit():void {
    this.getExercises();
  }
  constructor(private exerciseService:ExerciseService,private route:ActivatedRoute,
              private favoriteService: FavoriteService) {
  }
  getExercises(){
    this.exerciseService.getExercises().subscribe((data) =>{
      this.exercises = data;
    })
  }
}
