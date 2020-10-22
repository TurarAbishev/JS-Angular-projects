import {Component, OnInit} from '@angular/core';
import {IPost, IUser} from './models/models';
import {MyserviceService} from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'midterm-project';
  public signUpName = '';
  public signUpPassword = '';
  public username = '';
  public password = '';
  public email = '';
  public logged = false;
  public loggedUsername = '';
  public users: IUser[] = [];

  constructor(private service: MyserviceService) {
    this.service.getUsers().then(res => this.users = res);
  }

  ngOnInit(): void {
    if (localStorage.getItem('token') != null) {
      this.logged = true;
      this.loggedUsername = localStorage.getItem('username');
    }
  }

  auth(): void {
    console.log(this.username);
    if (this.username !== '' && this.password !== '') {
      this.service.auth(this.username, this.password).then(res => {
        localStorage.setItem('token', res.access_token);
        localStorage.setItem('username', res.username);
        localStorage.setItem('userId', res.userId);
        this.logged = true;
        this.loggedUsername = res.username;
        this.username = '';
        this.password = '';
      });
    }
  }

  signup(): void {
    if (this.signUpName !== '' && this.email && this.signUpPassword !== '') {
      this.service.signUp(this.signUpName, this.email, this.signUpPassword).then(res =>
        this.service.auth(this.signUpName, this.signUpPassword).then(r => {
          localStorage.setItem('token', r.access_token);
          localStorage.setItem('username', r.username);
          localStorage.setItem('userId', r.userId);
          this.logged = true;
          this.loggedUsername = r.username;
          this.signUpName = '';
          this.signUpPassword = '';
        }));
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
    this.logged = false;
  }
}

