import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  
   cartid: string="";
   username: string="";

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    
    this.cartid = localStorage.getItem("cartid") || '';
    this.username = localStorage.getItem("username") || '';




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

    this.api.addcart(this.username, localStorage.getItem("prodid") || "", "5", this.cartid)
        .subscribe(
          response => {

            console.log('api is working')
            console.log(response);
            // this.sendcondata = response;

          },

          error => {
            console.log('Error')
          }
        )
}

}

taketouser(user: string){

  localStorage.setItem("otheruser", user);
  this.router.navigate (['user/profile'])
}

}