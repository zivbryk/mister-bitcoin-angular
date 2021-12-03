import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Contact } from '../models/contact.model';
import { Transaction } from '../models/transaction.model';
import { User } from '../models/user.model'
import { AuthService } from './auth.service';
import { ContactService } from './contact.service';
import { StorageService } from './storage.service';

const USERS =
  [
    {
      _id: '1B95-12D4D3713B0-1AFF',
      name: 'Ziv Bryk',
      password: '1234',
      balance: 100,
      transactions: [
        {
          _id: '5a56640269f443a5d64b32sz',
          toId: '5a566402abce24c6bfe4699d',
          to: 'Dominique Soto',
          at: 1636906933195,
          amount: 20,
          direction: 'Received'
        },
        {
          _id: '5a1g940269f443a5d64b32sz',
          toId: '5a566402f90ae30e97f990db',
          to: 'Faulkner Flores',
          at: 1636906935100,
          amount: 20,
          direction: 'Sent'
        }
      ]
    },
    {
      _id: '1N95-11D1D3113B4-1AFF',
      name: 'Guest',
      password: '1234',
      balance: 100,
      transactions: [
        {
          _id: '5a56640269fd30a5d64b32sz',
          toId: '5a566402abce24c6bfe4699d',
          to: 'Dominique Soto',
          at: 1637751401000,
          amount: 18,
          direction: 'Sent'
        },
        {
          _id: '5a5664026lsd30a5d64b32sz',
          toId: '5a566402abce24c6bfe4699d',
          to: 'Dominique Soto',
          at: 1637834201000,
          amount: 10,
          direction: 'Received'
        },
        {
          _id: '5a56640269fd30a5d64b3ff7',
          toId: '5a566402abce24c6bfe4699d',
          to: 'Dominique Soto',
          at: 1637379702000,
          amount: 20,
          direction: 'Sent'
        },
        {
          _id: '5a5664025jj443a5d64b32sz',
          toId: '5a566402f90ae30e97f990db',
          to: 'Faulkner Flores',
          at: 1637743302000,
          amount: 23,
          direction: 'Received'
        }
      ]
    }
  ]

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit, OnDestroy {

  // private _user$ = new BehaviorSubject<User>(USER)
  // public user$ = this._user$.asObservable()
  // subscription: Subscription
  // loggedInUser: User
  // STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
  constructor(private storageService: StorageService, private authService: AuthService, private contactService: ContactService) { }

  // public getUser() {
  //   return USERS[0]
  // }

  ngOnInit(): void {
    // this.subscription = this.authService.loggedInUser$.subscribe(user => {
    //   console.log("ngOnInit => user", user)
    //   this.loggedInUser = user

    //   // this.authService.setLoggedinUser()
    // })

    // this.authService.setLoggedinUser()
    // this.subscription = this.authService.loggedInUser$.subscribe(user => {
    //   this.loggedInUser = user
    // })
    // this.storageService.save('user', USERS)
  }

  loadUsers() {
    var storedUsers = JSON.parse(localStorage.getItem('user')) || []
    if (!storedUsers.length) this.storageService.save('user', USERS)
  }

  addTransaction(amount: number, contact: Contact, loggedInUser: User): void {
    // this.authService.setLoggedinUser()
    const newTransaction = new Transaction(
      null,
      contact._id,
      contact.name,
      Date.now(),
      amount,
      'Received'
    )
    newTransaction.setId()

    const users = this.storageService.query('user')
    const userToUpdate = users.find(u => u._id === loggedInUser._id)
    userToUpdate.transactions.push(newTransaction)
    userToUpdate.balance = userToUpdate.balance - amount
    this.storageService.save('user', users)
    this.authService.setLoggedinUser()
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe()
  }
}
