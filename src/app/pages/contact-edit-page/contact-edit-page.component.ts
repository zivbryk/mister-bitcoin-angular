import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { faTimes, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserMsgService } from 'src/app/services/user-msg.service';

@Component({
  selector: 'contact-edit-page',
  templateUrl: './contact-edit-page.component.html',
  styleUrls: ['./contact-edit-page.component.scss']
})
export class ContactEditPageComponent implements OnInit, OnDestroy {
  contact: Contact
  subscription: Subscription
  faTimes = faTimes
  faTrashAlt = faTrashAlt
  form: FormGroup
  constructor(
    private contactService: ContactService,
    private router: Router, private route: ActivatedRoute,
    private fb: FormBuilder,
    private userMsgService: UserMsgService
  ) { }

  ngOnInit(): void {
    this.subscription = this.route.data.subscribe(({ contact }) => {
      this.contact = { ...contact } || this.contactService.getEmptyContact() as Contact
    })

    this.form = this.fb.group({
      name: [this.contact.name ? this.contact.name : '', [Validators.required, Validators.pattern(/^[a-zA-z]+\s[a-zA-z]+$/i)]],
      email: [this.contact.email ? this.contact.email : '', [Validators.required, Validators.pattern(/^\S+@\S+\.\S+$/i)]],
      phone: [this.contact.phone ? this.contact.phone : '']
    })
  }

  onBack() {
    this.router.navigateByUrl('/contact')
  }

  async onSaveContact() {
    this.contact.name = this.form.value.name
    this.contact.email = this.form.value.email
    this.contact.phone = this.form.value.phone

    await this.contactService.saveContact(this.contact).toPromise()
    this.contact._id ?
      this.userMsgService.setUserMsg({ txt: 'Contact Updated!', isOpen: true }) :
      this.userMsgService.setUserMsg({ txt: 'Contact Saved!', isOpen: true })

    this.router.navigateByUrl('contact')
  }

  onRemoveContact() {
    this.contactService.removeContact(this.contact._id)
    this.router.navigateByUrl('/contact')
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
