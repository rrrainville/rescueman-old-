import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../shared/controllers/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
    ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    console.log('AuthGuard');

    return this.verifyAccess();
  }

  private verifyAccess() {
    if(this.authService.userIsAuthenticated()) {
      return true;
    }

    this.router.navigate(['/login']);

    return false;
  }
}
