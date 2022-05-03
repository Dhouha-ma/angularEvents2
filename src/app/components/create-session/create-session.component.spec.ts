import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSessionComponent } from './create-session.component';

describe('CreateSessionComponent', () => {
  let component: CreateSessionComponent;
  let fixture: ComponentFixture<CreateSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateSessionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('saveSession', () => {
    it('should emit session', () => {
      let formValues = {
        id: 1,
        name: 'dhouha',
        presenter: 'me',
        duration: 1,
        level: 'beginner',
        abstract: 'abstract',
      };

      const session = {
        id: undefined,
        name: formValues.name,
        presenter: formValues.presenter,
        duration: formValues.duration,
        level: formValues.level,
        abstract: formValues.abstract,
        voters: [],
      };

      spyOn(component.saveNewSession, 'emit');

      const nativeElement = fixture.nativeElement;
      const button = nativeElement.querySelector('button');
      button.dispatchEvent(new Event('click'));

      component.saveSession(formValues);
      expect(component.saveNewSession.emit).toHaveBeenCalledWith(session);
    });
  });

  describe('cancel', () => {
    it('should emit cancel', () => {
      spyOn(component.cancelAddSession, 'emit');

      component.cancel();
      expect(component.cancelAddSession.emit).toHaveBeenCalled();
    });
  });
});
