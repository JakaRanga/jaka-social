import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PostComponent } from './components/post/post.component';
import { LatestPostsComponent } from './home-page/latest-posts/latest-posts.component';
import { TrendingPostsComponent } from './home-page/trending-posts/trending-posts.component';
import { UserPostsComponent } from './home-page/user-posts/user-posts.component';
import { SettingsComponent } from './home-page/settings/settings.component';
import { ProfileComponent } from './home-page/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomePageComponent,
    LoginPageComponent,
    SidebarComponent,
    PostComponent,
    LatestPostsComponent,
    TrendingPostsComponent,
    UserPostsComponent,
    SettingsComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
