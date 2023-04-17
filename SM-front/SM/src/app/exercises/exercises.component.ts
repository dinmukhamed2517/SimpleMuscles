import {Component, OnInit} from '@angular/core';
import {ExerciseService} from "../services/exercises/exercise.service";
import {ActivatedRoute} from "@angular/router";
import {Exercise} from "../../models/exercise";

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit{
  exercises: Exercise[] = [];
  ngOnInit():void {
    this.route.params.subscribe(params => {
      if(params['categoryId']){
        this.exercises = this.exerciseService.getExerciseByCategory(params['categoryId']);
      }
    })
  }
  constructor(private exerciseService:ExerciseService,private route:ActivatedRoute) {
  }
}
