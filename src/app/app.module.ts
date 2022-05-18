import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { FeedPageComponent } from './feed-page/feed-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { HeaderComponent } from './header/header.component';

import { HttpClientModule } from '@angular/common/http';
import { ConnectionsComponent } from './connections/connections.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    FeedPageComponent,
    ProfilePageComponent,
    HeaderComponent,
    ConnectionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
