import { Injectable } from '@angular/core';
import {Exercise} from "../../../models/exercise";
import {ExercisesComponent} from "../../exercises/exercises.component";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  BASE_URL = "http://127.0.0.1:8000/api";

  constructor(private client:HttpClient) { }


  getExercises():Observable<Exercise[]>{
    return this.client.get<Exercise[]>(`${this.BASE_URL}/exercises`)
  }

  getExerciseById(exercise_id:number):Observable<Exercise>{
    return this.client.get<Exercise>(`${this.BASE_URL}/exercises/${exercise_id}`)
  }

  getExerciseByCategory(category_id:number):Observable<Exercise []>{
    return this.client.get<Exercise []>(`${this.BASE_URL}/categories/${category_id}/exercises`);
  }
  createExercise(name:string, description:string, url:string, category:number):Observable<Exercise>{
    return this.client.post<Exercise>(`${this.BASE_URL}/exercises/`,{name, description, url, category })
  }
  updateExercise(name:string, description:string, url:string, category:number):Observable<Exercise>{
    return this.client.post<Exercise>(`${this.BASE_URL}/exercises/`,{name, description, url, category })
  }
}
