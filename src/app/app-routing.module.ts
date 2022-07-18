import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { FeedPageComponent } from './feed-page/feed-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { MessagesPageComponent } from './messages-page/messages-page.component';
import { TestComponent } from './test/test.component';
import { MarketplacePageComponent } from './marketplace-page/marketplace-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { KnowledgePageComponent } from './knowledge-page/knowledge-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { VcPageComponent } from './vc-page/vc-page.component';
import { FundingPageComponent } from './funding-page/funding-page.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { GloginPageComponent } from './glogin-page/glogin-page.component';
import { AddPrComponent } from './add-pr/add-pr.component';
import { NotifComponent } from './notif/notif.component';
import { UserStoreComponent } from './user-store/user-store.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { SettingsComponent } from './settings/settings.component';
import { CartComponent } from './cart/cart.component';
import { ConfirmPageComponent } from './confirm-page/confirm-page.component';
import { OrderplacedPageComponent } from './orderplaced-page/orderplaced-page.component';
import { FriendsPageComponent } from './friends-page/friends-page.component';
import { OtherprofilePageComponent } from './otherprofile-page/otherprofile-page.component';
import { ForgotPassSendOtpComponent } from './forgot-pass-send-otp/forgot-pass-send-otp.component';
import { ForgotPassVerifyOtpComponent } from './forgot-pass-verify-otp/forgot-pass-verify-otp.component';
import { ForgotPassResetPasswordComponent } from './forgot-pass-reset-password/forgot-pass-reset-password.component';
import { CookieComponent } from './cookie/cookie.component';
import { TermsComponent } from './terms/terms.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { PrivacyComponent } from './privacy/privacy.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'reg', component: RegistrationPageComponent },
  { path: 'feed', component: FeedPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'mssg', component: MessagesPageComponent },
  { path: 'test', component: TestComponent },
  { path: 'market', component: MarketplacePageComponent },
  { path: 'product', component: ProductPageComponent },
  { path: 'know', component: KnowledgePageComponent },
  { path: 'news', component: NewsPageComponent },
  { path: 'vc', component: VcPageComponent },
  { path: 'banking', component: FundingPageComponent },
  { path: 'edit', component: ProfileEditComponent },
  { path: 'google', component: GloginPageComponent },
  { path: 'addpr', component: AddPrComponent },
  { path: 'notif', component: NotifComponent },
  { path: 'store', component: UserStoreComponent },
  { path: 'posts', component: UserPostsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'confirm', component: ConfirmPageComponent },
  { path: 'placed', component: OrderplacedPageComponent },
  { path: 'friends', component: FriendsPageComponent },
  { path: 'user/profile', component: OtherprofilePageComponent },
  { path: 'sendotp', component: ForgotPassSendOtpComponent },
  { path: 'verifyotp', component: ForgotPassVerifyOtpComponent },
  { path: 'resetpassword', component: ForgotPassResetPasswordComponent },
  { path: 'cookie', component: CookieComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'disclaimer', component: DisclaimerComponent },
  { path: 'privacy', component: PrivacyComponent },




  { path: '', redirectTo: 'profile', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
