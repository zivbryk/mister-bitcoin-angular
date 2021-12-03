import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedTransactionsChartComponent } from './confirmed-transactions-chart.component';

describe('ConfirmedTransactionsChartComponent', () => {
  let component: ConfirmedTransactionsChartComponent;
  let fixture: ComponentFixture<ConfirmedTransactionsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmedTransactionsChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmedTransactionsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
