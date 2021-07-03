import { TestBed } from '@angular/core/testing';

import { PayloaddispatchService } from './payloaddispatch.service';

describe('PayloaddispatchService', () => {
  let service: PayloaddispatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayloaddispatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
