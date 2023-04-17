import { Injectable } from '@angular/core';
import {Exercise} from "../../../models/exercise";
import {ExercisesComponent} from "../../exercises/exercises.component";

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor() { }
  getExerciseByCategory(categoryId:number):Exercise[]{
    return this.getAll().filter(exercise => exercise.categoryId == categoryId);
  }
  getExerciseById(id:number):Exercise[]{
    return this.getAll().filter(exercise => exercise.id == id);
  }
  getAll():Exercise[]{
    return [
      {
        id:1,
        name:"Cable Chest Press",
        categoryId:1,
        description:"Use a handle attachment. The cables should be set to shoulder height." +
        "Bring both of the handles to your chest and make sure you are in the center of the cable crossover." +
          "Walk a few steps forward. Then press the weight forward.",
        url:"https://media.musclewiki.com/media/uploads/videos/branded/male-cable-chestpress-front.mp4#t=0.1",
        favorite:false
      },
      {
        id:2,
        name:"Push up",
        categoryId:1,
        description:"Place your hands firmly on the ground, directly under shoulders. " +
          "Flatten your back so your entire body is straight and slowly lower your body" +
          "Draw shoulder blades back and down, keeping elbows tucked close to your body" +
          "Exhale as you push back to the starting position.",
        url:"https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-pushup-front.mp4#t=0.",
        favorite:false

      },
      {
        id:3,
        name:"Chin Ups",
        categoryId:5,
        description:"Grab the bar shoulder width apart with a supinated grip (palms facing you)" +
          "With your body hanging and arms fully extended, pull yourself up until your chin is past the bar." +
          "Slowly return to starting position. Repeat.",
        url:"https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-chinup-front.mp4#t=0.",
        favorite:false

      },
      {
        id:4,
        name:"Dumbbell Seated Overhead Press",
        categoryId:4,
        description:"Sit on a bench with back support. Raise the dumbbells to shoulder height with your palms forward." +
          "Raise the dumbbells upwards and pause at the contracted position." +
          "Lower the weights back to starting position.\n",
        url:"https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-seated-overhead-press-front.mp4#t=0.1",
        favorite:false
      }
    ]
  }
}
