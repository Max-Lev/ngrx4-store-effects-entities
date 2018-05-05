import { TestBed, inject } from '@angular/core/testing';

import { DataEffectsService } from './data-effects.service';

describe('DataEffectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataEffectsService]
    });
  });

  it('should be created', inject([DataEffectsService], (service: DataEffectsService) => {
    expect(service).toBeTruthy();
  }));
});
