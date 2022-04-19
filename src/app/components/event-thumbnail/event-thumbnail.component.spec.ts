import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventThumbnailComponent } from './event-thumbnail.component';

describe('EventThumbnailComponent', () => {
  let component: EventThumbnailComponent;
  let fixture: ComponentFixture<EventThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventThumbnailComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getStartTimeClass', () => {
    it('Test should return green and bold if time is 8 am', () => {
      component.eventThumbnail = {
        id: 1,
        name: 'Angular Connect',
        date: new Date('9/26/2036'),
        time: '8:00 am',
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
          }
        ],
      }

      expect(component.getStartTimeClass()).toEqual(['green', 'bold']);
    });

    it('Test should return empty if time is not 8 am', () => {
     component.eventThumbnail = {
        id: 1,
        name: 'Angular Connect',
        date: new Date('9/26/2036'),
        time: '9:00 am',
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
          }
        ],
      }

      expect(component.getStartTimeClass()).toEqual([]);
    });
  });
});
