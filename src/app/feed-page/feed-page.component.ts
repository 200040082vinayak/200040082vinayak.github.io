import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.scss']
})
export class FeedPageComponent implements OnInit {

  //  files: [File] ;
  //  author: Employee ;
  //  date: Date;
  //  content: string;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  submit(){
    // console.log(this.username);
    // localStorage.setItem("username", this.username);
    // localStorage.setItem("password", this.password);
    // console.log(this.password);

    
    this.api.login('', '')
    .subscribe(
      response => {
        console.log("here comes the response");

        
        // console.log(response);
        // this.employees = [response];
      },
      error => {
        console.log(error);
      }
    )
  }

  openFile(){
    console.log("File open")
  }

}
