import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import Friends_get_api from '../models/friends_get_api';

@Component({
  selector: 'app-friends-page',
  templateUrl: './friends-page.component.html',
  styleUrls: ['./friends-page.component.scss']
})
export class FriendsPageComponent implements OnInit {


  user: string= "";
  frienddata: Friends_get_api | undefined;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {

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

  taketouser(user: string){

    localStorage.setItem("otheruser", user);
    this.router.navigate (['user/profile'])
  }
}
