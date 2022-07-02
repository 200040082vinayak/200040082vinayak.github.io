import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import News_get_api from '../models/news_get_api';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {


  newsdata: [News_get_api] | undefined;

  constructor( private api: ApiService) { }

  ngOnInit(): void {

    this.api.news_get()

    .subscribe(
      response => {

        console.log('api is working')
        console.log(response);
        this.newsdata = response;
    },

    error => {
      console.log('Error')
    }
    )
  }

}
