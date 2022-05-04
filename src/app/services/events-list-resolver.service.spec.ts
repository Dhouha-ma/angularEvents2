import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { EventsListResolverService } from './events-list-resolver.service';

describe('EventsListResolverService', () => {
  let service: EventsListResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(EventsListResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
