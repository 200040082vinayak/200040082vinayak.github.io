import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Employee2 from './models/employee';

import Feed_get_api from './models/feed_get_api';
import Prof_get_api from './models/prof_get_api';
import Friends_get_api from './models/friends_get_api';
import Cat from './models/category_api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  BASE_URL = "https://bob.anujagrawal.co.in"




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


  friends_get(username: string) {
    return this.http.get<[Friends_get_api]>(
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
    return this.http.get<any>(
      
     this.BASE_URL + "/subcategories/" + category,
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
