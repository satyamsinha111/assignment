import { TestBed } from '@angular/core/testing';

import { CanVisitProtectedPageGuard } from './can-visit-protected-page.guard';

describe('CanVisitProtectedPageGuard', () => {
  let guard: CanVisitProtectedPageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanVisitProtectedPageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
