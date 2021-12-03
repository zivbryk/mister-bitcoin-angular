import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactFilter } from 'src/app/models/contact-filter.model';
import { ContactService } from 'src/app/services/contact.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit {
  filterBy: ContactFilter
  subscription: Subscription
  faSearch = faSearch
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.subscription = this.contactService.filterBy$.subscribe(filterBy => {
      this.filterBy = filterBy
    })
  }

  onSetFilter() {
    this.contactService.setFilter({ ...this.filterBy })
  }

}
