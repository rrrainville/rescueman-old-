import { Component, OnInit } from '@angular/core';

import { User } from '../../shared/models/user';
import { UsersService } from 'src/app/shared/controllers/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User = new User();

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

  doSignUp() {
    this.usersService.create(this.user);
  }
}
