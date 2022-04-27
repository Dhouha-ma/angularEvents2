import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { TOASTR_TOKEN } from 'src/app/services/toastr.service';

import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let routerSpy = { navigate: jasmine.createSpy('navigate') };
  let mockAuthService = {
    currentUser: {
      id: 1,
      firstName: 'dhouha',
      lastName: 'mansour',
    },
    updateCurrentUser(firstName, lastName) {},
  };
  let authService;
  let injector = getTestBed();
  let mocktoastr = {
    success(){}
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: AuthService, useValue: mockAuthService },
        { provide: TOASTR_TOKEN, useValue: mocktoastr },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    authService = injector.get(AuthService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('cancel', () => {
    it('redirect to events page', () => {
      component.cancel();
      expect(routerSpy.navigate).toHaveBeenCalledWith(['events']);
    });
  });

  describe('saveProfile', () => {
    it('update user an redirect to events page', () => {
      let formValues = {
        firstName: '',
        lastName: '',
      };

      spyOn(authService, 'updateCurrentUser').and.returnValue(of(true));

      component.saveProfile(formValues);
      expect(authService.updateCurrentUser).toHaveBeenCalledWith(
        formValues.firstName,
        formValues.lastName
      );

    });
  });

  // describe('ngOnInit', () => {
  //   it('Test', () => {
  //     expect().toBe();
  //   });
  // });
});
