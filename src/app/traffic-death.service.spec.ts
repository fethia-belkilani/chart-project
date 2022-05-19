import { TestBed } from '@angular/core/testing';

import { TrafficDeathService } from './traffic-death.service';

describe('TrafficDeathService', () => {
  let service: TrafficDeathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrafficDeathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
