import { TestBed } from '@angular/core/testing';

import { DatosAPIService } from './datos-api.service';

describe('DatosAPIService', () => {
  let service: DatosAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
