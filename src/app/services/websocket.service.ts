import { Injectable } from "@angular/core";

import { HttpClient ,HttpParams } from "@angular/common/http";
import { Observable, ObservableInput } from "rxjs";
import { TemplateBindingParseResult } from "@angular/compiler";

@Injectable({
    providedIn: 'root'
})
export class freeApiService{
    constructor( private httpclient: HttpClient) {}

    BASEURL = "ws://bob.anujagrawal.co.in";

    // var socket: new WebSocket (BASEURL + "/chats/") ;
   
    
}
    // connect(id: string) {
    //      const socket = new WebSocket(
    //         'ws://'
    //         + window.location.host
    //         + '/ws/'
    //         + id
    //         + '/'
    //     );
    // }

