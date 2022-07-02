import { Injectable } from "@angular/core";

import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, ObservableInput } from "rxjs";
import { TemplateBindingParseResult } from "@angular/compiler";

@Injectable({
    providedIn: 'root'
})
export class freeApiService {
    constructor(private httpclient: HttpClient) { }

// BASEURL = "ws://bob.anujagrawal.co.in";
    BASEURL = "ws://192.168.12.115:8000";

    // idusers= 
    // idfriend= 

    // var socket: new WebSocket (BASEURL + "/chats/") ;


    connect(uid1: string, uid2: string){
        var socket= new WebSocket(this.BASEURL + "/ws/" + uid1 + "/" + uid2 + "/")
        socket.onopen = function(e){
            console.log("Websocket connected")
        }
        return socket
    }
    

}
    
// socket.onmessage = function(e){
//     const data = JSON.parse(e.data);
//     if(data.username == message_username){
//         document.querySelector('#chat-body').innerHTML += `<tr>
//                                                                 <td>
//                                                                 <p class="bg-success p-2 mt-2 mr-5 shadow-sm text-white float-right rounded">${data.message}</p>
//                                                                 </td>
//                                                             </tr>`
//     }else{
//         document.querySelector('#chat-body').innerHTML += `<tr>
//                                                                 <td>
//                                                                 <p class="bg-primary p-2 mt-2 mr-5 shadow-sm text-white float-left rounded">${data.message}</p>
//                                                                 </td>
//                                                             </tr>`
//     }
// }

// document.querySelector('#chat-message-submit').onclick = function(e){
//     const message_input = document.querySelector('#message_input');
//     const message = message_input.value;

//     socket.send(JSON.stringify({
//         'message':message,
//         'username':message_username
//     }));

//     message_input.value = '';
// }

    //  socket = new WebSocket(
    //     this.BASEURL
    //     // + window.location.host
    //     + '/ws/'
    //     + idusers
    //     + '/'
    //     + idfriend
    //     + '/'
    // );



    // connect(id: string) {
    //      const socket = new WebSocket(
    //         'ws://'
    //         + window.location.host
    //         + '/ws/'
    //         + id
    //         + '/'
    //     );
    // }

