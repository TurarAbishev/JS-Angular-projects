import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostsComponent} from './posts/posts.component';
import {PostdetailedComponent} from './postdetailed/postdetailed.component';
import {UsersComponent} from './users/users.component';
import {UserdetailedComponent} from './userdetailed/userdetailed.component';
import {AlbumComponent} from './album/album.component';

const routes: Routes = [
  {path: 'posts', component: PostsComponent},
  {path: 'posts/:id', component: PostdetailedComponent},
  // {path: 'users', component: UsersComponent},
  {path: 'users/:id', component: UserdetailedComponent},
  {path: 'albums/:id/photos', component: AlbumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
