import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Contact } from '../models/contact.model';
import { UserMsg } from '../models/user-msg.model';

@Injectable({
  providedIn: 'root'
})
export class UserMsgService {
  private _userMsg$ = new BehaviorSubject<UserMsg>({ txt: '', isOpen: false })
  public userMsg$ = this._userMsg$.asObservable()
  constructor() { }

  setUserMsg(msg: UserMsg) {
    this._userMsg$.next(msg)
    setTimeout(() => {
      this._userMsg$.next({ txt: msg.txt, isOpen: false })
    }, 3000)
    // this.isMsgOpen = true
    // setTimeout(() => {
    //   this.isMsgOpen = false
    // }, 2000)
  }
}
