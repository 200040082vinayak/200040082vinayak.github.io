import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Employee2 from './models/employee';

import Feed_get_api from './models/feed_get_api';
import Prof_get_api from './models/prof_get_api';
import Friends_get_api from './models/friends_get_api';
import Cat from './models/category_api';
import Subcat from './models/subcategory_api';
import Friends from './models/friends_get_api';
import market from './models/market';
import Suggestions_get_api from './models/suggestions_get_api';
import Connectsend from './models/connectsend';
import fr_req from './models/fr_req';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


   BASE_URL = "https://bob.anujagrawal.co.in"
  // BASE_URL= "http://192.168.0.170:8000"




  constructor(private http: HttpClient) { }



  login(username: string, password: string) {
    return this.http.post<any>(
      this.BASE_URL + "/login/",
      {
        username: username,
        password: password
      }
    )
  }

  feed_post(files: File | undefined, username: string, content: string) {
    return this.http.post<any>(
      this.BASE_URL + "/feed/",
      {
        username: username,
        description: content,
        file: files


      }
    )

  }

  addprod(files: File | undefined, username: string, content: string, price: string, prodname: string, long: string) {
    return this.http.post<any>(
      this.BASE_URL + "/createproduct/",
      {
        username: username,
        name: prodname,
        description: content,
        price: price,
        file: files,
        long_description: long


      }
    )

  }

  like_post(username: string, post_id: string){

    return this.http.post<any>(
      this.BASE_URL + "/likes/" + post_id + "/",
      {
        username: username,

      }
    )

  }

  
  comment(username: string, post_id: string, comment: string){

    return this.http.post<any>(
      this.BASE_URL + "/comments/" + post_id + "/",
      {
        username: username,
        comment: comment,
      }
    )

  }

  feed_get() {
    return this.http.get<[Feed_get_api]>(
      this.BASE_URL + "/feed/"
    )
  }

  prof_get(user: string) {
    return this.http.get<Prof_get_api>(
      this.BASE_URL + "/profile/",
      {
        params: {
          username: user
        }
      }
    )
  }

  requests_get(username: string){
    return this.http.get<[fr_req]>(
      this.BASE_URL + "/friend_requests/",

      {
        params: {
          username: username
        }
      }
    )
  }


  friends_get(username: string) {
    return this.http.get<Friends_get_api>(
      this.BASE_URL + "/friends/",

      {
        params: {
          username: username
        }
      }
    )
  }



  messengers_get(user: string,) {
    return this.http.get<any>(
      this.BASE_URL + "/chat/",
      {

      }
    )
  }

  categories(){
    return this.http.get<[Cat]>(
      
      this.BASE_URL + "/categories/"
    )
  }


  subcategories(category: string){
    return this.http.get<[Subcat]>(
      
     this.BASE_URL + "/subcategories/" + category,

    //  {
    //   params: {
    //     category : category
    //   }
    //  }
    )
    
  
  }

  market(subcategory: string){
    return this.http.get<[market]>(
      
      this.BASE_URL + "/products/" + subcategory,
    )
 
 
  }


  suggestions_get(username: string) {
    return this.http.get<[Suggestions_get_api]>(
      this.BASE_URL + "/suggestions/",

      {
        params: {
          username: username
        }
      }
    )
  }

  sendconreq(username: string, otherid: string) {
    
    return this.http.get<Connectsend>(
      this.BASE_URL + "/send_friend_request/" + otherid,

      {
        params: {
          username: username
        }
      }
    )

    
  }


}


  // test(username: string , password: string) {
  //   this.http.get(
  //     this.BASE_URL + "/users/",
  // { params: {
  //   username: email,
  //   password: password
  // }}
  // )


  // http://127.0.0.1:8000/

  // post
// }
