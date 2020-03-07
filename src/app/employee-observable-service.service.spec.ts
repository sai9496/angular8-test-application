import { TestBed } from '@angular/core/testing';

import { EmployeeObservableServiceService } from './employee-observable-service.service';

describe('EmployeeObservableServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeObservableServiceService = TestBed.get(EmployeeObservableServiceService);
    expect(service).toBeTruthy();
  });
});
