import { TestBed } from '@angular/core/testing';

import { GenericStorageService } from './generic-storage.service';

describe('GenericStorageService', () => {
  let service: GenericStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
