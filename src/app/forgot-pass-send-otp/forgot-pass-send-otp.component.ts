import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-forgot-pass-send-otp',
  templateUrl: './forgot-pass-send-otp.component.html',
  styleUrls: ['./forgot-pass-send-otp.component.scss']
})
export class ForgotPassSendOtpComponent implements OnInit {


  username: string = "";



  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {

  }

  submitted() {


    console.log(this.username);

    this.api.login(this.username, "lol")
      .subscribe(
        response => {
          console.log("here comes the response");

          if (response.message == 'username or password doesnt exist'
          ) {
            alert('Invalid User')
          }

          else { console.log("ghost") }


          if (response.message == 'login sucessfull'
          ) {
            this.router.navigate(['profile'])
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
