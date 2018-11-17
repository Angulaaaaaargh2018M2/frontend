import { TestBed } from '@angular/core/testing';

import { GiftingEventsServiceService } from './gifting-events-service.service';

describe('GiftingEventsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GiftingEventsServiceService = TestBed.get(GiftingEventsServiceService);
    expect(service).toBeTruthy();
  });
});
