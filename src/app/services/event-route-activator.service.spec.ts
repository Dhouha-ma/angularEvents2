import { getTestBed, TestBed } from '@angular/core/testing';
import {
  ActivatedRouteSnapshot,
  convertToParamMap,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { EventRouteActivatorService } from './event-route-activator.service';
import { EventService } from './event.service';

describe('EventRouteActivatorService', () => {
  let service: EventRouteActivatorService;
  let routerSpy = { navigate: jasmine.createSpy('navigate') };
  let eventService;
  let injector = getTestBed();

  const mock = <T, P extends keyof T>(obj: Pick<T, P>): T => obj as T;
  const route = mock<ActivatedRouteSnapshot, 'params'>({
    params: {
      id: '1',
    },
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EventService,
        {
          provide: Router,
          useValue: routerSpy,
        },
      ],
    });

    service = TestBed.inject(EventRouteActivatorService);
    eventService = injector.get(EventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('canActivate', () => {
    it('should return tru if id exists', () => {
      let event = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2036',
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
          address: '1057 DT',
          city: 'London',
          country: 'England',
        },
        sessions: [
          {
            id: 1,
            name: 'Using Angular 4 Pipes',
            presenter: 'Peter Bacon Darwin',
            duration: 1,
            level: 'Intermediate',
            abstract: `Learn all about the new pipes in Angular 4, both
                    how to write them, and how to get the new AI CLI to write
                    them for you. Given by the famous PBD, president of Angular
                    University (formerly Oxford University)`,
            voters: ['bradgreen', 'igorminar', 'martinfowler'],
          },
        ],
      };

      spyOn(eventService, 'getEvent').and.returnValue(of(event));
      service.canActivate(route);

      expect(eventService.getEvent).toHaveBeenCalledWith(1);

      expect(service.canActivate(route)).toBe(true);
    });
  });
});
