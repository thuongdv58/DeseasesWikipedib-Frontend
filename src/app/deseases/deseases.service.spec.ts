import { TestBed, inject } from '@angular/core/testing';

import { DeseasesService } from './deseases.service';

describe('DeseasesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeseasesService]
    });
  });

  it('should be created', inject([DeseasesService], (service: DeseasesService) => {
    expect(service).toBeTruthy();
  }));
});
