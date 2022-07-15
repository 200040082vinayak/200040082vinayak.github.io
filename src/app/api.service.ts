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
import Comments_get_api from './models/comments_get_api';
import News_get_api from './models/news_get_api';
import Chats_get_api from './models/chats_get_api';
import Bprofile from './models/bprofile';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  // BASE_URL = "https://bob.anujagrawal.co.in"
  // BASE_URL= "http://172.20.10.3:8000"
  // BASE_URL = "http://192.168.149.115:8000"
  BASE_URL = "https://demo8434240.mockable.io"



  constructor(private http: HttpClient) { }

  send_otp(email: string) {
    return this.http.post<any>(
      this.BASE_URL + "/sendotp/",
      {
        "email": email
      }
    )
  }


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
    // console.log(files);
    // console.log(username)

    const formdata: FormData = new FormData()
    if (files != undefined) {
      formdata.append('file', files)
    }
    formdata.append('description', content)
    formdata.append('username', username)
    return this.http.post<any>(
      this.BASE_URL + "/feed/",
      formdata
    )

  }

  addprod(files: File | undefined, username: string, content: string, price: string, prodname: string, long: string) {


    const formdata: FormData = new FormData()
    if (files != undefined) {
      formdata.append('file', files)
    }

    formdata.append('description', content)
    formdata.append('username', username)
    formdata.append('name', prodname)
    formdata.append('username', username)
    formdata.append('price', price)




    return this.http.post<any>(
      this.BASE_URL + "/createproduct/",
      formdata
      // {
      //   username: username,
      //   name: prodname,
      //   description: content,
      //   price: price,
      //   file: files,
      //   long_description: long


      // }
    )

  }


  addcart(username: string, pid: string, quantity: number, id: string) {

    return this.http.post<any>(
      this.BASE_URL + "/cart/update/" + id + "/",
      {
        username: username,
        pid: pid,
        quantity: quantity

      }
    )


  }

  like_post(username: string, post_id: string) {

    return this.http.post<any>(
      this.BASE_URL + "/likes/" + post_id + "/",
      {
        username: username,

      }
    )

  }


  comment(username: string, post_id: string, comment: string) {

    return this.http.post<any>(
      this.BASE_URL + "/comments/" + post_id + "/",
      {
        username: username,
        comment: comment,
      }
    )

  }

  comments_get(post_id: string) {
    return this.http.get<[Comments_get_api]>(
      this.BASE_URL + "/comments/" + post_id + "/"
    )
  }

  feed_get() {
    return this.http.get<[Feed_get_api]>(
      this.BASE_URL + "/feed/"
    )
  }

  user_posts(username: string) {
    return this.http.get<[Feed_get_api]>(
      this.BASE_URL + "/posts/" + username + "/"
    )
  }

  cart_get(username: string) {
    return this.http.get<any>(
      this.BASE_URL + "/usercarts/",
      {
        params: {
          username: username
        }
      }
    )
  }

  cart_products(id: string) {
    return this.http.get<any>(
      this.BASE_URL + "/cart/list/" + id + "/",
      {
        params: {
          cartid: id
        }
      }
    )
  }

  user_store(username: string) {
    return this.http.get<[market]>(
      this.BASE_URL + "/userproducts/" + username + "/"
    )
  }

  previous_chats(username: string, friendname: string) {
    return this.http.get<[Chats_get_api]>(
      this.BASE_URL + "/chat/" + username + "/" + friendname + "/"
    )
  }

  news_get() {
    return this.http.get<[News_get_api]>(
      this.BASE_URL + "/news/"
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

  bprofile(user: string) {
    return this.http.get<Bprofile>(
      this.BASE_URL + "/bprofile/",
      {
        params: {
          username: user
        }
      }
    )
  }

  requests_get(username: string) {
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

  categories() {
    return this.http.get<[Cat]>(

      this.BASE_URL + "/categories/"
    )
  }


  subcategories(category: string) {
    return this.http.get<[Subcat]>(

      this.BASE_URL + "/subcategories/" + category,

      //  {
      //   params: {
      //     category : category
      //   }
      //  }
    )


  }

  market(subcategory: string) {
    return this.http.get<[market]>(

      this.BASE_URL + "/products/" + subcategory,
    )


  }

  product(id: string) {
    return this.http.get<any>(

      this.BASE_URL + "/products/",

      {
        params: {
          id: id
        }
      }
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

  accconreq(username: string, otherid: string) {

    return this.http.get<Connectsend>(
      this.BASE_URL + "/accept_friend_request/" + otherid,

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
