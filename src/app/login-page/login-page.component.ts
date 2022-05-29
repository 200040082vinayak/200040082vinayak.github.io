import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

import Employee2  from '../models/employee';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {


  employees: [Employee2] | undefined;
  opacity = 0.5;
  username: string = "";
  password: string = "";
  something = true;

  constructor(private api: ApiService) { }

  ngOnInit(): void {

    // if ((localStorage.getItem("username")))
    this.username = localStorage.getItem("username") || "";
    this.password = localStorage.getItem("password") || "";


    this.api.register('asdlfk', 'asdf')
    .subscribe(
      response => {
        console.log("here comes the response");
        console.log(response);
         this.employees = response.data;
      },
      error => {
        console.log(error);
      }
    )


  }

  submit(){
    console.log(this.username);
    localStorage.setItem("username", this.username);
    localStorage.setItem("password", this.password);
    console.log(this.password);
  }


}
