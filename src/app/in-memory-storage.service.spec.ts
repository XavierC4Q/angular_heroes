/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InMemoryStorageService } from './in-memory-storage.service';

describe('Service: InMemoryStorage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryStorageService]
    });
  });

  it('should ...', inject([InMemoryStorageService], (service: InMemoryStorageService) => {
    expect(service).toBeTruthy();
  }));
});
