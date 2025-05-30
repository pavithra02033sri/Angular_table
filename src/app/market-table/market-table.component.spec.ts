import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketTableComponent } from './market-table.component';

describe('MarketTableComponent', () => {
  let component: MarketTableComponent;
  let fixture: ComponentFixture<MarketTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketTableComponent]
    });
    fixture = TestBed.createComponent(MarketTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
