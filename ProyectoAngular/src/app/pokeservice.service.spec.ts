import { TestBed, inject } from '@angular/core/testing';

import { PokeserviceService } from './pokeservice.service';

describe('PokeserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokeserviceService]
    });
  });

  it('should be created', inject([PokeserviceService], (service: PokeserviceService) => {
    expect(service).toBeTruthy();
  }));
});
