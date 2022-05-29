import { Injectable } from "@angular/core";

import { HttpClient ,HttpParams } from "@angular/common/http";
import { Observable, ObservableInput } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class freeApiService

{
    constructor( private httpclient: HttpClient) {}

    // var socket: WebSocket | null;
   
    BASEURL = "http://127.0.0.1:8000/"

    connect(id: string) {
         const socket = new WebSocket(
            'ws://'
            + window.location.host
            + '/ws/'
            + id
            + '/'
        );
    }

}