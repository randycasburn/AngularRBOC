import { TestBed } from '@angular/core/testing';

import { InMemUserService } from './in-mem-user.service';

describe('InMemUserServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemUserService = TestBed.get(InMemUserService);
    expect(service).toBeTruthy();
  });
});
