import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { User } from '../shared/models/user';

import { AuthService } from '../shared/controllers/auth.service';
import { UsersService } from '../shared/controllers/users.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  title = 'Rescue Management';

  showMenu: boolean = false;
  authenticatedUser: User = new User();

  constructor(
    private router: Router,
    private authService: AuthService,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.authService.showMenuEmitter.subscribe(
      show => {
        this.showMenu = show

        if(this.showMenu) {
          this.getUserDetails();
        }
      });
  }

  Logout() {
    console.log('Logout');

    this.authService.doLogout();

    this.router.navigate(['/login']);
  }

  getUserDetails() {
    console.log("UserDetails");

    if(localStorage.userid) {
      this.usersService.get(localStorage.userid)
        .subscribe(data => {
          this.authenticatedUser = data;

          //console.log(data);
          console.log(this.authenticatedUser);
        });
    }   
  }
}
