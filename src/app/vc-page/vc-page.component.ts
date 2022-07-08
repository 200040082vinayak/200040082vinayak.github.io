import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import Cart_get_api from '../models/Cart_get_api';

@Component({
  selector: 'app-vc-page',
  templateUrl: './vc-page.component.html',
  styleUrls: ['./vc-page.component.scss']
})
export class VcPageComponent implements OnInit {


  username: string="";
  cartdata: Cart_get_api | undefined;

  constructor(private api: ApiService) { }

  ngOnInit(): void {

    this.username = localStorage.getItem("username") || '';


    this.api.previous_chats("anuj", "roma")
    .subscribe(
      response => {

        console.log('api is working')
        console.log(response);
      },

      error=>{
        console.log('Error')
}
)


this.api.cart_get(this.username)
    .subscribe(
      response => {

        console.log('api is working')
        console.log(response);

        this.cartdata= response;

       console.log (response.id)
       
       localStorage.setItem("cartid", response.id);


        
      },

      error=>{
        console.log('Error')
}
)

        
        

        
  }



}
