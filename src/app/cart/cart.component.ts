import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../api.service';
import Cart_product_api from '../models/Cart_product_api';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


  cartid: string= "";
  username: string="";
  multiply: number= 0;

  cart_product_data: [Cart_product_api] | undefined;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {

    this.cartid = localStorage.getItem("cartid") || '';
    this.username = localStorage.getItem("username") || '';

    this.api.cart_products(this.cartid)

    .subscribe(
      response => {

      console.log('api is working')
      this.cart_product_data = response;
      console.log(response);
        

      
      for (let i=0;i<100; i++){

         this.multiply += response[i].quantity* response[i].product.price;

        console.log(response[i].product.price)
        console.log(this.multiply)
      }

      // var multiply=  this.cart_product_data?.find(item => (item.product.price)*(item.quantity)== )

        // var multiply = response[0].quantity* response[0].product.price

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


    
  }

  delete(){
    
  }

  redirect(){

    this.router.navigate(['confirm'])
  }

}
