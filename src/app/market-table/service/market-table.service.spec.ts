import { TestBed } from '@angular/core/testing';

import { MarketTableService } from './market-table.service';

describe('MarketTableService', () => {
  let service: MarketTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarketTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
