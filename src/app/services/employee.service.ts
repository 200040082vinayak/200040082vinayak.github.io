import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import Employee from '../models/employee';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

    constructor(private httpClient: HttpClient) {};
  
    getAllEmployees(): Observable<[Employee]> {
      return this.httpClient.get<[Employee]>("https://bob.anujagrawal.co.in/users");
    }
  }