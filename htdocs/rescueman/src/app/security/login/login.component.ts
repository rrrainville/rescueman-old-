import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { User } from '../user';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  user: User = new User();

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService
    ) { }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      username: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
  }

  doLogin() {
    this.authService.userAuthentication(this.user.name, this.user.password)
      .subscribe(res => {
        //console.log(res.token);
        //console.log(res);

        this.authService.setUserAuthenticated(true, res['token']);

        this.router.navigate(['/home']);

        this.toastr.success('User authenticated...');

        this.router.navigate(['/']);
      },
      (err: HttpErrorResponse) => {
        if(err.error.error)
          this.toastr.error(err.error.error);
        else
          this.toastr.error('Invalid Information!');

        this.authService.setUserAuthenticated(false, null);
      });
  }
}
