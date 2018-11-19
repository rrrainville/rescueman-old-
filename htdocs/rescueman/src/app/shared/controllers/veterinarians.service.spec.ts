import { TestBed } from '@angular/core/testing';

import { VeterinariansService } from './veterinarians.service';

describe('VeterinariansService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VeterinariansService = TestBed.get(VeterinariansService);
    expect(service).toBeTruthy();
  });
});
