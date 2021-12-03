import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Contact } from 'src/app/models/contact.model';
import { Transaction } from 'src/app/models/transaction.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss']
})
export class TransactionsListComponent implements OnInit, OnDestroy {
  @Input() contact: Contact
  @Input() filterByContact: Boolean
  @Input() listHeader: string
  user: User
  transactionsToShow: Transaction[]
  subscription: Subscription
  faAngleRight = faAngleRight
  faAngleLeft = faAngleLeft

  constructor(private authService: AuthService, private storageService: StorageService) { }

  ngOnInit(): void {
    this.subscription = this.authService.loggedInUser$.subscribe(loggedInUser => {
      const users = this.storageService.query('user')
      const userToUpdate = users.find(u => u._id === loggedInUser._id)
      this.user = userToUpdate
      this.filterTransactions()
    })
  }

  trackByFn(idx: number, item: Transaction) {
    return item._id
  }

  // console.log("filterTransactions => this.contact._id", this.contact._id)
  // console.log("filterTransactions => transaction.toId", transaction.toId)
  filterTransactions() {
    if (this.filterByContact) {
      this.transactionsToShow = this.user.transactions
        .filter(transaction => transaction.toId === this.contact._id)
        .sort((a, b) => {
          if (a.at < b.at) return 1
          if (a.at > b.at) return -1
          return 0
        })
    }
    else {
      this.transactionsToShow = this.user.transactions
        .sort((a, b) => {
          if (a.at < b.at) return 1
          if (a.at > b.at) return -1
          return 0
        })
        .filter((transaction, idx) => idx < 3)
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
