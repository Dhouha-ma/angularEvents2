import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { EventResolverService } from './event-resolver.service';

describe('EventResolverService', () => {
  let service: EventResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(EventResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
