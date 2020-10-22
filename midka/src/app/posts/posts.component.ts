import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MyserviceService} from '../myservice.service';
import {IPost, IUser} from '../models/models';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public posts: IPost[] = [];
  public title = '';
  public body = '';
  public author = '';
  public users: IUser[] = [];

  constructor(private route: ActivatedRoute, private service: MyserviceService, private router: Router) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('token') != null) {
      this.service.getPosts().then(res => {
        this.posts = res;
      });
      this.service.getUsers().then(res => {
        this.users = res;
      });
    }
  }

  createPost(): void {
    if (this.title !== '' && this.body !== '') {
      this.service.createPost(this.title, this.body, parseInt(localStorage.getItem('userId'), 10))
        .then(res => {
          this.title = '';
          this.body = '';
          this.posts.push(res);
        });
    }
  }

  filter(): void {
    if (this.author !== ''){
      const id = this.users.filter(user => user.username === this.author)[0].id;
      this.service.get('http://localhost:3000/posts', {userId: id}).then(res => {
        this.posts = res;
        this.author = '';
      });
    }
  }
}
