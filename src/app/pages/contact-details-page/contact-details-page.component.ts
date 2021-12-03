import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from '../../models/contact.model'
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})
export class ContactDetailsPageComponent implements OnInit, OnDestroy {
  subscription: Subscription
  contact: Contact
  faTimes = faTimes
  faEdit = faEdit
  listHeader: string
  // loggedInUser$: Observable<User>
  constructor(private contactService: ContactService, private route: ActivatedRoute, private router: Router, private authService: AuthService, private storageService: StorageService) { }

  async ngOnInit(): Promise<void> {
    this.subscription = this.route.data.subscribe(data => {
      this.contact = data.contact
    })
    // this.loggedInUser$ = this.authService.loggedInUser$

    // this.subscription = this.route.params.subscribe(async params => {
    //   this.contact = await this.contactService.getContactById(params.id).toPromise()
    // })
    // this.userSubscription = this.authService.loggedInUser$.subscribe(loggedInUser => {
    //   const users = this.storageService.query('user')
    //   const userToUpdate = users.find(u => u._id === loggedInUser._id)
    //   this.user = userToUpdate
    //   this.authService.saveLocalUser(userToUpdate)
    //   this.authService.setLoggedinUser()
    // })
    this.listHeader = 'Transaction history with ' + this.contact.name
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
    // this.userSubscription.unsubscribe()
  }

  onBack() {
    this.router.navigateByUrl('/contact')
  }
}
