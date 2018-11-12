import { Router } from '@angular/router';
import { AuthService } from '../../shared/controllers/auth.service';
import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { User } from '../../shared/models/user';
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
      email: [localStorage.usename, [Validators.required, Validators.email]],
      password: [localStorage.password, [Validators.required, Validators.minLength(4)]],
      rememberme: [localStorage.password ? true : false]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.formLogin.controls; }

  doLogin() {
    //clear localstorage
    if(localStorage.usename || localStorage.password) {
      localStorage.removeItem('usename');
      localStorage.removeItem('password');
    }

    if(this.formLogin.invalid)
      return;

    this.authService.userAuthentication(this.f.email.value, this.f.password.value)
      .subscribe(res => {
        //console.log(res.token);
        console.log(res);

        this.authService.setUserAuthenticated(true, res['token'], res['userid']);

        this.router.navigate(['/home']);

        this.toastr.success('User authenticated...');

        if(this.f.rememberme.value) {
          localStorage.setItem('usename', this.f.email.value);
          localStorage.setItem('password', this.f.password.value);
        }

        this.router.navigate(['/']);
      },
      (err: HttpErrorResponse) => {
        if(err.error.error)
          this.toastr.error(err.error.error);
        else
          this.toastr.error('Invalid Information!');

        this.authService.setUserAuthenticated(false, null, null);
      });
  }
}
