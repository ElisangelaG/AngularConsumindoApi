import { Component, OnInit } from '@angular/core';
import { Comment } from 'models/Comment.model';
import { CommentService } from '../services/comment.service';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comment: Comment;
  commentArray: Comment[];
  resposta: any;

  constructor(private Comment: CommentService) { }

  async ngOnInit() {
    this.resposta = await this.Comment.Get();
    this.commentArray = this.resposta;
  }

}
