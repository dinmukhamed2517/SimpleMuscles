import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Favorite} from "../../../models/Favorite";

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private client:HttpClient) { }

  BASE_URL = "http://localhost:8000";

  getFavorite(user_id:number):Observable<Favorite>{
    return this.client.get<Favorite>(`${this.BASE_URL}/api/favorites/${user_id}`)
  }
  addToFavorite(food_id: number):Observable<Favorite>{
    return this.client.post<Favorite>(`${this.BASE_URL}/api/add-to-favorite/${food_id}/`,{});
  }
  removeFromFavorite(food_id:number):Observable<any>{
    return this.client.delete<Favorite>(`${this.BASE_URL}/api/remove-from-favorite/${food_id}/`)
  }
}
