import { TestBed } from '@angular/core/testing';

import { EmployeeTestService } from './employee-test.service';

describe('EmployeeTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeTestService = TestBed.get(EmployeeTestService);
    expect(service).toBeTruthy();
  });
});
