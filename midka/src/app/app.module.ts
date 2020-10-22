import {BrowserModule} from '@angular/platform-browser';
import {ClassProvider, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpInterceptorService} from './http-interceptor.service';
import {MyserviceService} from './myservice.service';
import {FormsModule} from '@angular/forms';
import {UsersComponent} from './users/users.component';
import {PostsComponent} from './posts/posts.component';
import { PostdetailedComponent } from './postdetailed/postdetailed.component';
import { UserdetailedComponent } from './userdetailed/userdetailed.component';
import { AlbumComponent } from './album/album.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    PostdetailedComponent,
    UserdetailedComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    MyserviceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
