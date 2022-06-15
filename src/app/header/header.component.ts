import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import Cat from '../models/category_api';
import Prof_get_api from '../models/prof_get_api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  pic: string = "";
  username: string = "";
  
  data: Prof_get_api | undefined;
  catdata: [Cat] | undefined;

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
      },

      error=>{
             console.log('Error')
      }
    )


    // this.api.subcategories(this.category)
    // .subscribe(
    //   response => {

    //   console.log('api is correct')
    //   console.log(response);
    //     this.catdata = response;
    //   },

    //   error=>{
    //          console.log('Error')
    //   }
    // )

}
}
