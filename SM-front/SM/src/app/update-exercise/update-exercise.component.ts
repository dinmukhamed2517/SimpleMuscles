import {Component, OnInit} from '@angular/core';
import {ExerciseService} from "../services/exercises/exercise.service";
import {ActivatedRoute} from "@angular/router";
import {Exercise} from "../../models/exercise";

@Component({
  selector: 'app-update-exercise',
  templateUrl: './update-exercise.component.html',
  styleUrls: ['./update-exercise.component.css']
})
export class UpdateExerciseComponent implements OnInit {
  name: string = "";
  category: number = 0;
  url: string = ""
  description: string = ""
  exercise!:Exercise
  ngOnInit() {
    this.route.paramMap.subscribe((params) =>{
      if(params.get("exercise_id")){
        let id = Number(params.get("exercise_id"))
        this.exerciseService.getExerciseById(id).subscribe((exercise)=> {
          this.exercise = exercise;
          this.name = this.exercise.name;
          this.category = this.exercise.categoryId;
          this.url = this.exercise.url;
          this.description = this.exercise.description;
        })
      }
    })
  }

  constructor(private exerciseService: ExerciseService, private route: ActivatedRoute,) {
  }

  update() {
    this.exerciseService.createExercise(this.name, this.description, this.url, this.category).subscribe((data) => {
      window.alert("The exercise was created successfully!")
    });
  }
}
