import { TestBed } from '@angular/core/testing';

import { PassdataprofileService } from './passdataprofile.service';

describe('PassdataprofileService', () => {
  let service: PassdataprofileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassdataprofileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
