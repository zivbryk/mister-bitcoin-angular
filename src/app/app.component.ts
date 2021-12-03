import { Component, OnInit } from '@angular/core';
import { UserMsg } from './models/user-msg.model';
import { UserMsgService } from './services/user-msg.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  navigateTo: string
  msg: UserMsg

  constructor(private userMsgService: UserMsgService, private userService: UserService) { }


  ngOnInit(): void {
    this.userService.loadUsers()
    this.navigateTo = 'home'
    this.userMsgService.userMsg$.subscribe(msg => {
      this.msg = msg
    })
  }
}
