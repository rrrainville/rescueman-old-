import { Router } from '@angular/router';
import { AuthService } from './../security/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  title = 'Rescue Management';

  showMenu: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.showMenuEmitter.subscribe(
      show => this.showMenu = show
    );
  }

  Logout() {
    console.log('Logout');

    this.authService.doLogout();

    this.router.navigate(['/login']);
  }
}
