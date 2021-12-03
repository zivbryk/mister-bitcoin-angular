import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserCred } from '../models/user-cred.model';
import { User } from '../models/user.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = true
  STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
  private _loggedInUser$ = new BehaviorSubject<User>(null)
  public loggedInUser$: Observable<User> = this._loggedInUser$.asObservable()

  constructor(private storageService: StorageService) { }

  checkIsLoggedIn(): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.isLoggedIn), 1000)
      //instead of this, implement checkking if there is a loggedIn user 
    })
  }

  login(userCred: UserCred): User {
    const users = this.storageService.query('user')
    const user = users.find(user => user.name === userCred.name)
    this._loggedInUser$.next(user)
    return this.saveLocalUser(user)
  }

  async signup(userCred: UserCred) {
    const newUser = new User(null, userCred.name, userCred.password, 100, [])
    const user = await this.storageService.post('user', newUser)
    this._loggedInUser$.next(user)
    return this.saveLocalUser(user)
  }

  async logout() {
    sessionStorage.removeItem(this.STORAGE_KEY_LOGGEDIN_USER)
    this._loggedInUser$.next(null)
  }

  saveLocalUser(user) {
    sessionStorage.setItem(this.STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    this._loggedInUser$.next(user)
    return user
  }

  setLoggedinUser() {
    // return JSON.parse(sessionStorage.getItem(this.STORAGE_KEY_LOGGEDIN_USER) || 'null')
    const currentUser = JSON.parse(sessionStorage.getItem(this.STORAGE_KEY_LOGGEDIN_USER) || null)
    this._loggedInUser$.next(currentUser)
  }
}
