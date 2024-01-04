import { TestBed } from '@angular/core/testing';

import { LineMachineService } from './line-machine.service';

describe('LineMachineServiceService', () => {
  let service: LineMachineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LineMachineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
