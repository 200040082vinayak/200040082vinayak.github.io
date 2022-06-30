import { Component, OnInit } from '@angular/core';
// import "https://apis.google.com/js/api:client.js"
// declare gapi: any;

@Component({
  selector: 'app-googlebutton',
  templateUrl: './googlebutton.component.html', 
  styleUrls: ['./googlebutton.component.scss']
})
export class GooglebuttonComponent implements OnInit {
  auth2: any;
  loginElement: any;

  constructor() { }
  ngOnInit(): void {
    
  }


  // prepareLoginButton() {
 
  //   this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
  //     (googleUser) => {
 
  //       let profile = googleUser.getBasicProfile();
  //       console.log('Token || ' + googleUser.getAuthResponse().id_token);
  //       console.log('ID: ' + profile.getId());
  //       console.log('Name: ' + profile.getName());
  //       console.log('Image URL: ' + profile.getImageUrl());
  //       console.log('Email: ' + profile.getEmail());
  //       //YOUR CODE HERE
 
 
  //     }, (error) => {
  //       alert(JSON.stringify(error, undefined, 2));
  //     });
 
  // }

  // googleSDK() {
 
  //   window['googleSDKLoaded'] = () => {
  //     window['gapi'].load('auth2', () => {
  //       this.auth2 = window['gapi'].auth2.init({
  //         client_id: '885988189618-e1t9obdu4a2r54bq1pj696r9d9tj3duh.apps.googleusercontent.com',
  //         cookiepolicy: 'single_host_origin',
  //         scope: 'profile email'
  //       });
  //       this.prepareLoginButton();
  //     });
  //   }
   
  //   (function(d, s, id){
  //     var js, fjs = d.getElementsByTagName(s)[0];
  //     if (d.getElementById(id)) {return;}
  //     js = d.createElement(s); js.id = id;
  //     js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
  //     fjs.parentNode.insertBefore(js, fjs);
  //   }(document, 'script', 'google-jssdk'));
   
  // }

  // ngOnInit(): void {

  //   this.googleSDK();

  // }
  
  

  
 }
