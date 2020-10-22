import {Component, Input, OnInit} from '@angular/core';
import {MyserviceService} from '../myservice.service';
import {IUser} from '../models/models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: IUser[] = [];
  constructor(private service: MyserviceService) { }

  ngOnInit(): void {
    this.service.getUsers().then(res => this.users = res);
  }
}
