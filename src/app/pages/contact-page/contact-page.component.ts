import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Contact } from '../../models/contact.model'
import { ContactService } from '../../services/contact.service'
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  faPlus = faPlus
  contacts: Contact[]
  contacts$: Observable<Contact[]>
  subscription: Subscription

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.query()
    this.contacts$ = this.contactService.contacts$
  }

}
