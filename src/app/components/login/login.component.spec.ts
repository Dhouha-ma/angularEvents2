import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import * as Rx from 'rxjs';
import { delay } from 'rxjs/operators';

import { LoginComponent } from './login.component';
import { AuthService } from 'src/app/services/auth.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let routerSpy = { navigate: jasmine.createSpy('navigate') };
  let service: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule],
      providers: [{ provide: Router, useValue: routerSpy }, AuthService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service = fixture.debugElement.injector.get(AuthService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('login', () => {
    it('redirect to events page', fakeAsync(() => {
      let formValues = {
        userName: 'dhouhama',
        password: 'test',
      };

      let spyLoginUser = spyOn(service, 'loginUser').and.callFake(() => {
        return Rx.of(formValues).pipe(delay(1000));
      });

      component.login(formValues);
      tick(1000);

      expect(service.loginUser).toHaveBeenCalledWith(
        formValues.userName,
        formValues.password
      );
      expect(routerSpy.navigate).toHaveBeenCalledWith(['events']);
    }));
  });

  describe('cancel', () => {
    it('redirect to events page', () => {
      component.cancel();
      expect(routerSpy.navigate).toHaveBeenCalledWith(['events']);
    });
  });
});
