import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../models/contact.model'

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  // host: { 'class': 'contact-list' }
})
export class ContactListComponent implements OnInit {
  @Input() contacts: Contact[]
  // @Output() onSelect = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  trackByFn(idx: number, item: Contact) {
    return item._id
  }
}
