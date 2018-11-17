import { TestBed } from '@angular/core/testing';

import { GiftsServiceService } from './gifts-service.service';

describe('GiftsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GiftsServiceService = TestBed.get(GiftsServiceService);
    expect(service).toBeTruthy();
  });
});
