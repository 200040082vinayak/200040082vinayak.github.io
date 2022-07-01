import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { EmployeeService } from '../services/employee.service';
import { DatePipe } from '@angular/common';
import Feed_get_api from '../models/feed_get_api';
import Prof_get_api from '../models/prof_get_api';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.scss'],

})
export class FeedPageComponent implements OnInit {

  // the below are the variables for post for feed

  content: string = "";
  file: File | undefined;
  user: string = "";
  // // date!: Date;

  comment: string= "";

  pictureuser: string = "";
  username: string = "";


  // the below are the variables for get for feed

  data: [Feed_get_api] | undefined;
  picturedata: Prof_get_api | undefined;



  //     HTMLInputEvent: any extends Event? {
  //      target: HTMLInputElement & EventTarget;
  //  }

  
  //     handleFileInput(files: File) {
  //       if()
  //      this.file = (e.target as HTMLInputElement).files[0];
  //  }


  constructor(private api: ApiService, public datepipe: DatePipe) { }

  ngOnInit(): void {

    this.api.feed_get()
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

    this.username = localStorage.getItem("username") || '';

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

  obtain(id: string) {

    console.log(id)
    // localStorage.setItem("post_id", id)

    this.api.comment(this.username,id, this.comment)
      .subscribe(
        response => {

          console.log('api is working')
          console.log(response);
          console.log(this.comment);


        },

        error => {
          console.log('Error')
        }
      )


    // console.log(post.id)

    // localStorage.setItem(object.id,"post_id")

  }




  posts() {


    // this.date= new Date();
    // var latest_date  = this.datepipe.transform(this.date, 'MM-dd') ;

    // this.content= document.getElementById("area_text")!.innerText;

    // localStorage.setItem("username", this.user);
    // localStorage.setItem("date", latest_date!.toString());
    // localStorage.setItem("content", this.content);


    if (this.content == null || this.content == undefined || this.content == "") {
      alert('Please provide input')
      console.log("no data")

      return;
    }

    else {

      alert('Saved Successfully')
      
    this.user = localStorage.getItem("username") || '';

    console.log(this.user);


    this.api.feed_post(this.file, this.user, this.content)
      .subscribe(


        response => {
          console.log("here comes the response");
          console.log(this.content);
          console.log(this.file);

          this.user = localStorage.getItem("username") || '';

          //     console.log(this.user);

          console.log(response);
          // this.employees = [response];

        
      
        },
        error => {
          console.log(error);
        }
      )
    }

    console.log("here comes the response");
    console.log(this.content);
    console.log(this.file);


    console.log(this.content);


    
  }

  openFile() {
    console.log("File open")
  }

}
