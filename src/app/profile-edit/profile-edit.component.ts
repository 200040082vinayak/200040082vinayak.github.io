import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import Prof_get_api from '../models/prof_get_api';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {

  constructor(private api: ApiService) { }


  pictureuser: string= "";
  username: string= "";
  industryname: string="";


  data: Prof_get_api | undefined;

  ngOnInit(): void {



    this.industryname= localStorage.getItem("industry")||'';
    console.log(this.industryname)


    this.username= localStorage.getItem("username")||'';

    

    // if (this.username==null){
    //   return
    // }

    this.api.prof_get(this.username)
    .subscribe(
      response => {

        

      console.log('api is working');
      
      console.log(response);
      
        this.data = response;
        // localStorage.setItem("industry", this.indusname);

        console.log(localStorage.getItem("industry"));

        this.pictureuser = localStorage.getItem("profilepic")||"";

      },

      error=>{
             console.log('Error')
  }
    )
  }

}
