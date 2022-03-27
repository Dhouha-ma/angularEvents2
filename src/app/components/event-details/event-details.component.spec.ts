import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { EventService } from 'src/app/services/event.service';
import * as Rx from 'rxjs';
import { delay } from 'rxjs/operators';
import { EventDetailsComponent } from './event-details.component';

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
            snapshot: {
              params: paramsSubject,
            },
          },
        },
      ],
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
  //   it('Should get event details', fakeAsync(() => {
  //     let event = {
  //         id: 1,
  //         name: 'Angular Connect',
  //         date: '9/26/2036',
  //         time: '10:00 am',
  //         price: 599.99,
  //         imageUrl: '/assets/images/angularconnect-shield.png',
  //         location: {
  //           address: '1057 DT',
  //           city: 'London',
  //           country: 'England',
  //         },
  //         sessions: [
  //           {
  //             id: 1,
  //             name: 'Using Angular 4 Pipes',
  //             presenter: 'Peter Bacon Darwin',
  //             duration: 1,
  //             level: 'Intermediate',
  //             abstract: `Learn all about the new pipes in Angular 4, both
  //             how to write them, and how to get the new AI CLI to write
  //             them for you. Given by the famous PBD, president of Angular
  //             University (formerly Oxford University)`,
  //             voters: ['bradgreen', 'igorminar', 'martinfowler'],
  //           }
  //         ]
  //     }

  //     let spyGetGameList = spyOn(service, 'getEvent').and.callFake(() => {
  //       return Rx.of(event).pipe(delay(1000));
  //     });

  //     paramsSubject.next({ 'id': 1 });
  //     component.ngOnInit();
  //     tick(1000);

  //     expect(component.event).toEqual(event);
  //   }));
  // });
 
});
