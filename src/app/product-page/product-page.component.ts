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
   price: string="";
   img: string="";
   long: string="";
   descrip: string="";
   name: string="";
   seller: string= "";
   sellerimg: string= "";
   subcategory: string= "";
   category: string= "";

  

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    

    this.api.product(localStorage.getItem("prodid") || "")
    .subscribe(
      response => {

      console.log('api is working')
      console.log(response);
        this.marketdata = response;

      //  this.marketdata.forEach(element => {

      //   if(element.id = localStorage.getItem("prodid") || ""){
      //    this.price = element.price
      //   }
      //  });
        

      },

      error=>{
             console.log('Error')
  }
    )


    this.price = localStorage.getItem("prodprice") || ""
    this.img = localStorage.getItem("prodfile") || ""
    this.long = localStorage.getItem("prodlong") || ""
    this.name = localStorage.getItem("prodname") || ""
    this.descrip = localStorage.getItem("proddescrip") || ""
    this.seller = localStorage.getItem("sellername") || ""
    this.sellerimg = localStorage.getItem("sellerimg") || ""
    this.subcategory = localStorage.getItem("prodsub") || ""
    this.category = localStorage.getItem("prodcat") || ""




    
}


change(el: EventTarget | null) {
  console.log(el)
  if (el == null) return;
  if (el instanceof HTMLInputElement) {
    el.value = "Added to Cart!"
}

}

}