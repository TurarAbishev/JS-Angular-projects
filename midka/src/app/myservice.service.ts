import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {MainService} from './main.service';
import {IAlbum, IAuthResponse, IComment, IPhoto, IPost, IUser} from './models/models';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService extends MainService {

  constructor(http: HttpClient) {
    super(http);
  }

  auth(username: string, password: string): Promise<IAuthResponse> {
    return this.post('http://localhost:3000/sign-in', {
      username,
      password
    });
  }

  signUp(username: string, email: string, password: string): Promise<IAuthResponse> {
    return this.post('http://localhost:3000/users', {
      username,
      email,
      password
    });
  }

  getPosts(): Promise<IPost[]> {
    return this.get('http://localhost:3000/posts', {});
  }

  createPost(title: string, body: string, userId: number): Promise<IPost> {
    return this.post('http://localhost:3000/posts', {
      title,
      body,
      userId
    });
  }

  getPost(id: number): Promise<IPost> {
    return this.get(`http://localhost:3000/posts/${id}`, {});
  }

  getComments(postId: number): Promise<IComment[]> {
    return this.get(`http://localhost:3000/posts/${postId}/comments`, {});
  }

  commentPost(name: string, body: string, postId: number, email: string): Promise<IComment> {
    return this.post('http://localhost:3000/comments', {
      name,
      body,
      postId,
      email
    });
  }

  getUsers(): Promise<IUser[]> {
    return this.get('http://localhost:3000/users', {});
  }

  getUser(id: number): Promise<IUser> {
    return this.get(`http://localhost:3000/users/${id}`, {});
  }

  getAlbums(userId: number): Promise<IAlbum[]> {
    return this.get(`http://localhost:3000/users/${userId}/albums`, {});
  }

  getPhotos(albumId: number): Promise<IPhoto[]> {
    return this.get(`http://localhost:3000/albums/${albumId}/photos`, {});
  }
}
