import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { delay } from 'rxjs/operators';
import * as Rx from 'rxjs';

import { AuthService } from 'src/app/services/auth.service';
import { EventService } from 'src/app/services/event.service';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let service: EventService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      providers: [AuthService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service = fixture.debugElement.injector.get(EventService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // describe('searchSessions', () => {
  //   it('should return matching sessions', fakeAsync(() => {
  //     let searchTerm = 'pipe';
  //     let sessions: [
  //       {
  //         id: 1,
  //         name: 'Using Angular 4 Pipes',
  //         presenter: 'Peter Bacon Darwin',
  //         duration: 1,
  //         level: 'Intermediate',
  //         abstract: `Learn all about`,
  //         voters: ['bradgreen', 'igorminar', 'martinfowler'],
  //       }
  //     ]

  //     let spyLoginUser = spyOn(service, 'searchSessions').and.callFake(() => {
  //       return Rx.of(sessions).pipe(delay(1000));
  //     });

  //     component.searchSessions(searchTerm);
  //     tick(1000);

  //     expect(service.searchSessions).toHaveBeenCalledWith(searchTerm);
  //     expect(component.foundSessions).toEqual(sessions);
  //   }));
  // });
  
});
