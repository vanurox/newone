import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './posts/post.service';
import { SiteHeaderComponent } from './site-header/site-header.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    SiteHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
