import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-forgot-pass-reset-password',
  templateUrl: './forgot-pass-reset-password.component.html',
  styleUrls: ['./forgot-pass-reset-password.component.scss']
})
export class ForgotPassResetPasswordComponent implements OnInit {

  pass1: string = "";
  pass2: string = "";
  email: string = "";

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {

  }

  submitted() {

    this.email = localStorage.getItem("email") || "";
    console.log(this.pass1);
    if (this.pass1 == this.pass2) {

      this.api.reset_password(this.email, this.pass1)
        .subscribe(
          response => {
            console.log("here comes the response");


            if (response.message == 'password reset'
            ) {
              alert('Success')
              this.router.navigate(['login'])
              // 
            }

            // console.log(response);
            // this.employees = [response];
          },
          error => {
            console.log(error);

          }
        )
    }
    else {
      alert("passwords do not match")
    }


  }

}
