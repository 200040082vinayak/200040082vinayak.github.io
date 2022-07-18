import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import Connectsend from '../models/connectsend';
import Suggestions_get_api from '../models/suggestions_get_api';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.scss']
})
export class ConnectionsComponent implements OnInit {



  username: string = "";
  friendid: string = "";


  connectdata: [Suggestions_get_api] | undefined;
  sendcondata: Connectsend | undefined;


  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {

    this.username = localStorage.getItem("username") || '';

    this.api.suggestions_get(this.username)
      .subscribe(
        response => {

          console.log('api is working')
          console.log("sus", response);
          this.connectdata = response;

          //  this.friendid = this.connectdata.id;

        },

        error => {
          console.log('Error')
        }
      )



    //  function confirm() {
    //    document.getElementById("btn").value = "Request Sent";
    //  }





  }


  change(el: EventTarget | null) {
    console.log(el)
    if (el == null) return;
    if (el instanceof HTMLInputElement) {
      el.value = "Request Sent"
      console.log(el.id)

      this.api.sendconreq(this.username, el.id)
        .subscribe(
          response => {

            console.log('api is working')
            console.log(response);
            this.sendcondata = response;

          },

          error => {
            console.log('Error')
          }
        )
    }

    // (el as HTMLInputElement).value = "dlskjfg"

    //     if ( el.value === "Connect" ) {

    //     // this.api.feed_post(username)  /send_friend_request/otheruserid

    //     // data message: sent sucessfully

    // //  .subscribe(


    // //    response => {
    // //      console.log("here comes the response");


    // //      // console.log(response);
    // //      // this.employees = [response];
    // //    },
    // //    error => {
    // //      console.log(error);
    // //    }

    // //  )

    //         el.value = "Request Sent";

    //   }
    //     else {
    //         el.value = "Connect";

    //   }
  }

  taketouser(user: string) {

    localStorage.setItem("otheruser", user);
    this.router.navigate(['user/profile'])
  }


  //  change() {

  //    var butn = document.getElementById("btn") as HTMLButtonElement;



  //    if (butn.value === "Connect")
  //      butn.value = "Request Sent";
  //    else
  //      butn.value = "Connect";

  //  }

}
