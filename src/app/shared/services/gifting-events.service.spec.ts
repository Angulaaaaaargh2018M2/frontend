import { TestBed } from '@angular/core/testing';

import { GiftingEventsService } from './gifting-events.service';

describe('GiftingEventsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GiftingEventsService = TestBed.get(GiftingEventsService);
    expect(service).toBeTruthy();
  });
});
