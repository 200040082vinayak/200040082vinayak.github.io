import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';
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
  // subcatdata: [Subcat] | undefined;
  subcatfetched = false;

  constructor(private api: ApiService) { }


  clear(){
    localStorage.clear();
  }

  ngOnInit(): void {

    this.username = localStorage.getItem("username") || '';

    this.api.prof_get(this.username)
      .subscribe(
        response => {

          console.log('api is working')
          console.log(response);
          this.data = response;

          this.pic = this.data.profile_pic;

          localStorage.setItem("profilepic", this.pic);

        },

        error => {
          console.log('Error')
        }
      )


    this.api.categories()
      .subscribe(
        response => {

          console.log('api is correct')
          console.log(response);
          this.catdata = response;

          for (const item of this.catdata) {
            item.subcategories = [];
            // this.categoryname = item.name;




            this.api.subcategories(item.name)
              .subscribe(
                response => {

                  console.log('api is correct')
                  console.log(response);
                  for (let sub of response) {
                    item.subcategories.push(sub.name)
                    
                    localStorage.setItem("subvalue", sub.name)
                    console.log(localStorage.getItem("subvalue"))
                    
                  }
                  // item.subcategories = response;
                  
                  console.log(this.catdata);
                  
                  
                  


                },

                error => {
                  console.log('Error')
                }
              )
          }
          this.subcatfetched = true;

          // this.categoryname = this.catdata.toString();


        },

        error => {
          console.log('Error')
        }
      )





  }
}
