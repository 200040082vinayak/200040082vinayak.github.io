
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})


export class RegistrationPageComponent implements OnInit {


  // employees: [Employee2] | undefined;
  // // opacity = 0.5;
  username: string = "";
  companyname: string = "";
  website: string = "";
  email: string = "";
  mobile: string = "";
  password: string = "";
  password2: string = "";
  checkcustomer: boolean = false;


  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  submitted() {
    if (this.checkcustomer == true && this.password == this.password2) {

      this.api.register(this.username, this.companyname, this.website, this.email, this.mobile, this.password)
        .subscribe(
          response => {
            console.log("here comes the response");

            if (response.message == "registration success and user logged in") {
              alert('Success')
              this.router.navigate(['/'])
            }

            // console.log(response);
            // this.employees = [response];
          },
          error => {
            console.log(error);
          }
        )
    }
    else if (this.password != this.password2) {
      alert("Passwords do not match")
    }
    else {
      alert("Please click on the checkbox")
    }
  }



}
