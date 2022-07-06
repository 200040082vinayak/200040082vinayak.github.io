import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import User from '../models/feed_get_api';
import Prof_get_api from '../models/prof_get_api';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  
  pictureuser: string= "";
  username: string= "";
  indusname: string= "";


  data: Prof_get_api | undefined;

  constructor(private api: ApiService) { }

  ngOnInit(): void {

    this.username= localStorage.getItem("username")||'';


    // localStorage.setItem("industry", this.indusname);

    // if (this.username==null){
    //   return
    // }

    this.api.prof_get(this.username)
    .subscribe(
      response => {

        

      console.log('api is working');
      
      console.log(response);
      
        this.data = response;
        

        console.log(localStorage.getItem("industry"));

        this.pictureuser = localStorage.getItem("profilepic")||"";

      },

      error=>{
             console.log('Error')
  }
    )

}




}
