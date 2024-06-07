import { TestBed } from '@angular/core/testing';

import { ServiseForArrayService } from './servise-for-array.service';

describe('ServiseForArrayService', () => {
  let service: ServiseForArrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiseForArrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
