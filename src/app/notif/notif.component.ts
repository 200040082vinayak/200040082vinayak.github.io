import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

import Fr_req from '../models/fr_req';


@Component({
  selector: 'app-notif',
  templateUrl: './notif.component.html',
  styleUrls: ['./notif.component.scss']
})
export class NotifComponent implements OnInit {

  username: string= "";

  data: [Fr_req] | undefined;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.username= localStorage.getItem("username")||'';

    

    // if (this.username==null){
    //   return
    // }

    this.api.requests_get(this.username)
    .subscribe(
      response => {

        

      console.log('api is working');
      
       this.data = response;
       
      console.log(response);
      
        // localStorage.setItem("industry", this.indusname);

        

        

      },

      error=>{
             console.log('Error')
  }
    )


  }

  
  change(el: EventTarget | null) {
    console.log(el)
    if (el == null) return;
    if (el instanceof HTMLInputElement) {
      el.value = "Request Sent"
      console.log(el.id)

      this.api.sendconreq(this.username, el.id)
        .subscribe(
          response => {

            console.log('api is working')
            console.log(response);
            

          },

          error => {
            console.log('Error')
          }
        )
    }

}

}
