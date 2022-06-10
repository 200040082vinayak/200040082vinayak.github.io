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

 data: [Friends_get_api] | undefined;


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
