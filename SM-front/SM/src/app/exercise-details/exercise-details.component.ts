import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ExerciseService} from "../services/exercises/exercise.service";
import {Exercise} from "../../models/exercise";

@Component({
  selector: 'app-exercise-details',
  templateUrl: './exercise-details.component.html',
  styleUrls: ['./exercise-details.component.css']
})
export class ExerciseDetailsComponent implements OnInit{
  exercise!:Exercise
  constructor(private route:ActivatedRoute, private exerciseService: ExerciseService) {
  }
  ngOnInit():void{
    const token = localStorage.getItem('token')
    if(token){
      this.getExercise();
    }
  }
  getExercise(){
    this.route.params.subscribe((params) =>{
      if(params['exercise_id']){
        let id = Number(params['exercise_id'])
        this.exerciseService.getExerciseById(id).subscribe((data) =>{
          this.exercise = data;
        })
      }
    })
  }
}
