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
import { ProductPageComponent } from './product-page/product-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { KnowledgePageComponent } from './knowledge-page/knowledge-page.component';
import { VcPageComponent } from './vc-page/vc-page.component';
import { FundingPageComponent } from './funding-page/funding-page.component';
import { TrendingnewsComponent } from './trendingnews/trendingnews.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { GloginPageComponent } from './glogin-page/glogin-page.component';
import { GooglebuttonComponent } from './googlebutton/googlebutton.component';
import { AddPrComponent } from './add-pr/add-pr.component';
import { NotifComponent } from './notif/notif.component';
import { UserStoreComponent } from './user-store/user-store.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { SettingsComponent } from './settings/settings.component';
import { CartComponent } from './cart/cart.component';
import { AdsComponent } from './ads/ads.component';
import { ConfirmPageComponent } from './confirm-page/confirm-page.component';
import { OrderplacedPageComponent } from './orderplaced-page/orderplaced-page.component';
import { FriendsPageComponent } from './friends-page/friends-page.component';
import { OtherprofilePageComponent } from './otherprofile-page/otherprofile-page.component';
import { FooterComponent } from './footer/footer.component';
import { ForgotPassSendOtpComponent } from './forgot-pass-send-otp/forgot-pass-send-otp.component';
import { ForgotPassVerifyOtpComponent } from './forgot-pass-verify-otp/forgot-pass-verify-otp.component';
import { ForgotPassResetPasswordComponent } from './forgot-pass-reset-password/forgot-pass-reset-password.component';
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
    MarketplacePageComponent,
    ProductPageComponent,
    NewsPageComponent,
    KnowledgePageComponent,
    VcPageComponent,
    FundingPageComponent,
    TrendingnewsComponent,
    ProfileEditComponent,
    GloginPageComponent,
    GooglebuttonComponent,
    AddPrComponent,
    NotifComponent,
    UserStoreComponent,
    UserPostsComponent,
    SettingsComponent,
    CartComponent,
    AdsComponent,
    ConfirmPageComponent,
    OrderplacedPageComponent,
    FriendsPageComponent,
    OtherprofilePageComponent,
    FooterComponent,
    ForgotPassSendOtpComponent,
    ForgotPassVerifyOtpComponent,
    ForgotPassResetPasswordComponent
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
