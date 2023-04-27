import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {AuthToken} from "../../../models/AuthToken";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  BASE_URL = "http://localhost:8000";
  constructor(private httpClient: HttpClient) {
  }
  login(username:string, password: string):Observable<AuthToken>{
    return this.httpClient.post<AuthToken>(`${this.BASE_URL}/api/login/`,{username, password})
  }
}
