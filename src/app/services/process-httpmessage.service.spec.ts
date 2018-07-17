import { TestBed, inject } from '@angular/core/testing';

import { ProcessHttpmessageService } from './process-httpmessage.service';

describe('ProcessHttpmessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProcessHttpmessageService]
    });
  });

  it('should be created', inject([ProcessHttpmessageService], (service: ProcessHttpmessageService) => {
    expect(service).toBeTruthy();
  }));
});
