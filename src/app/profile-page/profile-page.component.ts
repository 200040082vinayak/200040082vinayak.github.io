import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import Prof_get_api from '../models/prof_get_api';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  user: string= "";
  picture: string= "";



  data: [Prof_get_api] | undefined;

  constructor(private api: ApiService) { }

  ngOnInit(): void {

    this.api.prof_get(this.user)
    .subscribe(
      response => {

      console.log('api is working')
      console.log(response);
        this.data = response;
      },

      error=>{
             console.log('Error')
  }
    )

}

}
