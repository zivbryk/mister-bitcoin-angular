import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, NgForm } from '@angular/forms';
import { UserMsgService } from 'src/app/services/user-msg.service';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit, OnDestroy {
  @Input() contact: Contact
  // @Input() loggedInUser: User
  faExchangeAlt = faExchangeAlt
  subscription: Subscription
  user: User
  // amount: number
  // form: FormGroup
  constructor(private userService: UserService,
    private authService: AuthService,
    private storageService: StorageService,
    private userMsgService: UserMsgService) { }

  ngOnInit(): void {
    this.subscription = this.authService.loggedInUser$.subscribe(loggedInUser => {
      const users = this.storageService.query('user')
      const userToUpdate = users.find(u => u._id === loggedInUser._id)
      this.user = userToUpdate
    })
  }

  onTransferCoins(form: NgForm): void {
    this.userService.addTransaction(form.value.amount, this.contact, this.user)
    // this.contact.transactionsNum++
    form.reset()
    this.userMsgService.setUserMsg({ txt: 'Transfer Completed!', isOpen: true })
  }

  getBalance(form: NgForm) {
    return this.user.balance - form.value.amount
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
