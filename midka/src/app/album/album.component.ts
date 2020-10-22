import { Component, OnInit } from '@angular/core';
import {MyserviceService} from '../myservice.service';
import {ActivatedRoute} from '@angular/router';
import {IPhoto} from '../models/models';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  public params;
  public photos: IPhoto[] = [];
  constructor(private route: ActivatedRoute, private service: MyserviceService) {
    this.route.params.subscribe(value => this.params = value);
  }

  ngOnInit(): void {
    this.service.getPhotos(this.params.id).then(res => this.photos = res);
  }
}
