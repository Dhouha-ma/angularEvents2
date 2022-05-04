import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { EventService } from 'src/app/services/event.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CreateEventComponent } from './create-event.component';

describe('CreateEventComponent', () => {
  let component: CreateEventComponent;
  let fixture: ComponentFixture<CreateEventComponent>;
  let routerSpy = { navigate: jasmine.createSpy('navigate') };
  let eventService;
  let injector = getTestBed();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateEventComponent],
      imports: [FormsModule, HttpClientTestingModule],
      providers: [{ provide: Router, useValue: routerSpy }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    eventService = injector.get(EventService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('cancel', () => {
    it('should redirect to events page', () => {
      component.cancel();

      expect(routerSpy.navigate).toHaveBeenCalledWith(['events']);
    });
  });

  describe('saveProfile', () => {
    it('should save event an redirect to events page', () => {
      let formValues = {
        firstName: '',
        lastName: '',
      };

      spyOn(eventService, 'saveEvent').and.returnValue(of(true));

      component.saveEvent(formValues);
      expect(eventService.saveEvent).toHaveBeenCalledWith(formValues);
      expect(component.isDirty).toBe(false);
      expect(routerSpy.navigate).toHaveBeenCalledWith(['events']);
    });
  });
});
