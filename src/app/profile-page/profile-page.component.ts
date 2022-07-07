import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import Bprofile from '../models/bprofile';
import User from '../models/feed_get_api';
import market from '../models/market';
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
  businessdata: Bprofile | undefined;
  marketdata: [market] | undefined;


  // the below are for bprofile only

  aboutus: string= "";
  phone: string= "";
  email: string= "";
  website: string= "";
  employee_count: string= "";
  interest: string= "";
  startup_name: string= "";

  constructor(private api: ApiService, private router: Router) { }

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


    this.api.user_store(this.username)
      .subscribe(
        response => {

          console.log('api is working')
          console.log(response);
          this.marketdata = response;



          // response.forEach(object => {
          //   console.log(object.id)

           
          // });
        },

        error => {
          console.log('Error')
        }
      )

    

}


redirect(id: string, price: string, file: string, name: string, description: string, long_description: string, seller: string, sellerpic: string, subcategoryname: string, categoryname: string) {

  localStorage.setItem("prodid", id)
  localStorage.setItem("prodprice", price)
  localStorage.setItem("prodfile", file)
  localStorage.setItem("prodname", name)
  localStorage.setItem("proddescrip", description)
  localStorage.setItem("prodlong", long_description)
  localStorage.setItem("sellername", seller)
  localStorage.setItem("sellerimg", sellerpic)
  localStorage.setItem("prodsub", subcategoryname)
  localStorage.setItem("prodcat", categoryname)
  
  //  this.router.navigate(['product?id='+id])
    // this.router.navigate(['product'])

    var newsite = window.location.href= window.location.href.split('/')[0]+ '/product?id=' + id;

    this.router.navigate ([newsite])

  
 }


}
