import { Component, OnInit } from '@angular/core';
import {MyserviceService} from '../myservice.service';
import {ActivatedRoute} from '@angular/router';
import {IAlbum, IUser} from '../models/models';

@Component({
  selector: 'app-userdetailed',
  templateUrl: './userdetailed.component.html',
  styleUrls: ['./userdetailed.component.css']
})
export class UserdetailedComponent implements OnInit {

  public params;
  public user: IUser;
  public albums: IAlbum[] = [];
  constructor(private route: ActivatedRoute, private service: MyserviceService) {
    route.params.subscribe(value => {
      this.params = value;
    });
  }

  ngOnInit(): void {
    this.service.getUser(this.params.id).then(res => {
      this.service.getAlbums(this.params.id).then(r => this.albums = r);
      this.user = res;
    });
  }
}
