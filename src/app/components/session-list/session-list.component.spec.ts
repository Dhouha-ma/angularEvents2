import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { VoterService } from 'src/app/services/voter.service';

import { SessionListComponent } from './session-list.component';

describe('SessionListComponent', () => {
  let component: SessionListComponent;
  let fixture: ComponentFixture<SessionListComponent>;
  let voterService;
  let injector = getTestBed();
  let mockAuthService: AuthService = {
    currentUser : {
      id: 1,
      firstName: 'dhouha',
      lastName: 'mansour',
      userName: 'dhouhama',
    },
    loginUser(){},
    isAuthenticated(){
      return true
    },
    updateCurrentUser(){}
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SessionListComponent],
      providers: [
        { provide: AuthService, useValue: mockAuthService }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    voterService = injector.get(VoterService);
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

  describe('userHasVoted', () => {
    it('Test', () => {
      let session = {
        abstract: 'We all know',
        duration: 1,
        id: 2,
        level: 'Intermediate',
        name: 'Getting the most out of your dev team',
        presenter: 'Jeff Cross',
        voters: ['johnpapa', 'bradgreen', 'igorminar', 'martinfo'],
      };
      spyOn(voterService, 'userHasVoted').and.returnValue(of(true));

      component.userHasVoted(session);
      expect(voterService.userHasVoted).toHaveBeenCalledWith(
        session,
        mockAuthService.currentUser.userName
      );
    });
  });

  describe('toggleVote', () => {
    it('Test', () => {
      let session = {
        abstract: 'We all know',
        duration: 1,
        id: 2,
        level: 'Intermediate',
        name: 'Getting the most out of your dev team',
        presenter: 'Jeff Cross',
        voters: ['johnpapa', 'bradgreen', 'igorminar', 'martinfo'],
      };

      // component.userHasVoted(session) {
      //   return true
      // } 
      // expect().toBe();
    });
  }); 
  
});
