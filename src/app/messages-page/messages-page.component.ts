import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import Friends_get_api from '../models/friends_get_api';


@Component({
  selector: 'app-messages-page',
  templateUrl: './messages-page.component.html',
  styleUrls: ['./messages-page.component.scss']
})
export class MessagesPageComponent implements OnInit {

 user:string= "";
 picture: string= "";

 frienddata: [Friends_get_api] | undefined;


constructor(private api: ApiService) { }

 ngOnInit(): void {

  this.user= localStorage.getItem("username")||'';

  this.api.friends_get(this.user)
    .subscribe(
      response => {

      console.log('api is working')
      console.log(response);
        this.frienddata = response;

        // this.picture = this.frienddata.profile_pic;
      },

      error=>{
             console.log('Error')
  }
    )
          
  }

}
