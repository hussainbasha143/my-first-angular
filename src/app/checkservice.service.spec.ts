import { TestBed } from '@angular/core/testing';

import { CheckserviceService } from './checkservice.service';

describe('CheckserviceService', () => {
  let service: CheckserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
