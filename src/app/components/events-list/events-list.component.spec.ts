import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { EventsListComponent } from './events-list.component';

describe('EventsListComponent', () => {
  let component: EventsListComponent;
  let fixture: ComponentFixture<EventsListComponent>;
  const paramsSubject = new BehaviorSubject({});
  const eventsData = {
    events: [
      {
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
            abstract: `Learn all about the new pipes in Angular 4, both 
        how to write them, and how to get the new AI CLI to write 
        them for you. Given by the famous PBD, president of Angular 
        University (formerly Oxford University)`,
            voters: ['bradgreen', 'igorminar', 'martinfowler'],
          },
        ],
      },
    ],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventsListComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: paramsSubject,
              data: eventsData,
            },
          },
        },
      ],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should return events', () => {
      expect(component.events).toBe(eventsData.events);
    });
  });
});
