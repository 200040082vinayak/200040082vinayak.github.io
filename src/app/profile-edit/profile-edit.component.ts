import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import Bprofile from '../models/bprofile';
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
  businessdata: Bprofile | undefined;


  
  aboutus: string= "";
  phone: string= "";
  email: string= "";
  website: string= "";
  employee_count: string= "";
  interest: string= "";
  startup_name: string= "";

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


    this.api.bprofile(this.username)
    .subscribe(
      response => {

      console.log('api is working');
      
      console.log(response);
      
        this.businessdata = response;
        
        this.aboutus=this.businessdata.desc
        this.employee_count=this.businessdata.employee_count 
        this.interest=this.businessdata.intrest 

        this.startup_name=this.businessdata.legal_name_of_startup 
        this.phone=this.businessdata.mobile
        this.email=this.businessdata.startup_email 
        this.website=this.businessdata.website 


      },

      error=>{
             console.log('Error')
  }
    )

  }

}
