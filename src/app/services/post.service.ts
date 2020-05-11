import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { async } from '@angular/core/testing'
import { __await } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private jsonPlaceHolder = 'https://jsonplaceholder.typicode.com/post';

  constructor(private http: HttpClient) { }

  async Get() {
    let resposta = await this.http.get(this.jsonPlaceHolder).toPromise();
    return resposta;
  }

  async getById(id) {
    let resposta = await this.http.get(this.jsonPlaceHolder + id).toPromise();
    return resposta;
  }

  async Post(object) {
    let resposta = await this.http.post(this.jsonPlaceHolder, object, { observe: 'response' }).toPromise();
    return resposta;
  }
}
