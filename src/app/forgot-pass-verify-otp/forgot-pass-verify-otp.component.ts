import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-forgot-pass-verify-otp',
  templateUrl: './forgot-pass-verify-otp.component.html',
  styleUrls: ['./forgot-pass-verify-otp.component.scss']
})
export class ForgotPassVerifyOtpComponent implements OnInit {

  otp: string = "";
  email: string = "";


  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {

  }

  submitted() {

    this.email = localStorage.getItem("email") || "";
    localStorage.setItem("otp", this.otp);
    console.log(this.otp);

    this.api.verify_otp(this.email, this.otp)
      .subscribe(
        response => {
          console.log("here comes the response");

          if (response.message == 'wrong otp'
          ) {
            alert('Invalid OTP')
          }

          else { console.log("ghost") }


          if (response.message == 'otp verified'
          ) {
            this.router.navigate(['resetpassword'])
            // alert('Success')
          }

          // console.log(response);
          // this.employees = [response];
        },
        error => {
          console.log(error);

        }
      )


  }


}
