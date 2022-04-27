import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionListComponent } from './session-list.component';

describe('SessionListComponent', () => {
  let component: SessionListComponent;
  let fixture: ComponentFixture<SessionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SessionListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('filterSessions', () => {
    it('should set the new list visibleSessions to equal sessions list', () => {
      component.sessions = [
        {
          abstract: 'Learn all about',
          duration: 1,
          id: 1,
          level: 'Intermediate',
          name: 'Using Angular 4 Pipes',
          presenter: 'Peter Bacon Darwin',
          voters: ['bradgreen', 'igorminar', 'martinfowler'],
        },
      ];

      component.filterSessions('all');
      expect(component.visibleSessions).toEqual(component.sessions);
    });

    // it('should set the new list visibleSessions to equal filtered sessions list for Intermediate', () => {
    //   component.sessions = [
    //     {
    //       abstract: 'We all know',
    //       duration: 1,
    //       id: 2,
    //       level: 'Intermediate',
    //       name: 'Getting the most out of your dev team',
    //       presenter: 'Jeff Cross',
    //       voters: ['johnpapa', 'bradgreen', 'igorminar', 'martinfo'],
    //     }
    //   ];

    //   component.filterSessions('Intermediate');
    //   expect(component.visibleSessions).toEqual(component.sessions);
    // });
  });
});
