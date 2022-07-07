import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import market from '../models/market';

@Component({
  selector: 'app-user-store',
  templateUrl: './user-store.component.html',
  styleUrls: ['./user-store.component.scss']
})
export class UserStoreComponent implements OnInit {

  username: string = "";
  marketdata: [market] | undefined;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {

    this.username = localStorage.getItem("username") || '';
  
    this.api.user_store(this.username)
      .subscribe(
        response => {

          console.log('api is working')
          console.log(response);
          this.marketdata = response;



          // response.forEach(object => {
          //   console.log(object.id)

           
          // });
        },

        error => {
          console.log('Error')
        }
      )
  }


  redirect(id: string, price: string, file: string, name: string, description: string, long_description: string, seller: string, sellerpic: string, subcategoryname: string, categoryname: string) {

    localStorage.setItem("prodid", id)
    localStorage.setItem("prodprice", price)
    localStorage.setItem("prodfile", file)
    localStorage.setItem("prodname", name)
    localStorage.setItem("proddescrip", description)
    localStorage.setItem("prodlong", long_description)
    localStorage.setItem("sellername", seller)
    localStorage.setItem("sellerimg", sellerpic)
    localStorage.setItem("prodsub", subcategoryname)
    localStorage.setItem("prodcat", categoryname)
    
    //  this.router.navigate(['product?id='+id])
      // this.router.navigate(['product'])

      var newsite = window.location.href= window.location.href.split('/')[0]+ '/product?id=' + id;

      this.router.navigate ([newsite])

    
   }


}
