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
      "file": ""
    }
  ];

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.api.receive_banking_solutions()
      .subscribe(
        response => {
          if (response[0]) {
            this.solutions = response;
            console.log("ww", this.solutions)

          }
        },
        error => {
          console.log(error);

        }
      )
  }

}

