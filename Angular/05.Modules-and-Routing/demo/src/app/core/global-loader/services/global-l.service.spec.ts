import { TestBed } from '@angular/core/testing';

import { GlobalLService } from './global-l.service';

describe('GlobalLService', () => {
  let service: GlobalLService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalLService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
