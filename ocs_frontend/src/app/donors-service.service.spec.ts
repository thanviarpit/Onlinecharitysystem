import { TestBed } from '@angular/core/testing';

import { DonorsServiceService } from './donors-service.service';

describe('DonorsServiceService', () => {
  let service: DonorsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonorsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
