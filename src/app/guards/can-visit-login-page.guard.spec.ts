import { TestBed } from '@angular/core/testing';

import { CanVisitLoginPageGuard } from './can-visit-login-page.guard';

describe('CanVisitLoginPageGuard', () => {
  let guard: CanVisitLoginPageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanVisitLoginPageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
