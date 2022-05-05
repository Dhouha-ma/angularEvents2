import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';
import { EventService } from 'src/app/services/event.service';
import * as Rx from 'rxjs';
import { delay } from 'rxjs/operators';
import { EventDetailsComponent } from './event-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EventDetailsComponent', () => {
  let component: EventDetailsComponent;
  let fixture: ComponentFixture<EventDetailsComponent>;
  const paramsSubject = new BehaviorSubject({});
  let service: EventService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventDetailsComponent],
      providers: [
        EventService,
        {
          provide: ActivatedRoute,
          useValue: {
            params: paramsSubject,
            data: {
              events: {},
              forEach() {},
            },
          },
        },
      ],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service = fixture.debugElement.injector.get(EventService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // describe('ngOnInit', () => {
  //   it('should get event details', fakeAsync(() => {
  //     let event = {
  //       id: 1,
  //       name: 'Angular Connect',
  //       date: new Date('9/26/2036'),
  //       time: '10:00 am',
  //       price: 599.99,
  //       imageUrl: '/assets/images/angularconnect-shield.png',
  //       location: {
  //         address: '1057 DT',
  //         city: 'London',
  //         country: 'England',
  //       },
  //       onlineUrl: 'string',
  //       sessions: [
  //         {
  //           id: 1,
  //           name: 'Using Angular 4 Pipes',
  //           presenter: 'Peter Bacon Darwin',
  //           duration: 1,
  //           level: 'Intermediate',
  //           abstract: `Learn all about`,
  //           voters: ['bradgreen', 'igorminar', 'martinfowler'],
  //         },
  //       ],
  //     };

  //     let spyGetEvent = spyOn(service, 'getEvent').and.callFake(() => {
  //       return Rx.of(event).pipe(delay(1000));
  //     });

  //     paramsSubject.next({ 'id': 1 });
  //     component.ngOnInit();
  //     tick(1000);

  //     expect(service.getEvent).toHaveBeenCalledWith(1);
  //     expect(component.event).toEqual(event);
  //     expect(component.addMode).toBe(false);
  //   }));
  // });

  describe('addSession', () => {
    it('set addMode to true', () => {
      component.addSession();
      expect(component.addMode).toBe(true);
    });
  });

  describe('cancelAddSession', () => {
    it('set addMode to false', () => {
      component.cancelAddSession();
      expect(component.addMode).toBe(false);
    });
  });

  describe('saveNewSession', () => {
    it('should call eventservice and set addMode to false', fakeAsync(() => {
      let session = {
        abstract: 'Learn all about',
        duration: 1,
        id: 1,
        level: 'Intermediate',
        name: 'Using Angular 4 Pipes',
        presenter: 'Peter Bacon Darwin',
        voters: ['bradgreen', 'igorminar', 'martinfowler'],
      };

      component.event = {
        id: 1,
        name: 'Angular Connect',
        date: new Date('9/26/2036'),
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
            abstract: `Learn all about`,
            voters: ['bradgreen', 'igorminar', 'martinfowler'],
          },
        ],
      };

      let spyUpdateEvent = spyOn(service, 'saveEvent').and.callFake(() => {
        return Rx.of(component.event).pipe(delay(1000));
      });

      component.saveNewSession(session);
      tick(1000);
      expect(component.event.sessions.length).toBe(2);
      expect(service.saveEvent).toHaveBeenCalledWith(component.event);
      expect(component.addMode).toBe(false);
    }));
  });
});
