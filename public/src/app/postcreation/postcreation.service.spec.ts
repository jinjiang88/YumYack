import { TestBed, inject } from '@angular/core/testing';

import { PostcreationService } from './postcreation.service';

describe('PostcreationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostcreationService]
    });
  });

  it('should be created', inject([PostcreationService], (service: PostcreationService) => {
    expect(service).toBeTruthy();
  }));
});
