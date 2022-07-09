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

  
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
     
  }
}
  


  
  
  
  
