import { TestBed, inject } from '@angular/core/testing';

import { FriendspostsService } from './friendsposts.service';

describe('FriendspostsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FriendspostsService]
    });
  });

  it('should be created', inject([FriendspostsService], (service: FriendspostsService) => {
    expect(service).toBeTruthy();
  }));
});
