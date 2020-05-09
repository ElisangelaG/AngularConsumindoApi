import { Injectable } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { comments } from '../models/comments.model';
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private gitHubUrl = 'https://jsonplaceholder.typicode.com/comments/';

  constructor(private http: HttpClient,
    private comment: comments) { }

  async getComments() {
    const retorno = await this.http.get(this.gitHubUrl).toPromise();
    console.log(retorno);
    return retorno;
  }

  async getCommentsById(id: number) {
    const retorno = await this.http.get(this.gitHubUrl + id).toPromise();
    console.log(retorno);
    return retorno;
  }

  async postCommentsById(comment) {
    const retorno = await this.http.post(this.gitHubUrl, comment).toPromise();
    console.log(retorno);
    return retorno;
  }


}

