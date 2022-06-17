import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import market from '../models/market';
import Subcat from '../models/subcategory_api';


@Component({
  selector: 'app-marketplace-page',
  templateUrl: './marketplace-page.component.html',
  styleUrls: ['./marketplace-page.component.scss']
})
export class MarketplacePageComponent implements OnInit {


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


   
    // this.api.market()
    // .subscribe(
    //   response => {

    //     console.log('api is correct')
    //     console.log(response);
        // for (let sub of response) {
          // item.subcategories.push(sub.name)
        // }
        // item.subcategories = response;
        // console.log(this.catdata);
        
        
        


  //     },

  //     error => {
  //       console.log('Error')
  //     }
  //   )
   }

}
