import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../services/category/category.service";
import {ExerciseService} from "../services/exercises/exercise.service";

@Component({
  selector: 'app-create-exercise',
  templateUrl: './create-exercise.component.html',
  styleUrls: ['./create-exercise.component.css']
})
export class CreateExerciseComponent implements OnInit{
  name:string = ""
  category:number = 1;
  url:string = ""
  description:string = ""
  ngOnInit() {
  }
  constructor(private exerciseService: ExerciseService) {
  }
  create(){
    this.exerciseService.updateExercise(this.name, this.description, this.url, this.category).subscribe((data) =>{
      window.alert("The exercise was updated successfully!")
    });
  }
}
