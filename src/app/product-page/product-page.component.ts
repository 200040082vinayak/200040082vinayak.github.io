import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import market from '../models/market';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  
  marketdata: [market] | undefined;
  

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    var subcat = window.location.href.split('=')[1];

    this.api.market(subcat)
    .subscribe(
      response => {

      console.log('api is working')
      console.log(response);
        this.marketdata = response;

        

      },

      error=>{
             console.log('Error')
  }
    )

}
}