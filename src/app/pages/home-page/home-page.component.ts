import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { UserService } from '../../services/user.service'
import { BitcoinService } from '../../services/bitcoin.service'
import { User } from '../../models/user.model'
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  @Output() listHeader: string = 'Your last transactions'
  user: User
  bitcoinRate: Observable<number>
  subscription: Subscription
  constructor(private userService: UserService, private bitcoinService: BitcoinService, private router: Router, private authService: AuthService, private storageService: StorageService) { }

  ngOnInit(): void {
    this.userService.loadUsers()
    this.authService.setLoggedinUser()
    this.subscription = this.authService.loggedInUser$.subscribe(loggedInUser => {
      const users = this.storageService.query('user')

      if (loggedInUser) {
        const userToUpdate = users.find(u => u._id === loggedInUser._id)
        this.user = userToUpdate
      } else {
        this.router.navigateByUrl('auth/signup')
      }
    })

    this.bitcoinRate = this.bitcoinService.getRate()
  }

  ngOnDestroy(): void {
    this.bitcoinService.stopRateUpdates()
    this.subscription.unsubscribe()
  }
}

