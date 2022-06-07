import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { FeedPageComponent } from './feed-page/feed-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { HeaderComponent } from './header/header.component';

import { HttpClientModule } from '@angular/common/http';
import { ConnectionsComponent } from './connections/connections.component';
import { MessagesPageComponent } from './messages-page/messages-page.component';
import { MessageSidebarComponent } from './message-sidebar/message-sidebar.component';
import { TestComponent } from './test/test.component';
import { MarketplacePageComponent } from './marketplace-page/marketplace-page.component'
import { DatePipe } from '@angular/common';
// import { freeApiService } from './services/freeapi.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    FeedPageComponent,
    ProfilePageComponent,
    HeaderComponent,
    ConnectionsComponent,
    MessagesPageComponent,
    MessageSidebarComponent,
    TestComponent,
    MarketplacePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
