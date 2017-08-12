import { TestBed, inject } from '@angular/core/testing';

import { NewlandingService } from './newlanding.service';

describe('NewlandingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewlandingService]
    });
  });

  it('should be created', inject([NewlandingService], (service: NewlandingService) => {
    expect(service).toBeTruthy();
  }));
});
