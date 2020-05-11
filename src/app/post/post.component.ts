import { Component, OnInit } from '@angular/core';
import { Post } from 'models/Post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  Post: Post;
  PostA: Post[];
  resposta: any;

  constructor(private post: PostService) { }

  async ngOnInit() {
    this.resposta = await this.post.Get();
    this.PostA = this.resposta;
  }

  onSubmit() {

  }

}
