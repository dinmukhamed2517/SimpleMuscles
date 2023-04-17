import { Injectable } from '@angular/core';
import {Category} from "../../../models/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }
  getAll():Category[]{
    return [
      {
        id: 1,
        name : "Chest",
        url : "/assets/chest.png"
      },
      {
        id: 2,
        name : "Biceps",
        url : "/assets/biceps.png"
      },
      {
        id: 3,
        name : "Abdominal",
        url : "/assets/abdominal.png"
      },
      {
        id: 4,
        name : "Shoulders",
        url : "/assets/shoulder.png"
      },
      {
        id: 5,
        name : "Forearm",
        url : "/assets/forearm.png"
      },
      {
        id: 6,
        name : "Calves",
        url : "/assets/calves.png"
      },
      {
        id: 7,
        name : "leg",
        url : "/assets/leg.png"
      },
      {
        id: 8,
        name : "Quadriceps",
        url : "/assets/quadricep.png"
      },
      {
        id: 9,
        name : "Triceps",
        url : "/assets/triceps.png"
      }
    ]
  }
}
