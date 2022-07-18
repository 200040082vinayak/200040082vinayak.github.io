import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-forgot-pass-send-otp',
  templateUrl: './forgot-pass-send-otp.component.html',
  styleUrls: ['./forgot-pass-send-otp.component.scss']
})
export class ForgotPassSendOtpComponent implements OnInit {


  email: string = "";



  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {

  }

  submitted() {

    localStorage.setItem("email", this.email);
    console.log(this.email);

    this.api.send_otp(this.email)
      .subscribe(
        response => {
          console.log("here comes the response");

          if (response.message == 'email does not exist'
          ) {
            alert('User Email Not Found')
          }

          else { console.log("ghost") }


          if (response.status == 'Success'
          ) {
            this.router.navigate(['verifyotp'])
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
