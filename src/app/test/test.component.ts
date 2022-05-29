import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

import { EmployeeService } from '../services/employee.service';
import  Employee  from '../models/employee';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent  {

  employees: [Employee] | undefined;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
     this.employeeService.getAllEmployees().subscribe(

      response => {
        console.log("here comes the response");
        console.log(response);
         this.employees = response;
      },
      error => {
        console.log(error);
      }

      
      // catchError(error => {
      //   this.errorMessage = error;
      // });
    );
  }
}
  


  
  
  
  
