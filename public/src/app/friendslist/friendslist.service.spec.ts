import { TestBed, inject } from '@angular/core/testing';

import { FriendslistService } from './friendslist.service';

describe('FriendslistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FriendslistService]
    });
  });

  it('should be created', inject([FriendslistService], (service: FriendslistService) => {
    expect(service).toBeTruthy();
  }));
});
