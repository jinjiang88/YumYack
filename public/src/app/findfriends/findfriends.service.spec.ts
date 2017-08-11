import { TestBed, inject } from '@angular/core/testing';

import { FindfriendsService } from './findfriends.service';

describe('FindfriendsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FindfriendsService]
    });
  });

  it('should be created', inject([FindfriendsService], (service: FindfriendsService) => {
    expect(service).toBeTruthy();
  }));
});
