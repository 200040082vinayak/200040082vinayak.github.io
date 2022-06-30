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

const routes: Routes = [
  { path: 'login', component: LoginPageComponent} , 
  {path: 'reg', component: RegistrationPageComponent} ,
  {path: 'feed', component: FeedPageComponent} ,
  {path: 'profile', component: ProfilePageComponent},
  {path: 'mssg', component: MessagesPageComponent},
  {path: 'test', component: TestComponent},
  {path: 'market' , component: MarketplacePageComponent},
  {path: 'product', component: ProductPageComponent},
  {path: 'know', component: KnowledgePageComponent},
  {path: 'news', component: NewsPageComponent},
  {path: 'vc', component:VcPageComponent},
  {path: 'fund', component: FundingPageComponent},
  {path: 'edit', component: ProfileEditComponent},
  {path: 'google', component: GloginPageComponent},
  {path: 'addpr', component: AddPrComponent},
  

  { path: '', redirectTo: 'profile', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
