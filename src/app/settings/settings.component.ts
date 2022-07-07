import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import Bprofile from '../models/bprofile';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  businessdata: Bprofile | undefined;

  username: string="";
  phone: string= "";
  email: string= ""

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {

    this.username= localStorage.getItem("username")||'';

    this.api.bprofile(this.username)
    .subscribe(
      response => {

      console.log('api is working');
      
      console.log(response);
      
        this.businessdata = response;
        

         
        this.phone=this.businessdata.mobile
        this.email=this.businessdata.startup_email 
        


      },

      error=>{
             console.log('Error')
  }
    )


  }

}
