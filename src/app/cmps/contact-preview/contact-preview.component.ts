import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../models/contact.model'
import { ContactService } from '../../services/contact.service'
import { faEdit } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent {
  @Input() contact: Contact
  imgUrl: String
  faEdit = faEdit

  constructor(private contactService: ContactService) { }
}
