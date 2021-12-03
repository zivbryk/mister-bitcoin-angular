import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, OnDestroy {
  user: User
  subscription: Subscription
  constructor(private authService: AuthService) { }
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
    // const isLoggedIn = await this.authService.checkIsLoggedIn()
    // return isLoggedIn;
    this.authService.setLoggedinUser()
    this.subscription = this.authService.loggedInUser$.subscribe(user => {
      this.user = user
    })
    return new Promise(res => res(this.user ? true : false))
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
