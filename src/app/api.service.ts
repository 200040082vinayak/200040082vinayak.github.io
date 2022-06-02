import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Employee2 from './models/employee';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  BASE_URL = "https://bob.anujagrawal.co.in"
  // BASE_URL = "http://127.0.0.1:8000"

  

  constructor(private http: HttpClient) { }

  // register(email: string, password: string) {
  //   return this.http.get<EmployeeResult>(
  //     this.BASE_URL + "employees",
  //     { params: {
  //       // username: email,
  //       // password: password
  //     }}
  //   )
  // }

  login(username: string, password: string) {
   return this.http.post<any>(
      this.BASE_URL + "/login/",
      {
        username : username,
        password : password
      }
    )
  }

  // feed_post (files: [File], author: Employee2, date: Date, content: string  ) {
  //   return this.http.post(
  //     this.BASE_URL + "/login/",
  //     {
  //       files: [File] ,
  //  author: Employee ,
  //  date: Date,
  //  content: string

  //     }
  //   )
  
  // }

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
