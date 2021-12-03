import { Component, OnInit } from '@angular/core';
import {
  faChartArea,
  faAddressCard,
  faWallet,
  faBars
} from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  faChartArea = faChartArea
  faAddressCard = faAddressCard
  faWallet = faWallet
  faBars = faBars
  menuStatus: boolean = false
  loggedInUser$: Observable<User>

  constructor(private userService: UserService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loggedInUser$ = this.authService.loggedInUser$
  }

  onLogout(): void {
    this.authService.logout()
    this.router.navigateByUrl('auth/signup')
  }
}
