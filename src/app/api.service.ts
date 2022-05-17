import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  BASE_URL = "http://192.168.0.170:8080/"

  constructor(private http: HttpClient) { }

  register(email: string, password: string) {
    this.http.post(
      this.BASE_URL + "/register",
      {
        username: email,
        password: password
      }
    )
  }

  login(email: string, password: string) {
    this.http.get(
      this.BASE_URL + "/login",
      { params: {
        username: email,
        password: password
      }}
    )
  }

  // post
}
