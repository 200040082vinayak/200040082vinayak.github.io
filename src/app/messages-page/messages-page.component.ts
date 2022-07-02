import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import Friends_get_api from '../models/friends_get_api';
import { freeApiService } from '../services/websocket.service';


@Component({
  selector: 'app-messages-page',
  templateUrl: './messages-page.component.html',
  styleUrls: ['./messages-page.component.scss']
})
export class MessagesPageComponent implements OnInit {

 user:string= "";
 picture: string= "";

 frienddata: Friends_get_api | undefined;

 message: string= "";

 


constructor(private api: ApiService, private webSocket: freeApiService) { }

socket: any;

 ngOnInit(): void {

  this.user= localStorage.getItem("username") || '';


  this.socket = this.webSocket.connect("2", "3")
  this.socket.onmessage = function(e: any){
    console.log("New message received" + e)
  }
  var message = {
    "message": "This is a sample message",
    "username": "anuj"
  }
  // socket.send(JSON.stringify(message))

  this.user= localStorage.getItem("username")||'';

  this.api.friends_get(this.user)
    .subscribe(
      response => {

      console.log('api is working')
      console.log(response);
        this.frienddata = response;

        //  this.picture = this.frienddata.profile_pic;
      },

      error=>{
             console.log('Error')
  }
    )

    this.api.previous_chats(this.user, "roma")
    .subscribe(
      response => {

        console.log('api is working')
        console.log(response);
        response = [{
          message: "This is some message",
          sender: 'anuj',
          timestamp: "2022-06-27T21:26:10.238056Z"
        },
        {
          message: "This is some messlkjlage",
          sender: 'roma',
          timestamp: "2022-06-27T21:36:10.238056Z"
        },
        {
          message: "This is sjlkome message",
          sender: 'anuj',
          timestamp: "2022-06-27T21:16:10.238056Z"
        }
      ]
          // this.frienddata = response;
  
          //  this.picture = this.frienddata.profile_pic;
        },
  
        error=>{
               console.log('Error')
    }
    )
          
  }
  

  share(){
    this.socket.send(JSON.stringify({
      message: this.message,
      username: this.user
    })
    
    );

    console.log(this.message);
  }

}
function username(username: any) {
  throw new Error('Function not implemented.');
}

