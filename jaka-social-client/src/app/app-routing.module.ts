import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LatestPostsComponent } from './home-page/latest-posts/latest-posts.component';
import { ProfileComponent } from './home-page/profile/profile.component';
import { SettingsComponent } from './home-page/settings/settings.component';
import { TrendingPostsComponent } from './home-page/trending-posts/trending-posts.component';
import { UserPostsComponent } from './home-page/user-posts/user-posts.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {
    path: 'home', component: HomePageComponent,
    children: [
      { path: 'latest', component: LatestPostsComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'trending', component: TrendingPostsComponent },
      { path: 'posts', component: UserPostsComponent },
      // { path: 'posts', component: LatestPostsComponent },
      { path: '', pathMatch: 'full', redirectTo: 'posts' }
    ]
  },
  { path: 'login', component: LoginPageComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
