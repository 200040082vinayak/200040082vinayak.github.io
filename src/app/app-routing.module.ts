import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { FeedPageComponent } from './feed-page/feed-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { MessagesPageComponent } from './messages-page/messages-page.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent} , 
  {path: 'reg', component: RegistrationPageComponent} ,
  {path: 'feed', component: FeedPageComponent} ,
  {path: 'profile', component: ProfilePageComponent},
  {path: 'mssg', component: MessagesPageComponent},
  {path: 'test', component: TestComponent},

  { path: '', redirectTo: 'feed', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
