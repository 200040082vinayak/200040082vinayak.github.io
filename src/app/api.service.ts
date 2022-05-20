import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import EmployeeResult from './models/employee';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // BASE_URL = "http://192.168.0.170:8080/"
  BASE_URL = "https://dummy.restapiexample.com/api/v1/"

  constructor(private http: HttpClient) { }

  register(email: string, password: string) {
    return this.http.get<EmployeeResult>(
      this.BASE_URL + "employees",
      { params: {
        // username: email,
        // password: password
      }}
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
