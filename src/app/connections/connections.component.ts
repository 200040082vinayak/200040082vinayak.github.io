import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import Suggestions_get_api from '../models/suggestions_get_api';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.scss']
})
export class ConnectionsComponent implements OnInit {



  username: string= "";


  connectdata: [Suggestions_get_api] | undefined;

  constructor(private api: ApiService) { }

  ngOnInit(): void {

    this.username= localStorage.getItem("username")||'';

    this.api.suggestions_get(this.username)
    .subscribe(
      response => {

      console.log('api is working')
      console.log(response);
        this.connectdata = response;

        

      },

      error=>{
             console.log('Error')
  }
    )

  }

}
