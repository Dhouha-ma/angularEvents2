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
        date: '2/10/2037',
        id: 5,
        time: '8:00 am',
      };

      expect(component.getStartTimeClass()).toEqual(['green', 'bold']);
    });

    it('Test should return empty if time is 8 am', () => {
      component.eventThumbnail = {
        date: '2/10/2037',
        id: 5,
        time: '9:00 am',
      };

      expect(component.getStartTimeClass()).toEqual([]);
    });
  });
});
