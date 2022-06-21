import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import Suggestions_get_api from '../models/suggestions_get_api';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.scss']
})
export class ConnectionsComponent implements OnInit {



  username: string = "";


  connectdata: [Suggestions_get_api] | undefined;


  constructor(private api: ApiService) { }

  ngOnInit(): void {

    this.username = localStorage.getItem("username") || '';

    this.api.suggestions_get(this.username)
      .subscribe(
        response => {

          console.log('api is working')
          console.log(response);
          this.connectdata = response;



        },

        error => {
          console.log('Error')
        }
      )



    //  function confirm() {
    //    document.getElementById("btn").value = "Request Sent";
    //  }



 

  }

     
  //  change( el )
  //  {
  //      if ( el.value === "Connect" )

  //      this.api.feed_post(username)  /send_friend_request/otheruserid

  //      data message: sent sucessfully
  //   .subscribe(

      
  //     response => {
  //       console.log("here comes the response");

       
  //       // console.log(response);
  //       // this.employees = [response];
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   )
  //          el.value = "Request Sent";
  //      else
  //          el.value = "Connect";
  //  }

  
  

   change() {

     var butn = document.getElementById("btn") as HTMLButtonElement;

  

     if (butn.value === "Connect")
       butn.value = "Request Sent";
     else
       butn.value = "Connect";
    
   }

}
