import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetailsPageComponent } from './contact-details-page.component';

describe('ContactDetailsPageComponent', () => {
  let component: ContactDetailsPageComponent;
  let fixture: ComponentFixture<ContactDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
