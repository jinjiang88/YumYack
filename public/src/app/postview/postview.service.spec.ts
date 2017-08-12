import { TestBed, inject } from '@angular/core/testing';

import { PostviewService } from './postview.service';

describe('PostviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostviewService]
    });
  });

  it('should be created', inject([PostviewService], (service: PostviewService) => {
    expect(service).toBeTruthy();
  }));
});
