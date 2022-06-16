import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import Cat from '../models/category_api';
import Prof_get_api from '../models/prof_get_api';
import Subcat from '../models/subcategory_api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  pic: string = "";
  username: string = "";
  categoryname: string = "";
  
  data: Prof_get_api | undefined;
  catdata: [Cat] | undefined;
  subcatdata: [Subcat] | undefined;

  constructor(private api: ApiService) { }

  ngOnInit(): void {

    this.username= localStorage.getItem("username")||'';

    this.api.prof_get(this.username)
    .subscribe(
      response => {

      console.log('api is working')
      console.log(response);
        this.data = response;

        this.pic = this.data.profile_pic;

        localStorage.setItem("profilepic", this.pic);

  } ,

  error=>{
         console.log('Error')
}
    )


    this.api.categories()
    .subscribe(
      response => {

      console.log('api is correct')
      console.log(response);
        this.catdata = response;
        

        this.categoryname = this.catdata.toString();
      },

      error=>{
             console.log('Error')
      }
    )

    

    this.api.subcategories(this.categoryname)
    .subscribe(
      response => {

      console.log('api is correct')
      console.log(response);
        this.subcatdata = response;


        
      },

      error=>{
             console.log('Error')
      }
    )



}
}
