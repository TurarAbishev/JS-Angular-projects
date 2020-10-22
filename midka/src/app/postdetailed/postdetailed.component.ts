import {Component, OnInit} from '@angular/core';
import {MyserviceService} from '../myservice.service';
import {IComment, IPost} from '../models/models';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-postdetailed',
  templateUrl: './postdetailed.component.html',
  styleUrls: ['./postdetailed.component.css']
})
export class PostdetailedComponent implements OnInit {

  public post: IPost;
  public comments: IComment[] = [];
  public params;
  public name = '';
  public body = '';
  constructor(private route: ActivatedRoute, private service: MyserviceService) {
    route.params.subscribe(value => {
      this.params = value;
    });
  }

  ngOnInit(): void {
    this.service.getPost(this.params.id).then(res => {
      this.post = res;
      this.service.getComments(this.params.id).then(r => {
        this.comments = r;
      });
    });
  }

  commentPost(): void {
    this.service.commentPost(this.name, this.body, this.params.id, localStorage.getItem('username')).then(res => this.comments.push(res));
  }
}
