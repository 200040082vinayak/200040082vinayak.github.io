
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})


export class RegistrationPageComponent implements OnInit{


  // employees: [Employee2] | undefined;
  // // opacity = 0.5;
  username: string = "";
  password: string = "";
  // // something = true;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {

    // if ((localStorage.getItem("username")))
    // this.username = localStorage.getItem("username") || "";
    // this.password = localStorage.getItem("password") || "";



  }

  submitted() {

    localStorage.setItem("username", this.username);
    localStorage.setItem("password", this.password);
    console.log(this.username);

    console.log(this.password);


    alert('Registered successfully')
            this.router.navigate(['login'])

    // this.api.login(this.username, this.password)
    //   .subscribe(
    //     response => {
    //       console.log("here comes the response");

    //        if (response.message == 'username or password doesnt exist'
    //        ) {
    //          alert('Invalid User')
    //        }

    //       else 
    //         {console.log("ghost")}
          

          // if (response.message == 'login sucessfull'
          // ) {
          //   alert('Registered successfully')
          //   this.router.navigate(['google'])

          //   // alert('Success')
          // }





          // console.log(response);
          // this.employees = [response];
      //   },
      //   error => {
      //     console.log(error);
          
      //   }
      // )


  }


}
