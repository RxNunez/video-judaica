import { TestBed, inject } from '@angular/core/testing';

import { Member.ServiceService } from './member.service.service';

describe('Member.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Member.ServiceService]
    });
  });

  it('should be created', inject([Member.ServiceService], (service: Member.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
