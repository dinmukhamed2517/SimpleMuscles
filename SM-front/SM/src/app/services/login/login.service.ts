import { Injectable } from '@angular/core';
import {BehaviorSubject, catchError, Observable, throwError} from "rxjs";
import {AuthToken} from "../../../models/AuthToken";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  BASE_URL = "http://localhost:8000";
  public isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());
  constructor(private httpClient: HttpClient) {
  }
  login(username:string, password: string):Observable<AuthToken>{
    return this.httpClient.post<AuthToken>(`${this.BASE_URL}/api/login/`,{username, password}).pipe(
      catchError(err => {
        return throwError(err);
      })
    )
  }
  private hasToken():boolean {
    return !!localStorage.getItem('token');
  }
  isAuthenticated():Observable<boolean>{
    return this.isAuthenticatedSubject.asObservable();
  }
  logout(){
    localStorage.removeItem('token');
    this.isAuthenticatedSubject.next(false);
  }
}

