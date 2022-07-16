import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-funding-page',
  templateUrl: './funding-page.component.html',
  styleUrls: ['./funding-page.component.scss']
})
export class FundingPageComponent implements OnInit {

  username = "";
  solutions = [
    {
      "link": "",
      "image": ""
    }
  ];

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.api.receive_banking_solutions(this.username)
      .subscribe(
        response => {
          if (response.solutions) {
            this.solutions = response.solutions;
            console.log(this.solutions)

          }
        },
        error => {
          console.log(error);

        }
      )
  }

}

