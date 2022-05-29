import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import EmployeeResult from './models/employee';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // BASE_URL = "http://192.168.0.170:8080/"
  // BASE_URL = "https://bob.anujagrawal.co.in"
  // BASE_URL = "http://127.0.0.1:8000"

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
      this.BASE_URL + "/api/token",
      { params: {
        username: email,
        password: password
      }}
    )
  }

  // test(username: string , password: string) {
  //   this.http.get(
  //     this.BASE_URL + "/users/",
      // { params: {
      //   username: email,
      //   password: password
      // }}
    // )
  }

  // http://127.0.0.1:8000/

  // post
// }
