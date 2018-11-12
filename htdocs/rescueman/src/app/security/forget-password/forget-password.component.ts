import { User } from '../../shared/models/user';
import { AuthService } from '../../shared/controllers/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  user: User = new User();

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  resetPassword() {
    this.authService.resetPassword(this.user);
  }
}
