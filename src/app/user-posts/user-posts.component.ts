import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import Feed_get_api from '../models/feed_get_api';
import Prof_get_api from '../models/prof_get_api';
import Comments_get_api from '../models/comments_get_api';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {

  constructor(private api: ApiService, public datepipe: DatePipe) { }


  
  content: string = "";
  file: File | undefined;
  user: string = "";
  // // date!: Date;

  comment: string = "";

  pictureuser: string = "";
  username: string = "";




  data: [Feed_get_api] | undefined;
  picturedata: Prof_get_api | undefined;
  comments: [Comments_get_api] | undefined;

  ngOnInit(): void {


    this.username = localStorage.getItem("username") || '';
  
    this.api.user_posts(this.username)
      .subscribe(
        response => {

          console.log('api is working')
          console.log(response);
          this.data = response;



          response.forEach(object => {
            console.log(object.id)

            // localStorage.setItem(object.id,"post_id")
          });
        },

        error => {
          console.log('Error')
        }
      )

    

    this.api.prof_get(this.username)
      .subscribe(
        response => {

          console.log('api is working')
          console.log(response);
          this.picturedata = response;

          this.pictureuser = localStorage.getItem("profilepic") || "";

        },

        error => {
          console.log('Error')
        }
      )


  }


  // like_post(){

  //   this.api.like_post(this.username, localStorage.getItem("post_id")||"")
  //   .subscribe(
  //     response => {

  //     console.log('api is working')
  //     console.log(response);


  //     },

  //     error=>{
  //            console.log('Error')
  // }
  //   )

  // }

  retrieve(id: string) {

    console.log(id)
    localStorage.setItem("post_id", id)

    this.api.like_post(this.username, localStorage.getItem("post_id") || "")
      .subscribe(
        response => {

          console.log('api is working')
          console.log(response);


        },

        error => {
          console.log('Error')
        }
      )


    // console.log(post.id)

    // localStorage.setItem(object.id,"post_id")

  }

  obtain(id: string, comment: string) {

    console.log(id)
    // localStorage.setItem("post_id", id)

    this.api.comment(this.username,id, comment)
      .subscribe(
        response => {

          console.log('api is working')
          console.log(response);
          console.log(comment);


        },

        error => {
          console.log('Error')
        }
      )
      var com_find=  this.data?.find(item => item.id == id );

        if(com_find != undefined){
         com_find.mycomment = "";
        }


    // console.log(post.id)

    // localStorage.setItem(object.id,"post_id")

  }

  comments_get(id: string){

    this.api.comments_get(id)
      .subscribe(
        response => {

          console.log('api is working')
          console.log(response);
          console.log(this.comment);


          
        var com_find=  this.data?.find(item => item.id == id );

        if(com_find != undefined){
         com_find.comments = response;
        }
        },

        error => {
          console.log('Error')
        }
      )

  }


}
