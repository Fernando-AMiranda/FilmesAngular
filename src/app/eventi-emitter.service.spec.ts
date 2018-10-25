import { TestBed } from '@angular/core/testing';

import { EventiEmitterService } from './eventi-emitter.service';

describe('EventiEmitterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventiEmitterService = TestBed.get(EventiEmitterService);
    expect(service).toBeTruthy();
  });
});
