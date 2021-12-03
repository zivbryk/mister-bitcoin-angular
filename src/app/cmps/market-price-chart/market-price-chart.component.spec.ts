import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketPriceChartComponent } from './market-price-chart.component';

describe('MarketPriceChartComponent', () => {
  let component: MarketPriceChartComponent;
  let fixture: ComponentFixture<MarketPriceChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketPriceChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketPriceChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
