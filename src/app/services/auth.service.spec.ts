import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('isAuthenticated', () => {
    it('should return true if user is authenticated', () => {
      service.currentUser = {
        id: 1,
        firstName: 'dhouha',
        lastName: 'mansour',
        userName: 'dhouhama',
      };
      expect(service.isAuthenticated()).toBe(true);
    });
    it('should return false if user is not authenticated', () => {
      expect(service.isAuthenticated()).toBe(false);
    });
  });
  
});
