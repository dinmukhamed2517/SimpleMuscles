import { Injectable } from '@angular/core';
import {Category} from "../../../models/category";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthToken} from "../../../models/AuthToken";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private client: HttpClient) {
  }

  BASE_URL = "http://127.0.0.1:8000/api";
  getCategories():Observable<Category[]>{
    return this.client.get<Category[]>(`${this.BASE_URL}/categories`);
  }
}
