import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import Chats_get_api from '../models/chats_get_api';
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

 chatdata: [Chats_get_api] | undefined;

 message: string= "";


 chatter: string=""
 chatter_pic: string= ""
 chatter_id: string= ""

 


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

          
  }

  


  open_right(othername: string, otherimg: string, otherid: string ){

    localStorage.setItem("messenger", othername)
    localStorage.setItem("messenger_pic", otherimg)
    localStorage.setItem("messenger_id", otherid)


    this.chatter = localStorage.getItem("messenger") || ""
    this.chatter_id = localStorage.getItem("messenger_id") || ""
    this.chatter_pic = localStorage.getItem("messenger_pic") || ""


    this.api.previous_chats(this.user, this.chatter)
    .subscribe(
      response => {

        console.log('api is working')
        console.log(response);
        console.log(this.user)
        console.log(this.chatter)
         this.chatdata = response;
       
          // this.chatdata.forEach(element => {
          //   if(element.sender= this.chatter){

              
          //   }
          // });
  
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


  alignclass(chat: Chats_get_api): string{
    console.log(chat)
      
    if(chat.sender= this.chatter){
      console.log("something")
      console.log(chat.sender)
      console.log(this.chatter)
      return("left")
      
    }

    else{
      console.log("no")
      return("right")
    }
    
  }

}
function username(username: any) {
  throw new Error('Function not implemented.');
}

