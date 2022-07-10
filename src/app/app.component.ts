import { Component, OnInit } from '@angular/core';
import { freeApiService } from './services/websocket.service';

import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'myApp';

  username: string = "";

  constructor(private api: ApiService) {}

  // }

  // lstcomments: Comments[];

 ngOnInit(): void {

  //   this._freeApiService.getcomments()

  //   .subscribe
  //   (
  //     data {
  //               this.lstcomments = data
  //     }
  //   ) ;
   }
}

