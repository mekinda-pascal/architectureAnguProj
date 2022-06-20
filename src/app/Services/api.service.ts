import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor(private http: HttpClient, private router: Router) {}

  public getFalseData() {
    return this.http.get(environment.getFalseData);
  }

  public getUserData() {
    return this.http.get(environment.getUserData);
  }
}
