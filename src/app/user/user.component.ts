
import { Component, OnInit } from '@angular/core';
import { User } from 'models/User.model';
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;
  userArray: User[];
  resposta: any;

  constructor(private usuario: UserService) { }

  async ngOnInit() {
    this.resposta = await this.usuario.Get;
    this.userArray = this.resposta;
  }

}
